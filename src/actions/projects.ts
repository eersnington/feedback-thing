"use server";

import { z } from "zod";
import { db } from "@/server/db";
import { projects, forms } from "@/server/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const projectSchema = z.object({
  name: z.string().min(1, "Project name is required").max(255),
  domain: z
    .string()
    .min(1, "Domain is required")
    .regex(/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/, "Invalid domain format"),
});

export async function createProject(formData: FormData) {
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const validatedFields = projectSchema.safeParse({
    name: formData.get("name"),
    domain: formData.get("domain"),
  });

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, domain } = validatedFields.data;

  try {
    const result = await db.transaction(async (tx) => {
      const [newProject] = await tx
        .insert(projects)
        .values({
          userId: user.id,
          name,
          domain,
        })
        .returning();

      if (newProject) {
        await tx.insert(forms).values({
          projectId: newProject.id,
          title: `${name} Feedback Form`,
          description: `Default feedback form for ${name}`,
        });
      }

      return newProject;
    });

    revalidatePath("/dashboard/projects");
    return { success: true, project: result };
  } catch (error) {
    console.error("Failed to create project and form:", error);
    return { error: "Failed to create project and form. Please try again." };
  }
}
