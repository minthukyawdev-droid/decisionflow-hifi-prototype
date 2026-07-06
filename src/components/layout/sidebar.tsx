import Link from "next/link";
import { appNav } from "@/services/mock-data";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export function Sidebar({ active }: { active: string }) {
  return (
    <aside className="sticky top-0 h-screen w-64 border-r border-border bg-white px-4 py-5">
      <Logo />
      <nav className="mt-8 space-y-1" aria-label="Primary navigation">
        {appNav.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.label;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                isActive && "bg-blue-50 text-primary",
                !isActive && "hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
