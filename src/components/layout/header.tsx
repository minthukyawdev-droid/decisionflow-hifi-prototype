import Link from "next/link";
import { Bell, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/shared/search-bar";

export function Header({ title, eyebrow = "Workspace" }: { title: string; eyebrow?: string }) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-border bg-white px-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{eyebrow}</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <SearchBar placeholder="Search decisions" className="w-72" />
        <Button variant="secondary" size="icon" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </Button>
        <Button asChild>
          <Link href="/decisions/new">
            <Plus className="h-4 w-4" />
            New Decision
          </Link>
        </Button>
      </div>
    </header>
  );
}
