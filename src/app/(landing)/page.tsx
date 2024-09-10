import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Bug, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-gray-50">
      <header className="flex h-16 items-center bg-white px-4 shadow-sm lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <Image
            className="rounded-lg"
            src="/apple-touch-icon.png"
            alt="FeedbackThing Logo"
            width={32}
            height={32}
          />
          <span className="ml-2 text-xl font-bold text-gray-800">
            Feedback<span className="text-violet-600">Thing</span>
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
            href="#"
          >
            About
          </Link>
        </nav>
        <div className="ml-4 flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/sign-in">Log In</Link>
          </Button>
          <Button className="bg-violet-600 hover:bg-violet-700" asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Feedback and Bug Reporting with FeedbackThing
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Let your users capture screenshots, report bugs, and share
                    feedback effortlessly—all from a single button integrated
                    into your dashboard.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-violet-600 hover:bg-violet-700" asChild>
                    <Link href="/sign-up">Get Started</Link>
                  </Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[450px] overflow-hidden rounded-lg bg-gray-200 shadow-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="FeedbackThing Dashboard"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
              Key Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-6 w-6 text-violet-600" />
                    Screenshot Capture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Allow users to capture and annotate screenshots directly
                    from your app, streamlining the feedback process.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bug className="h-6 w-6 text-violet-600" />
                    Bug Reporting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Streamline bug reporting with automatic environment data
                    collection, making it easier for your team to reproduce and
                    fix issues.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-violet-600" />
                    User Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Gather valuable user insights with an intuitive feedback
                    interface, helping you make informed decisions about your
                    product.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to revolutionize your feedback process?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
                  Join thousands of companies using FeedbackThing to improve
                  their products and delight their users.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button
                  className="w-full bg-violet-600 hover:bg-violet-700"
                  asChild
                >
                  <Link href="/sign-up">Start Your Free Trial</Link>
                </Button>
                <p className="text-sm text-gray-500">
                  No credit card required. 14-day free trial.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-200 bg-white px-4 py-6 md:px-6">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center space-x-2">
            <Image
              src="/apple-touch-icon.png"
              alt="FeedbackThing Logo"
              width={24}
              height={24}
            />
            <p className="text-sm text-gray-500">
              © 2023 FeedbackThing. All rights reserved.
            </p>
          </div>
          <nav className="mt-4 flex gap-4 sm:gap-6 md:mt-0">
            <Link
              className="text-sm text-gray-500 hover:text-gray-900"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-gray-900"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm text-gray-500 hover:text-gray-900"
              href="#"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
