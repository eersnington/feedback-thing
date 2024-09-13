"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Camera, Star } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type FeedbackType = "feature" | "bug" | "question" | "other";

interface FeedbackTypeOption {
  value: FeedbackType;
  label: string;
  color: string;
}

interface FeedbackWidgetProps {
  projectId: string | null;
}

const feedbackTypes: FeedbackTypeOption[] = [
  { value: "feature", label: "Feature", color: "bg-red-300" },
  { value: "bug", label: "Bug", color: "bg-yellow-500" },
  { value: "question", label: "General Question", color: "bg-blue-400" },
  { value: "other", label: "Other", color: "bg-teal-400" },
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

  if (projectId === null) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Unable to load the feedback widget. Project ID is missing.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="fixed right-1 top-1/2 origin-right -translate-y-1/2 rotate-[-90deg] bg-violet-500 text-white hover:bg-violet-600">
          Feedback
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Card className="border-0 shadow-none">
          <CardHeader>
            <CardTitle className="text-violet-500">Submit Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="feedbackType" className="text-violet-500">
                    Feedback Type
                  </Label>
                  <Select
                    value={feedbackType}
                    onValueChange={(value: FeedbackType) =>
                      setFeedbackType(value)
                    }
                  >
                    <SelectTrigger
                      id="feedbackType"
                      className="mt-2 w-full border-violet-300 focus:ring-violet-500"
                    >
                      <SelectValue placeholder="Select feedback type" />
                    </SelectTrigger>
                    <SelectContent>
                      {feedbackTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center">
                            <span
                              className={`mr-2 h-3 w-3 rounded-full ${type.color}`}
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
                    <Label className="text-violet-500">Feature Rating</Label>
                    <div className="mt-2 flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-6 w-6 cursor-pointer ${
                            star <= rating
                              ? "fill-yellow-500 text-yellow-500"
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
                      className="flex items-center border-violet-300 text-violet-500 hover:bg-violet-50"
                    >
                      <Camera className="mr-2 h-4 w-4" />
                      Take Screenshot
                    </Button>
                  </div>
                )}

                <div>
                  <Label htmlFor="feedback" className="text-violet-500">
                    Your Feedback
                  </Label>
                  <Textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setFeedback(e.target.value)
                    }
                    placeholder="Please provide your feedback here..."
                    className="mt-2 border-violet-300 focus:ring-violet-500"
                  />
                </div>
              </div>

              <CardFooter className="px-0 pt-6">
                <Button
                  type="submit"
                  className="w-full bg-violet-500 text-white hover:bg-violet-600"
                >
                  Submit Feedback
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
