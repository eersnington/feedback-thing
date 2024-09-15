// app/dashboard/subscriptions/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { initializePaddle, type Paddle } from "@paddle/paddle-js";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Mail } from "lucide-react";
import { env } from "@/env";
import { fetchSubscriptionData } from "@/actions/subscriptions";
import { Skeleton } from "@/components/ui/skeleton";

interface SubscriptionData {
  subscriptionId: string | null;
  plan: "Free" | "Pro";
  subscriptionNextBilledAt: Date | null;
}

function usePaddle() {
  const [paddle, setPaddle] = useState<Paddle | undefined>(undefined);

  useEffect(() => {
    const initPaddle = async () => {
      try {
        const paddleInstance = await initializePaddle({
          environment: env.NEXT_PUBLIC_PADDLE_ENVIRONMENT,
          token: env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
        });

        if (paddleInstance) {
          setPaddle(paddleInstance);
        }
      } catch (error) {
        console.error("Failed to initialize Paddle:", error);
      }
    };

    void initPaddle();
  }, []);

  return paddle;
}

function SubscriptionSkeleton() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <Skeleton className="h-8 w-3/4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="mb-2 h-4 w-1/2" />
        <Skeleton className="mb-4 h-4 w-2/3" />
        <Skeleton className="h-10 w-40" />
      </CardContent>
    </Card>
  );
}

export default function SubscriptionsPage() {
  const { isLoaded, isSignedIn, user } = useUser();
  const paddle = usePaddle();
  const [subscriptionData, setSubscriptionData] =
    useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      fetchSubscriptionData()
        .then((data) => setSubscriptionData(data))
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [isLoaded, isSignedIn]);

  const handleUpgrade = (priceId: string) => {
    if (!paddle || !user) return;

    paddle.Checkout.open({
      settings: {
        allowLogout: false,
      },
      items: [{ priceId, quantity: 1 }],
      customer: {
        email: user.primaryEmailAddress?.emailAddress ?? "",
      },
      customData: {
        userId: user.id,
      },
    });
  };

  const handleCancelRequest = () => {
    if (!user || !subscriptionData?.subscriptionId) return;

    window.location.href = `mailto:support@feedbackthing.com?subject=Cancel Subscription&body=User ID: ${user.id}%0D%0ASubscription ID: ${subscriptionData.subscriptionId}`;
  };

  if (!isLoaded || loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Subscription</h1>
        </div>
        <SubscriptionSkeleton />
        <div className="grid gap-8 md:grid-cols-2">
          <SubscriptionSkeleton />
          <SubscriptionSkeleton />
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <div>Please sign in to view your subscription.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Subscription</h1>
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">
            Current Plan:{" "}
            {(
              <span className="text-purple-500">{subscriptionData?.plan}</span>
            ) ?? "Free"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {subscriptionData?.subscriptionId ? (
            <>
              <p>
                Subscription ID:{" "}
                <span className="text-gray-500">
                  {subscriptionData.subscriptionId}
                </span>
              </p>
              <p>
                Next Billing Date:{" "}
                <span className="text-gray-500">
                  {subscriptionData.subscriptionNextBilledAt
                    ? new Date(
                        subscriptionData.subscriptionNextBilledAt,
                      ).toDateString()
                    : "N/A"}
                </span>
              </p>
              <Button onClick={handleCancelRequest} className="mt-4">
                <Mail className="mr-2 h-4 w-4" /> Request Cancellation
              </Button>
            </>
          ) : (
            <p>Upgrade to access more features!</p>
          )}
        </CardContent>
      </Card>
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Monthly Pro</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4 text-2xl font-bold">$15/month</p>
            <ul className="mb-4 list-inside list-disc">
              <li>
                {" "}
                <Check className="mr-2 h-5 w-5 text-violet-500" />
                Unlimited Domains
              </li>
              <li>
                {" "}
                <Check className="mr-2 h-5 w-5 text-violet-500" />
                1000 Feedback Reports/Month
              </li>
              <li>
                {" "}
                <Check className="mr-2 h-5 w-5 text-violet-500" />
                1000 Bug Reports/Month
              </li>
              <li>
                {" "}
                <Check className="mr-2 h-5 w-5 text-violet-500" />
                Custom Branding
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-purple-500"
              onClick={() => handleUpgrade("pri_01gwv3cf79kc5pn9esbvq5c3v1")}
              disabled={subscriptionData?.plan === "Pro"}
            >
              {subscriptionData?.plan === "Pro" ? "Current Plan" : "Upgrade"}
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Yearly Pro</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="mb-4 text-2xl font-bold">$150/year</p>
            <ul className="mb-4 list-inside list-disc">
              <li>
                {" "}
                <Check className="mr-2 h-5 w-5 text-violet-500" />
                All Monthly Pro features
              </li>
              <li>
                {" "}
                <Check className="mr-2 h-5 w-5 text-violet-500" />
                Billed annually
              </li>
              <li>
                {" "}
                <Check className="mr-2 h-5 w-5 text-violet-500" />2 months free
              </li>
              <li>
                {" "}
                <Check className="mr-2 h-5 w-5 text-violet-500" />
                Limits reset every month
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-purple-500"
              onClick={() => handleUpgrade("pri_01gwv3d2pbbzbyn4zd24mtvsgy")}
              disabled={subscriptionData?.plan === "Pro"}
            >
              {subscriptionData?.plan === "Pro" ? "Current Plan" : "Upgrade"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
