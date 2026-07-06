"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import { CheckCircle2 } from "lucide-react";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return <ToastPrimitive.Provider swipeDirection="right">{children}</ToastPrimitive.Provider>;
}

export function ToastViewport() {
  return <ToastPrimitive.Viewport className="fixed bottom-6 right-6 z-50 flex w-96 max-w-[calc(100vw-48px)] flex-col gap-3" />;
}

export function DemoToast() {
  return (
    <ToastPrimitive.Root className="grid grid-cols-[auto_1fr] items-start gap-3 rounded-lg border border-border bg-white p-4 shadow-lg">
      <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
      <div>
        <ToastPrimitive.Title className="text-sm font-semibold">Decision saved</ToastPrimitive.Title>
        <ToastPrimitive.Description className="mt-1 text-sm text-muted-foreground">
          Your finalized decision is available in the library.
        </ToastPrimitive.Description>
      </div>
    </ToastPrimitive.Root>
  );
}
