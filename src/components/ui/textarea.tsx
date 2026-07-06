import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full resize-none rounded-lg border border-border bg-white px-3 py-3 text-sm text-foreground shadow-sm",
        "placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-blue-100",
        className,
      )}
      {...props}
    />
  );
}
