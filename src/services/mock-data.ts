import {
  BarChart3,
  FileText,
  FolderOpen,
  Home,
  Menu,
  Plus,
  Settings,
  Upload,
  User,
} from "lucide-react";
import type { DecisionCriterion, DecisionOption, DecisionRecord, NavItem } from "@/types/decision";

export const appNav: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "New Decision", href: "/decisions/new", icon: Plus },
  { label: "Library", href: "/decisions/library", icon: FolderOpen },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Settings", href: "/settings", icon: Settings },
];

export const inputMethods = [
  {
    title: "Upload Meeting Transcript",
    description: "Use a meeting transcript file as the source material.",
    href: "/decisions/upload",
    icon: Upload,
  },
  {
    title: "Paste Meeting Notes",
    description: "Paste unstructured notes from a working session.",
    href: "/decisions/upload",
    icon: FileText,
  },
  {
    title: "Import PDF/DOCX",
    description: "Import a document for AI extraction and review.",
    href: "/decisions/upload",
    icon: FolderOpen,
  },
  {
    title: "Manual Entry",
    description: "Start from a blank structured decision workspace.",
    href: "/decisions/upload",
    icon: Menu,
  },
];

export const metrics = [
  { label: "Total decisions", value: "18", helper: "11 completed decisions", trend: "+3 this week" },
  { label: "In review", value: "4", helper: "Awaiting human review", trend: "2 due today" },
  { label: "Completed", value: "11", helper: "Finalized outcomes", trend: "+6 this month" },
  { label: "Avg confidence", value: "82%", helper: "Across recommendations", trend: "+5%" },
];

export const recentDecisions: DecisionRecord[] = [
  {
    title: "Vendor selection",
    owner: "Maya Chen",
    status: "In review",
    confidence: 82,
    updated: "Today, 9:24 AM",
  },
  {
    title: "Roadmap prioritization",
    owner: "Priya Shah",
    status: "Draft",
    confidence: 72,
    updated: "Yesterday",
  },
  {
    title: "Hiring plan",
    owner: "Jon Bell",
    status: "AI review ready",
    confidence: 88,
    updated: "Jul 5, 2026",
  },
];

export const libraryDecisions: DecisionRecord[] = [
  {
    title: "Vendor selection",
    owner: "Maya Chen",
    status: "Final",
    confidence: 82,
    updated: "Today, 11:15 AM",
    result: "Zendesk Suite",
  },
  {
    title: "Roadmap prioritization",
    owner: "Priya Shah",
    status: "Draft",
    confidence: 72,
    updated: "Yesterday",
  },
  {
    title: "Pricing model",
    owner: "Alex Morgan",
    status: "Archived",
    confidence: 79,
    updated: "Jun 20, 2026",
    result: "Usage-based packaging",
  },
];

export const options: DecisionOption[] = [
  { name: "Option A", score: 86, cost: "$89/user", risk: "Medium", fit: "Best balance of speed and maturity" },
  { name: "Option B", score: 78, cost: "$99/user", risk: "Medium", fit: "Strong automation, higher onboarding effort" },
  { name: "Option C", score: 73, cost: "$49/user", risk: "Low", fit: "Cost efficient, weaker AI routing" },
];

export const criteria: DecisionCriterion[] = [
  { name: "Cost", weight: 20, description: "Licensing, migration, and admin cost over 12 months." },
  { name: "Implementation effort", weight: 20, description: "Can be deployed within the current migration window." },
  { name: "Strategic alignment", weight: 25, description: "Supports customer experience and operational goals." },
  { name: "Risk level", weight: 15, description: "Operational, vendor, and adoption risk." },
  { name: "Stakeholder impact", weight: 20, description: "Effects on support, sales, product, and finance teams." },
];

export const extractionSteps = [
  { label: "Extracting decisions...", status: "Complete" },
  { label: "Extracting options...", status: "Complete" },
  { label: "Extracting criteria...", status: "Complete" },
  { label: "Extracting stakeholders...", status: "Current" },
  { label: "Extracting risks...", status: "Queued" },
  { label: "Extracting action items...", status: "Queued" },
];

export const extractedInformation = {
  "Decision topic": "Select the best customer support platform for the Q3 migration.",
  Options: "Option A: Zendesk Suite\nOption B: Intercom\nOption C: Freshdesk",
  Criteria: "Cost, Implementation effort, Strategic alignment, Risk level, Stakeholder impact",
  Stakeholders: "Support leadership, Product operations, Finance, Customer success",
  Risks: "Migration delay, reporting gaps, adoption friction, integration rework",
  "Action items": "Confirm migration window, validate CRM integration, review security questionnaire",
};

export const transcriptSample =
  "Maya: We need a final recommendation by Friday. Support wants the fastest migration, Finance needs cost visibility, and Product wants better AI summaries. Priya: Option A seems safest for the migration window, but Option B has stronger automation upside. Jon: We should score each option against implementation effort, strategic alignment, risk, and stakeholder impact.";

export const reasoning = [
  "Option A scores highest on implementation effort because the team can reuse existing help center content and macros.",
  "Option B has stronger automation upside, but rollout risk is higher for the current migration timeline.",
  "Option C is the lowest-cost option, but falls below the target threshold for reporting depth and stakeholder impact.",
];

export const risks = [
  "CRM integration may require additional QA before launch.",
  "Support team training must be completed before migration weekend.",
  "Reporting parity needs finance approval before final procurement.",
];

export const actionItems = [
  "Validate CRM integration scope with RevOps.",
  "Schedule support admin training.",
  "Request final procurement review from Finance.",
];

export const comparisonRows = criteria.map((criterion, index) => ({
  criterion: criterion.name,
  optionA: [88, 84, 91, 78, 86][index],
  optionB: [72, 70, 88, 69, 82][index],
  optionC: [94, 81, 68, 84, 70][index],
  aiScore: [86, 82, 91, 78, 86][index],
  recommended: index === 2 ? "Option A" : "",
}));

export const workspaceMilestones = [
  { label: "Input", href: "/decisions/upload" },
  { label: "Extraction", href: "/decisions/extraction" },
  { label: "Review", href: "/decisions/review" },
  { label: "Workspace", href: "/decisions/workspace" },
  { label: "Recommendation", href: "/decisions/recommendation" },
  { label: "Compare", href: "/decisions/compare" },
  { label: "Finalize", href: "/decisions/library" },
];

export const dashboardInsightIcon = BarChart3;
