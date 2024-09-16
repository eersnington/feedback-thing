import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/server/db";
import { projects, forms, feedbackItems } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";
import { writeFile } from "fs/promises";
import path from "path";

const feedbackSchema = z.object({
  projectId: z.string().uuid(),
  type: z.string().max(20),
  rating: z.number().int().min(1).max(5).optional(),
  feedback: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const projectId = formData.get("projectId") as string;
    const type = formData.get("type") as string;
    const rating = formData.get("rating")
      ? Number(formData.get("rating"))
      : undefined;
    const feedback = formData.get("feedback") as string;
    const screenshot = formData.get("screenshot") as File | null;

    console.log(projectId);
    console.log(type);
    console.log(rating);
    console.log(feedback);
    console.log(screenshot);

    const validatedData = feedbackSchema.parse({
      projectId,
      type,
      rating,
      feedback,
    });

    // Extract the domain from the Referer or Origin header
    const referer = req.headers.get("referer");
    const origin = req.headers.get("origin");
    const requestDomain = referer
      ? new URL(referer).hostname
      : (origin ?? "Unknown");

    console.log(`Feedback submission from domain: ${requestDomain}`);

    // Check if the project exists and the domain is authorized
    const project = await db.query.projects.findFirst({
      where: eq(projects.id, validatedData.projectId),
    });

    if (
      !project ||
      (project.domain !== requestDomain && requestDomain !== "localhost")
    ) {
      return NextResponse.json(
        { error: "Unauthorized: Invalid project ID or domain" },
        { status: 403 },
      );
    }

    // Find the form associated with the project
    const form = await db.query.forms.findFirst({
      where: eq(forms.projectId, validatedData.projectId),
    });

    if (!form) {
      return NextResponse.json(
        { error: "No form found for this project" },
        { status: 400 },
      );
    }

    let screenshotUrl = null;
    if (screenshot) {
      const fileExtension = screenshot.type === "image/png" ? "png" : "jpg";
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const fileName = `${uuidv4()}.${fileExtension}`;
      const filePath = path.join(
        process.cwd(),
        "public",
        "screenshots",
        fileName,
      );

      const arrayBuffer = await screenshot.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      await writeFile(filePath, buffer);

      screenshotUrl = `https://sreenington-nextjs-test.loca.lt/screenshots/${fileName}`;
    }

    // Insert the feedback into the database
    await db.insert(feedbackItems).values({
      formId: form.id,
      type: validatedData.type,
      rating: validatedData.rating,
      feedback: validatedData.feedback,
      screenshot: screenshotUrl,
    });

    console.log(`Feedback submitted successfully.`);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error submitting feedback:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.errors },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
