// app/(dashboard)/_components/recent-feedback.tsx
import { db } from "@/server/db";
import { feedbackItems, forms, projects } from "@/server/db/schema";
import { desc, eq } from "drizzle-orm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

async function getRecentFeedback() {
  return db
    .select({
      id: feedbackItems.id,
      type: feedbackItems.type,
      feedback: feedbackItems.feedback,
      createdAt: feedbackItems.createdAt,
      projectName: projects.name,
      formTitle: forms.title,
    })
    .from(feedbackItems)
    .innerJoin(forms, eq(feedbackItems.formId, forms.id))
    .innerJoin(projects, eq(forms.projectId, projects.id))
    .orderBy(desc(feedbackItems.createdAt))
    .limit(5);
}

export default async function RecentFeedbackTable() {
  const recentFeedback = await getRecentFeedback();

  if (recentFeedback.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No feedback yet
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Once you receive feedback, it will appear here.
            </p>
            <div className="mt-6">
              <Link href="/dashboard/projects">
                <Button>View Projects</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Form</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Feedback</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentFeedback.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.projectName}</TableCell>
            <TableCell>{item.formTitle}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell className="max-w-xs truncate">{item.feedback}</TableCell>
            <TableCell>
              {new Date(item.createdAt).toLocaleDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
