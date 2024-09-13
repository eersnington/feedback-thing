// api/feedback-widget/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
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

  const filePath = path.join(process.cwd(), "public", "feedback-widget.js");

  if (!fs.existsSync(filePath)) {
    console.log(
      `FeedbackWidget: Widget file not found. Request was from: ${requestDomain}`,
    );
    return new NextResponse("Widget file not found", { status: 404 });
  }

  const fileContents = fs.readFileSync(filePath, "utf8");

  console.log(`FeedbackWidget: Serving widget to domain: ${requestDomain}`);

  return new NextResponse(fileContents, {
    headers: {
      "Content-Type": "application/javascript",
    },
  });
}
