import Link from "next/link";
import { CalendarDays, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { DecisionRecord } from "@/types/decision";

export function DecisionCard({ decision }: { decision: DecisionRecord }) {
  return (
    <article className="grid grid-cols-[1fr_130px_130px_120px] items-center gap-4 rounded-lg border border-border bg-white px-4 py-3 shadow-sm">
      <div>
        <h3 className="font-semibold text-foreground">{decision.title}</h3>
        <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {decision.updated}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            {decision.owner}
          </span>
        </div>
      </div>
      <Badge className="justify-center">{decision.status}</Badge>
      <span className="text-sm font-semibold text-foreground">{decision.confidence}% confidence</span>
      <Button asChild variant="secondary" size="sm">
        <Link href="/decisions/workspace">Open</Link>
      </Button>
    </article>
  );
}
