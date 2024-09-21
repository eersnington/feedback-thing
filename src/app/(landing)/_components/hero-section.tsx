import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeedbackWidget from "./feedback-widget";

export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-t from-violet-100 to-white py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Feedback Made Fast, <br />
                Simple, and Powerful
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Let your users capture screenshots, report bugs, and share
                feedback effortlessly—all from a single button integrated into
                your web app.
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
          <div className="flex items-center justify-center">
            {/* <div className="relative h-[300px] w-[450px] overflow-hidden rounded-lg bg-gray-200 shadow-lg">
              <Image
                src="/placeholder.svg"
                alt="FeedbackThing Dashboard"
                layout="fill"
                objectFit="cover"
              />
            </div> */}
            <FeedbackWidget projectId={"123"} />
          </div>
        </div>
      </div>
    </section>
  );
}
