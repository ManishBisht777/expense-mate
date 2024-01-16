export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <main className="space-y-6 my-12">{children}</main>
    </div>
  );
}
