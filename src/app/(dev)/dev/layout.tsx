import FeedbackWidget from "@/app/feedback-widget";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FeedbackWidget projectId={"120"} />
      <section>{children}</section>
    </>
  );
}
