import { Header } from "./header";
import { Sidebar } from "./sidebar";

export function AppLayout({
  active,
  title,
  children,
}: {
  active: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-muted">
      <Sidebar active={active} />
      <div className="min-w-0 flex-1">
        <Header title={title} />
        <main className="mx-auto max-w-[1180px] px-8 py-8">{children}</main>
      </div>
    </div>
  );
}
