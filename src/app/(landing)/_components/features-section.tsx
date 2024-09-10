import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Bug, Camera } from "lucide-react";

export function FeaturesSection() {
  return (
    <section
      className="w-full bg-gradient-to-b from-violet-100 to-white py-12 md:py-24"
      id="features"
    >
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-center text-6xl font-bold tracking-tighter sm:text-4xl">
          Key Features
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <FeatureCard
            icon={<Camera className="h-6 w-6 text-violet-600" />}
            title="Screenshot Capture"
            description="Allow users to capture and annotate screenshots directly from your app, streamlining the feedback process."
          />
          <FeatureCard
            icon={<Bug className="h-6 w-6 text-violet-600" />}
            title="Bug Reporting"
            description="Streamline bug reporting with automatic environment data collection, making it easier for your team to reproduce and fix issues."
          />
          <FeatureCard
            icon={<MessageSquare className="h-6 w-6 text-violet-600" />}
            title="User Feedback"
            description="Gather valuable user insights with an intuitive feedback interface, helping you make informed decisions about your product."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.JSX.Element;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
}
