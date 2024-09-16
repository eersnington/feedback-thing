// app/(dashboard)/_components/feedback-stats.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Bug, BarChart, FolderPlus } from "lucide-react";
import { db } from "@/server/db";
import { feedbackItems } from "@/server/db/schema";
import { sql } from "drizzle-orm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getFeedbackStats() {
  const stats = await db
    .select({
      totalFeedback: sql<number>`count(*)`,
      bugReports: sql<number>`sum(case when type = 'bug' then 1 else 0 end)`,
      avgRating: sql<number>`avg(rating)`,
    })
    .from(feedbackItems);

  return stats[0];
}

export default async function FeedbackStats() {
  const stats = await getFeedbackStats();

  if (!stats || stats.totalFeedback === 0) {
    return (
      <Card className="col-span-3">
        <CardContent className="pt-6">
          <div className="text-center">
            <BarChart className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No feedback yet
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by creating a new project.
            </p>
            <div className="mt-6">
              <Link href="/dashboard/projects">
                <Button>
                  <FolderPlus className="mr-2 h-4 w-4" />
                  New Project
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Feedback</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalFeedback}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Bug Reports</CardTitle>
          <Bug className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.bugReports ?? 0}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {stats.avgRating ? Number(stats.avgRating).toFixed(1) : "0"}/5
          </div>
        </CardContent>
      </Card>
    </>
  );
}
