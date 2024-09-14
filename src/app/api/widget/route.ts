import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  // Extract the domain from the Referer or Origin header
  const referer = req.headers.get("referer");
  const origin = req.headers.get("origin");
  const requestDomain = referer
    ? new URL(referer).hostname
    : (origin ?? "Unknown");

  console.log(`FeedbackWidget: Request received from domain: ${requestDomain}`);

  // Change this line to point to the correct file
  const filePath = path.join(
    process.cwd(),
    "public",
    "feedback-widget-bundle.js",
  );

  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    console.log(`FeedbackWidget: Serving widget to domain: ${requestDomain}`);

    return new NextResponse(fileContents, {
      headers: {
        "Content-Type": "application/javascript",
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    console.error(
      `FeedbackWidget: Error serving widget to ${requestDomain}:`,
      error,
    );

    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      console.log(
        `FeedbackWidget: Widget file not found. Request was from: ${requestDomain}`,
      );
      return new NextResponse("Widget file not found", { status: 404 });
    }

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
