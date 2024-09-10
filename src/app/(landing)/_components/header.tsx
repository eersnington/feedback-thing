import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex h-16 items-center bg-white px-4 shadow-sm lg:px-6">
      <Link className="flex items-center justify-center" href="/">
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
          href="#features"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
          href="/pricing"
        >
          Pricing
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
  );
}
