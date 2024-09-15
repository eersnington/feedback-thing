// app/dashboard/projects/actions.ts
"use server";

import { z } from "zod";
import { db } from "@/server/db";
import { projects } from "@/server/db/schema";
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
    const newProject = await db
      .insert(projects)
      .values({
        userId: user.id,
        name,
        domain,
      })
      .returning();

    revalidatePath("/dashboard/projects");
    return { success: true, project: newProject[0] };
  } catch (error) {
    return { error: "Failed to create project. Please try again." };
  }
}
