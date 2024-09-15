import { Checkout } from "./_components/checkout";
import { type Metadata } from "next";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const priceIds = [
  {
    id: "pri_01j7p0mc65s6hyzz4t58xexrfq",
    tag: "yearly",
  },
  {
    id: "pri_01j7p0kxpydd5zsfr231f21d9p",
    tag: "monthly",
  },
];

export const metadata: Metadata = {
  title: "Checkout",
};

export default async function Page({
  searchParams,
}: {
  searchParams: { priceId?: string };
}) {
  const user = await currentUser();
  const priceId = searchParams.priceId;

  // Check if the priceId is valid
  const isValidPriceId = priceIds.some((price) => price.id === priceId);

  // If priceId is invalid or not provided, redirect to the monthly option
  if (!isValidPriceId) {
    const monthlyPriceId = priceIds.find(
      (price) => price.tag === "monthly",
    )?.id;
    if (monthlyPriceId) {
      redirect(`/checkout?priceId=${monthlyPriceId}`);
    } else {
      throw new Error("Monthly price ID not found");
    }
  }

  console.log(user);

  return <Checkout />;
}
