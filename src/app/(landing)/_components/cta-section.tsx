import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to revolutionize your feedback process?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
              Join thousands of solo-devs, and companies using FeedbackThing to
              improve their products and delight their users.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="bg-violet-600 hover:bg-violet-700" asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
