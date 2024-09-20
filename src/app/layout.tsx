import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import { PHProvider } from "@/components/posthog/provider";

export const metadata: Metadata = {
  title: "FeedbackThing",
  description: "Your only tool needed to get Feedback and Bug Reports",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <PHProvider>
        <html lang="en" className={`${GeistSans.variable}`}>
          <body>
            <main>{children}</main>
            <Toaster />
          </body>
        </html>
      </PHProvider>
    </ClerkProvider>
  );
}
