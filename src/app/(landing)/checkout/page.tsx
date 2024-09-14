import { Checkout } from "./_components/checkout";
import { type Metadata } from "next";
import { currentUser } from "@clerk/nextjs/server";

export const metadata: Metadata = {
  title: "Checkout",
};

export default async function Page() {
  const user = await currentUser();

  console.log(user);

  return <Checkout />;
}
