import Link from "next/link";
import { FolderOpen, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmptyState() {
  return (
    <div className="flex min-h-56 flex-col items-center justify-center rounded-lg border border-dashed border-border bg-white p-8 text-center">
      <FolderOpen className="h-9 w-9 text-muted-foreground" />
      <h2 className="mt-4 text-lg font-semibold">No decisions yet</h2>
      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        Create a decision from a transcript, meeting notes, document import, or manual entry.
      </p>
      <Button asChild className="mt-5">
        <Link href="/decisions/new">
          <Plus className="h-4 w-4" />
          Create decision
        </Link>
      </Button>
    </div>
  );
}
