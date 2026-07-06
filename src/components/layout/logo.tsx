import Link from "next/link";

export function Logo() {
  return (
    <Link href="/dashboard" className="flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white shadow-sm">
        DF
      </span>
      <span>
        <span className="block text-sm font-semibold leading-4 text-foreground">DecisionFlow</span>
        <span className="block text-xs text-muted-foreground">AI decision intelligence</span>
      </span>
    </Link>
  );
}
