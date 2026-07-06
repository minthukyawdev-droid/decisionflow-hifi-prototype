import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-lg border border-border bg-white px-3 text-sm text-foreground shadow-sm",
        "placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-blue-100",
        className,
      )}
      {...props}
    />
  );
}
