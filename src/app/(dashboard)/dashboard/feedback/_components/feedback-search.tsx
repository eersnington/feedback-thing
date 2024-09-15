// app/dashboard/feedback/_components/feedback-search.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FeedbackTypeOption = {
  value: string;
  label: string;
  color: string;
};

const feedbackTypes: FeedbackTypeOption[] = [
  { value: "feature", label: "Feature", color: "bg-yellow-300" },
  { value: "bug", label: "Bug", color: "bg-red-300" },
  { value: "question", label: "General Question", color: "bg-blue-400" },
  { value: "other", label: "Other", color: "bg-teal-300" },
];

export default function FeedbackSearch({
  initialDomain,
  initialType,
}: {
  initialDomain?: string;
  initialType?: string;
}) {
  const [domain, setDomain] = useState(initialDomain ?? "");
  const [type, setType] = useState(initialType ?? "all");
  const router = useRouter();

  useEffect(() => {
    setDomain(initialDomain ?? "");
    setType(initialType ?? "all");
  }, [initialDomain, initialType]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    if (domain) searchParams.append("domain", domain);
    if (type && type !== "all") searchParams.append("type", type);
    router.push(`/dashboard/feedback?${searchParams.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-4">
      <Input
        placeholder="Search by domain"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />
      <Select value={type} onValueChange={setType}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Feedback type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">
            <div className="flex items-center">
              <span className="mr-2 h-2 w-2 rounded-full bg-gray-400"></span>
              All types
            </div>
          </SelectItem>
          {feedbackTypes.map((feedbackType) => (
            <SelectItem key={feedbackType.value} value={feedbackType.value}>
              <div className="flex items-center">
                <span
                  className={`h-2 w-2 rounded-full ${feedbackType.color} mr-2`}
                ></span>
                {feedbackType.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit">Search</Button>
    </form>
  );
}
