export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl items-center justify-center px-4 pb-16 pt-8">
      {children}
    </div>
  );
}
