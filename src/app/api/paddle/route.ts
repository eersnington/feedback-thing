/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import { env } from "@/env";
import { type Environment, Paddle } from "@paddle/paddle-node-sdk";
import { NextResponse } from "next/server";

const paddle = new Paddle(env.PADDLE_API_KEY, {
  environment: env.NEXT_PUBLIC_PADDLE_ENVIRONMENT as Environment,
});

export async function POST(request: Request) {
  const signature = request.headers.get("paddle-signature");

  if (!signature) {
    console.error("Signature missing in header.");
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  try {
    const body = await request.text();
    const payload = paddle.webhooks.unmarshal(
      body,
      env.PADDLE_WEBHOOK_SECRET_KEY,
      signature,
    );

    if (!payload) {
      console.error("Invalid payload");
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    console.log("Event Type:", payload.eventType);

    switch (payload.eventType) {
      case "subscription.created":
        // Handle subscription created event
        console.log("Subscription created:", payload.data);
        break;
      case "subscription.updated":
        // Handle subscription updated event
        console.log("Subscription updated:", payload.data);
        break;
      case "subscription.canceled":
        // Handle subscription canceled event
        console.log("Subscription canceled:", payload.data);
        break;
      // Add more cases as needed
      default:
        console.log("Unhandled event type:", payload.eventType);
    }

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
