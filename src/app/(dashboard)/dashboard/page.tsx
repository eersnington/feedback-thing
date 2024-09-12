import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bell,
  Bug,
  MessageSquare,
  Plus,
  Search,
  Settings,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/apple-touch-icon.png"
              alt="FeedbackThing Logo"
              width={32}
              height={32}
            />
            <span className="text-xl font-bold">FeedbackThing</span>
          </Link>
        </div>
        <nav className="mt-6">
          <Link
            href="#"
            className="flex items-center bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <BarChart className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <MessageSquare className="mr-3 h-5 w-5" />
            Feedback
          </Link>
          <Link
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <Bug className="mr-3 h-5 w-5" />
            Bug Reports
          </Link>
          <Link
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User profile</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Summary Cards */}
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Feedback
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Open Bug Reports
                </CardTitle>
                <Bug className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">
                  -15% from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  User Satisfaction
                </CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.7/5</div>
                <p className="text-xs text-muted-foreground">
                  Based on 980 ratings
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Feedback Table */}
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Feedback</CardTitle>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" /> Add Feedback
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative w-full overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">#1234</TableCell>
                      <TableCell>John Doe</TableCell>
                      <TableCell>Bug Report</TableCell>
                      <TableCell>
                        <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800">
                          In Progress
                        </span>
                      </TableCell>
                      <TableCell>2023-06-01</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#1235</TableCell>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>Feature Request</TableCell>
                      <TableCell>
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                          Completed
                        </span>
                      </TableCell>
                      <TableCell>2023-05-30</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">#1236</TableCell>
                      <TableCell>Bob Johnson</TableCell>
                      <TableCell>General Feedback</TableCell>
                      <TableCell>
                        <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                          New
                        </span>
                      </TableCell>
                      <TableCell>2023-05-29</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Search and Filter */}
          <Card>
            <CardHeader>
              <CardTitle>Search Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input
                  placeholder="Search by keyword or ID"
                  className="flex-1"
                />
                <Button>
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
