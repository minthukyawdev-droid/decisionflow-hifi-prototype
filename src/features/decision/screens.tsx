import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Lock,
  Sparkles,
} from "lucide-react";
import { AppLayout } from "@/components/layout/app-layout";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { SearchBar } from "@/components/shared/search-bar";
import { StatisticsCard } from "@/components/shared/statistics-card";
import { DecisionCard } from "@/components/shared/decision-card";
import { UploadDropzone } from "@/components/shared/upload-dropzone";
import { ProgressStepper } from "@/components/shared/progress-stepper";
import { EmptyState } from "@/components/shared/empty-state";
import {
  AIRecommendationCard,
  ActionItemList,
  ComparisonTable,
  CriteriaWeights,
  ReasoningPanel,
  RiskPanel,
} from "./decision-components";
import { AuthForm } from "./forms";
import {
  extractedInformation,
  extractionSteps,
  inputMethods,
  libraryDecisions,
  metrics,
  recentDecisions,
  transcriptSample,
} from "@/services/mock-data";

export function LandingScreen() {
  return (
    <main className="min-h-screen bg-white">
      <header className="mx-auto flex h-20 max-w-[1180px] items-center justify-between px-8">
        <Logo />
        <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground" aria-label="Public navigation">
          <a href="#product">Product</a>
          <a href="#workflow">Workflow</a>
          <a href="#security">Security</a>
          <Link href="/login">Login</Link>
        </nav>
      </header>
      <section className="mx-auto grid min-h-[640px] max-w-[1180px] grid-cols-[1fr_420px] items-center gap-12 px-8 py-10">
        <div>
          <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-primary">
            AI assists, user decides
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-foreground">
            Transform messy inputs into structured decisions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            DecisionFlow extracts topics, options, criteria, stakeholders, risks, and actions from unstructured meeting information so teams can review and choose with confidence.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Button asChild size="lg">
              <Link href="/dashboard">
                Start new decision
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
        <Card className="bg-muted/60">
          <CardHeader>
            <CardTitle>Decision extraction preview</CardTitle>
            <CardDescription>Meeting transcript to editable decision structure</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {["Decision topic", "Options", "Criteria", "Risks"].map((item) => (
              <div key={item} className="rounded-lg border border-border bg-white p-4">
                <p className="text-sm font-semibold">{item}</p>
                <Skeleton className="mt-3 h-3 w-full" />
                <Skeleton className="mt-2 h-3 w-2/3" />
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
      <section id="workflow" className="border-t border-border bg-muted py-10">
        <div className="mx-auto grid max-w-[1180px] grid-cols-3 gap-5 px-8">
          {["AI extraction", "Editable structure", "Explainable recommendation"].map((item) => (
            <Card key={item}>
              <CardContent className="p-6">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="mt-4 font-semibold">{item}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Preserves human control while making decision inputs easier to understand.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export function AuthScreen({ mode }: { mode: "login" | "register" }) {
  const title = mode === "login" ? "Login" : "Register";
  return (
    <main className="grid min-h-screen grid-cols-[1fr_460px] bg-muted">
      <section className="flex flex-col justify-center px-16">
        <Logo />
        <div className="mt-12 max-w-md">
          <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Access the DecisionFlow workspace. Authentication is mocked for this prototype.
          </p>
          <div className="mt-8 rounded-lg border border-border bg-white p-6 shadow-sm">
            <AuthForm mode={mode} />
            <p className="mt-4 text-sm text-muted-foreground">
              {mode === "login" ? "Need an account? " : "Already have an account? "}
              <Link href={mode === "login" ? "/register" : "/login"} className="font-semibold text-primary">
                {mode === "login" ? "Register" : "Login"}
              </Link>
            </p>
          </div>
        </div>
      </section>
      <aside className="m-8 flex flex-col justify-center rounded-lg border border-border bg-white p-10 shadow-sm">
        <Lock className="h-8 w-8 text-primary" />
        <h2 className="mt-5 text-xl font-semibold">Account support panel</h2>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Secure team workspaces, saved decisions, and AI preferences are represented with mock data only.
        </p>
      </aside>
    </main>
  );
}

export function DashboardScreen() {
  return (
    <AppLayout active="Dashboard" title="Dashboard">
      <div className="grid grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <StatisticsCard key={metric.label} {...metric} />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-[1fr_340px] gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Decisions</CardTitle>
            <CardDescription>Active decisions and review status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentDecisions.map((decision) => (
              <DecisionCard key={decision.title} decision={decision} />
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Start</CardTitle>
            <CardDescription>Begin the MVP decision flow</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/decisions/new">
                New Decision
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <div className="mt-5 rounded-lg bg-muted p-4">
              <p className="text-sm font-semibold">Next recommended step</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Upload or paste a meeting transcript so AI can extract structured information.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

export function NewDecisionScreen() {
  return (
    <AppLayout active="New Decision" title="New Decision">
      <Card>
        <CardHeader>
          <CardTitle>Choose input method</CardTitle>
          <CardDescription>Start from the same four branches validated in the low-fidelity prototype.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-4">
          {inputMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Link key={method.title} href={method.href} className="rounded-lg border border-border bg-white p-5 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
                <Icon className="h-7 w-7 text-primary" />
                <h2 className="mt-8 font-semibold">{method.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{method.description}</p>
              </Link>
            );
          })}
        </CardContent>
      </Card>
    </AppLayout>
  );
}

export function UploadTranscriptScreen() {
  return (
    <AppLayout active="New Decision" title="Upload Transcript">
      <ProgressStepper current="Input" />
      <div className="mt-6 grid grid-cols-[1fr_360px] gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Meeting transcript</CardTitle>
            <CardDescription>Upload a transcript or continue with the prototype sample.</CardDescription>
          </CardHeader>
          <CardContent>
            <UploadDropzone />
            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Supported file types: TXT, DOCX, PDF</p>
              <Button asChild>
                <Link href="/decisions/extraction">Upload</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Paste transcript option</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="transcript">Transcript text</Label>
            <Textarea id="transcript" defaultValue={transcriptSample} className="mt-2 min-h-72" />
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

export function AIExtractionScreen() {
  return (
    <AppLayout active="New Decision" title="AI Extraction">
      <ProgressStepper current="Extraction" />
      <Card className="mt-6">
        <CardContent className="flex min-h-[520px] flex-col items-center justify-center p-10">
          <BrainCircuit className="h-10 w-10 text-primary" />
          <h2 className="mt-5 text-2xl font-semibold">Extracting structured decision information</h2>
          <div className="mt-6 h-3 w-full max-w-2xl rounded-full bg-slate-100">
            <div className="h-3 w-3/5 rounded-full bg-primary" />
          </div>
          <div className="mt-8 w-full max-w-2xl space-y-3">
            {extractionSteps.map((step) => (
              <div key={step.label} className="flex items-center justify-between rounded-lg border border-border p-3">
                <span className="text-sm font-medium">{step.label}</span>
                <span className="text-sm text-muted-foreground">{step.status}</span>
              </div>
            ))}
          </div>
          <Button asChild className="mt-8">
            <Link href="/decisions/review">View extracted information</Link>
          </Button>
        </CardContent>
      </Card>
    </AppLayout>
  );
}

export function ReviewExtractionScreen() {
  return (
    <AppLayout active="New Decision" title="Review Extracted Information">
      <ProgressStepper current="Review" />
      <div className="mt-6 grid grid-cols-2 gap-4">
        {Object.entries(extractedInformation).map(([field, value]) => (
          <Card key={field}>
            <CardHeader>
              <CardTitle>{field}</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor={field}>{field} extracted value</Label>
              <Textarea id={field} defaultValue={value} className="mt-2" />
              <div className="mt-3 flex justify-end">
                <Button variant="secondary">Edit</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <Button asChild>
          <Link href="/decisions/workspace">Continue</Link>
        </Button>
      </div>
    </AppLayout>
  );
}

export function WorkspaceScreen() {
  return (
    <AppLayout active="New Decision" title="Decision Workspace">
      <ProgressStepper current="Workspace" />
      <div className="mt-6 grid grid-cols-[1fr_360px] gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Decision summary</CardTitle>
            <CardDescription>Select the best customer support platform for the Q3 migration.</CardDescription>
          </CardHeader>
          <CardContent>
            <CriteriaWeights />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="notes">Decision notes</Label>
            <Textarea id="notes" className="mt-2 min-h-56" defaultValue="Finance needs cost clarity. Support prioritizes implementation speed. Product wants stronger AI summaries." />
            <Button asChild className="mt-4 w-full">
              <Link href="/decisions/recommendation">Generate AI Analysis</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

export function RecommendationScreen() {
  return (
    <AppLayout active="New Decision" title="AI Recommendation">
      <ProgressStepper current="Recommendation" />
      <div className="mt-6 grid grid-cols-[1fr_340px] gap-6">
        <div className="space-y-6">
          <AIRecommendationCard />
          <div className="grid grid-cols-2 gap-6">
            <ReasoningPanel />
            <RiskPanel />
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="secondary" className="w-full">Regenerate</Button>
            <Button asChild className="w-full">
              <Link href="/decisions/compare">Accept Recommendation</Link>
            </Button>
            <ActionItemList />
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

export function CompareOptionsScreen() {
  return (
    <AppLayout active="New Decision" title="Compare Options">
      <ProgressStepper current="Compare" />
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Comparison table</CardTitle>
          <CardDescription>Options compared against criteria and AI scores.</CardDescription>
        </CardHeader>
        <CardContent>
          <ComparisonTable />
        </CardContent>
      </Card>
      <div className="mt-6 flex justify-end">
        <Button asChild>
          <Link href="/decisions/library">Finalize Decision</Link>
        </Button>
      </div>
    </AppLayout>
  );
}

export function LibraryScreen() {
  return (
    <AppLayout active="Library" title="Decision Library">
      <div className="flex items-center gap-3">
        <SearchBar placeholder="Search decisions" className="w-80" />
        <Select defaultValue="all">
          <SelectTrigger className="w-60">
            <SelectValue placeholder="Filters" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            <SelectItem value="final">Final</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Decision list</CardTitle>
          <CardDescription>Find and open saved decisions.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {libraryDecisions.map((decision) => (
            <DecisionCard key={decision.title} decision={decision} />
          ))}
        </CardContent>
      </Card>
      <div className="mt-6">
        <EmptyState />
      </div>
    </AppLayout>
  );
}

export function ProfileScreen() {
  return (
    <AppLayout active="Profile" title="Profile">
      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" className="mt-2" defaultValue="Maya Chen" />
            </div>
            <div>
              <Label htmlFor="profile-email">Email</Label>
              <Input id="profile-email" className="mt-2" defaultValue="maya@decisionflow.ai" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Account actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <label className="flex items-center gap-3 rounded-lg border border-border p-3">
              <Checkbox defaultChecked />
              <span className="text-sm font-medium">Notifications</span>
            </label>
            <Button variant="secondary">Change password</Button>
            <Button variant="destructive">Logout</Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

export function SettingsScreen() {
  return (
    <AppLayout active="Settings" title="Settings">
      <div className="grid grid-cols-2 gap-6">
        {["Theme preference", "Language", "Privacy", "AI Preferences"].map((item) => (
          <Card key={item}>
            <CardHeader>
              <CardTitle>{item}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Label htmlFor={item}>{item}</Label>
              <Input id={item} defaultValue={item === "Theme preference" ? "Light" : "Default"} />
              <label className="flex items-center gap-3 rounded-lg border border-border p-3">
                <Checkbox defaultChecked />
                <span className="text-sm font-medium">Enable setting</span>
              </label>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppLayout>
  );
}
