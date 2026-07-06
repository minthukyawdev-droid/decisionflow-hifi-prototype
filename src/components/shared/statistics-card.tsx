import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function StatisticsCard({ label, value, helper, trend }: { label: string; value: string; helper: string; trend: string }) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{label}</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{value}</p>
          </div>
          <span className="rounded-full bg-emerald-50 p-2 text-emerald-700">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{helper}</span>
          <span className="font-semibold text-emerald-700">{trend}</span>
        </div>
      </CardContent>
    </Card>
  );
}
