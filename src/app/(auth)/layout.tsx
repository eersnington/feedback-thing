export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen max-w-full items-center justify-center bg-gradient-to-b from-violet-200 to-white px-4 pb-16 pt-8">
      {children}
    </div>
  );
}
