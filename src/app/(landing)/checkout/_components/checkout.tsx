/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";

import { useEffect, useState } from "react";
import { initializePaddle, type Paddle } from "@paddle/paddle-js";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { env } from "@/env";

// Custom usePaddle hook
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

export function Checkout() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paddle = usePaddle();
  const { isLoaded, isSignedIn, user } = useUser();
  const [checkoutOpened, setCheckoutOpened] = useState(false);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !paddle || !user || checkoutOpened) return;

    const transactionId = searchParams.get("_ptxn");
    const priceId = searchParams.get("priceId");

    console.log("PriceId:", priceId);

    if (transactionId) {
      paddle.Checkout.open({
        settings: {
          allowLogout: false,
        },
        transactionId,
      });
      setCheckoutOpened(true);
    } else if (priceId) {
      paddle.Checkout.open({
        settings: {
          allowLogout: false,
        },
        items: [{ priceId, quantity: 1 }],
        customer: {
          email: user.emailAddresses[0]?.emailAddress ?? "customer@email.com",
        },
        customData: {
          userId: user.id,
        },
      });
      setCheckoutOpened(true);
    } else {
      void router.push("/");
    }
  }, [
    paddle,
    searchParams,
    user,
    router,
    isLoaded,
    isSignedIn,
    checkoutOpened,
  ]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  if (!isSignedIn) {
    return <p>Please sign in to access the checkout.</p>;
  }

  if (!paddle) {
    return <p>Preparing checkout...</p>;
  }

  if (checkoutOpened) {
    return null;
  }

  return <p>Checkout is ready. Waiting for Paddle to open...</p>;
}
