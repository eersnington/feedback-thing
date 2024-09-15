// app/dashboard/subscriptions/actions.ts
"use server";

import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";

export interface SubscriptionData {
  subscriptionId: string | null;
  plan: "Free" | "Pro";
  subscriptionNextBilledAt: Date | null;
}

export async function fetchSubscriptionData(): Promise<SubscriptionData> {
  const userAuth = await currentUser();

  if (!userAuth) {
    throw new Error("Unauthorized");
  }

  const user = await db
    .select({
      subscriptionId: users.subscriptionId,
      subscriptionNextBilledAt: users.subscriptionNextBilledAt,
    })
    .from(users)
    .where(eq(users.id, userAuth.id))
    .limit(1);

  if (!user || user.length === 0) {
    throw new Error("User not found");
  }

  const userData = user[0];

  if (userData == undefined) {
    return {
      subscriptionId: null,
      plan: "Free",
      subscriptionNextBilledAt: null,
    };
  }

  return {
    subscriptionId: userData.subscriptionId,
    plan: userData.subscriptionId ? "Pro" : "Free",
    subscriptionNextBilledAt: userData.subscriptionNextBilledAt,
  };
}
