import { AlertTriangle, BrainCircuit, CheckCircle2, ListChecks, ShieldAlert } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { criteria, risks, reasoning, actionItems, comparisonRows } from "@/services/mock-data";

export function ConfidenceMeter({ value }: { value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-foreground">Confidence score</span>
        <span className="font-semibold text-primary">{value}%</span>
      </div>
      <div className="mt-3 h-3 rounded-full bg-slate-100">
        <div className="h-3 rounded-full bg-primary" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function AIRecommendationCard() {
  return (
    <Card className="border-blue-200 bg-blue-50/40">
      <CardHeader className="border-blue-100">
        <div className="flex items-center justify-between gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-primary" />
              Recommended option
            </CardTitle>
            <CardDescription>AI recommends. The user remains in control of the final decision.</CardDescription>
          </div>
          <Badge>Explainable AI</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Recommendation</p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight">Option A</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              Option A best balances implementation speed, stakeholder impact, and strategic alignment while keeping risks manageable.
            </p>
          </div>
          <div className="w-64 rounded-lg border border-blue-100 bg-white p-4">
            <ConfidenceMeter value={82} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ReasoningPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ListChecks className="h-5 w-5 text-primary" />
          Reasoning
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {reasoning.map((item, index) => (
          <div key={item} className="flex gap-3 rounded-lg bg-muted p-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-primary">
              {index + 1}
            </span>
            <p className="text-sm leading-6 text-muted-foreground">{item}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function RiskPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldAlert className="h-5 w-5 text-amber-600" />
          Risks
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {risks.map((risk) => (
          <div key={risk} className="flex gap-3 rounded-lg border border-amber-100 bg-amber-50 p-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
            <p className="text-sm leading-6 text-amber-900">{risk}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function ActionItemList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Action items</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {actionItems.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-lg border border-border p-3">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span className="text-sm text-foreground">{item}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function CriteriaWeights() {
  return (
    <div className="space-y-3">
      {criteria.map((criterion) => (
        <div key={criterion.name} className="rounded-lg border border-border p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-foreground">{criterion.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{criterion.description}</p>
            </div>
            <span className="text-sm font-semibold text-primary">{criterion.weight}%</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-slate-100">
            <div className="h-2 rounded-full bg-primary" style={{ width: `${criterion.weight * 3}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-white">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-muted text-xs uppercase tracking-wide text-muted-foreground">
          <tr>
            <th className="px-4 py-3 font-semibold">Criteria</th>
            <th className="px-4 py-3 font-semibold">Option A</th>
            <th className="px-4 py-3 font-semibold">Option B</th>
            <th className="px-4 py-3 font-semibold">Option C</th>
            <th className="px-4 py-3 font-semibold">AI score</th>
            <th className="px-4 py-3 font-semibold">Recommended</th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.criterion} className="border-t border-border">
              <td className="px-4 py-4 font-semibold">{row.criterion}</td>
              <td className="px-4 py-4">{row.optionA}</td>
              <td className="px-4 py-4">{row.optionB}</td>
              <td className="px-4 py-4">{row.optionC}</td>
              <td className="px-4 py-4 font-semibold text-primary">{row.aiScore}</td>
              <td className="px-4 py-4">{row.recommended ? <Badge>{row.recommended}</Badge> : <span className="text-muted-foreground">-</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
