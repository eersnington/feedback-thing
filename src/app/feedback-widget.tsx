/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Camera, Star } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DialogDescription } from "@radix-ui/react-dialog";

type FeedbackType = "feature" | "bug" | "question" | "other";

interface FeedbackTypeOption {
  value: FeedbackType;
  label: string;
  color: string;
}

interface FeedbackWidgetProps {
  projectId: string | null | undefined;
}

const feedbackTypes: FeedbackTypeOption[] = [
  { value: "feature", label: "Feature", color: "bg-yellow-300" },
  { value: "bug", label: "Bug", color: "bg-red-300" },
  { value: "question", label: "General Question", color: "bg-blue-400" },
  { value: "other", label: "Other", color: "bg-teal-300" },
];

export default function FeedbackWidget({
  projectId,
}: FeedbackWidgetProps): React.ReactElement {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | "">("");
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!projectId) {
      console.error("Project ID is missing");
      return;
    }
    const response = await fetch("/api/submit-feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projectId, feedbackType, rating, feedback }),
    });
    if (response.ok) {
      setIsOpen(false);
      // Show success message
    } else {
      // Show error message
    }
  };

  const handleScreenshot = () => {
    // Implement screenshot functionality here
    console.log("Taking screenshot...");
  };

  if (projectId === null || projectId === undefined) {
    return (
      <Alert variant="destructive">
        <AlertTitle className="fbt-widget items-center justify-center text-center">
          Error
        </AlertTitle>
        <AlertDescription className="fbt-widget items-center justify-center text-center">
          Unable to load the feedback widget. Project ID is missing.
        </AlertDescription>
        <div className="mt-4 flex justify-center">
          <a
            href="https://www.feedbackthing.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm text-gray-500 transition-colors hover:text-violet-500"
          >
            <img
              src="https://www.feedbackthing.pro/favicon.ico"
              alt="Feedbackthing Logo"
              className="h-4 w-4"
            />
            <span>Powered by feedbackthing.pro</span>
          </a>
        </div>
      </Alert>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="fbt-widget fixed -right-10 bottom-1/2 origin-bottom-left rotate-[-90deg] bg-violet-500 px-4 py-2 text-white hover:bg-violet-600">
          Feedback
        </Button>
      </DialogTrigger>
      <DialogContent className="fbt-widget p-0 sm:max-w-[425px]">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-violet-700">
              Send us your feedback
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <Label htmlFor="feedbackType" className="text-violet-700">
                Feedback Type
              </Label>
              <Select
                value={feedbackType}
                onValueChange={(value: FeedbackType) => setFeedbackType(value)}
              >
                <SelectTrigger
                  id="feedbackType"
                  className="w-full border-violet-300 focus:ring-violet-500"
                >
                  <SelectValue placeholder="Select feedback type" />
                </SelectTrigger>
                <SelectContent className="fbt-widget">
                  {feedbackTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      <div className="flex items-center">
                        <span
                          className={`mr-2 h-2 w-2 rounded-full ${type.color}`}
                        ></span>
                        {type.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {feedbackType === "feature" && (
              <div>
                <Label className="text-violet-700">Feature Rating</Label>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 cursor-pointer ${
                        star <= rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>
            )}

            {feedbackType === "bug" && (
              <div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleScreenshot}
                  className="flex items-center border-violet-300 text-violet-700 hover:bg-violet-50"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Take Screenshot
                </Button>
              </div>
            )}

            <div>
              <Label htmlFor="feedback" className="text-violet-700">
                Your Feedback
              </Label>
              <Textarea
                id="feedback"
                value={feedback}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFeedback(e.target.value)
                }
                placeholder="Please provide your feedback here..."
                className="w-full border-violet-300 focus:ring-violet-500"
                rows={4}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-violet-500 text-white hover:bg-violet-600"
            >
              Submit Feedback
            </Button>
          </form>
        </div>
        <div className="flex justify-center rounded-b-lg bg-gray-50 p-4">
          <a
            href="https://www.feedbackthing.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm text-gray-500 transition-colors hover:text-violet-500"
          >
            <img
              src="https://www.feedbackthing.pro/favicon.ico"
              alt="Feedbackthing Logo"
              className="h-4 w-4"
            />
            <span>Powered by feedbackthing.pro</span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
