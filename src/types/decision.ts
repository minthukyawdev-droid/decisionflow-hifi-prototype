import type { LucideIcon } from "lucide-react";

export type DecisionStatus = "Draft" | "In review" | "AI review ready" | "Final" | "Archived" | "Saved";

export type DecisionOption = {
  name: string;
  score: number;
  cost: string;
  risk: "Low" | "Medium" | "High";
  fit: string;
};

export type DecisionCriterion = {
  name: string;
  weight: number;
  description: string;
};

export type DecisionRecord = {
  title: string;
  owner: string;
  status: DecisionStatus;
  confidence: number;
  updated: string;
  result?: string;
};

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};
