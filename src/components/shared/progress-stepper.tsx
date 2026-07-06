import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { workspaceMilestones } from "@/services/mock-data";

export function ProgressStepper({ current }: { current: string }) {
  const currentIndex = workspaceMilestones.findIndex((item) => item.label === current);
  return (
    <nav aria-label="Decision progress" className="rounded-lg border border-border bg-white p-4 shadow-sm">
      <ol className="grid grid-cols-7 gap-2">
        {workspaceMilestones.map((item, index) => {
          const complete = index < currentIndex;
          const active = index === currentIndex;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block rounded-md p-2 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <span
                  className={cn(
                    "mx-auto flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold",
                    complete && "border-primary bg-primary text-white",
                    active && "border-primary bg-blue-50 text-primary",
                    !complete && !active && "border-border bg-white text-muted-foreground",
                  )}
                >
                  {complete ? <Check className="h-3.5 w-3.5" /> : index + 1}
                </span>
                <span className={cn("mt-2 block text-xs font-medium", active ? "text-primary" : "text-muted-foreground")}>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
