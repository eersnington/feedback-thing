// app/dashboard/_components/Sidebar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderOpen,
  MessageSquare,
  CreditCard,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

function NavItem({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
      )}
    >
      <Icon
        className={cn(
          "mr-3 h-5 w-5",
          isActive
            ? "text-gray-700 dark:text-white"
            : "text-gray-400 dark:text-gray-400",
        )}
      />
      {children}
    </Link>
  );
}

export function Sidebar() {
  return (
    <aside className="hidden w-64 overflow-y-auto border-r border-gray-200 bg-white px-5 py-8 dark:border-gray-800 dark:bg-gray-800 lg:block">
      <div className="flex items-center space-x-2">
        <Image
          src="/apple-touch-icon.png"
          alt="FeedbackThing Logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          FeedbackThing
        </span>
      </div>
      <nav className="mt-10 space-y-1">
        <NavItem href="/dashboard" icon={LayoutDashboard}>
          Dashboard
        </NavItem>
        <NavItem href="/dashboard/projects" icon={FolderOpen}>
          Projects
        </NavItem>
        <NavItem href="/dashboard/feedback" icon={MessageSquare}>
          Feedback
        </NavItem>
        <NavItem href="/dashboard/subscription" icon={CreditCard}>
          Subscription
        </NavItem>
        <NavItem href="/dashboard/settings" icon={Settings}>
          Settings
        </NavItem>
      </nav>
    </aside>
  );
}