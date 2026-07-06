"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const authSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Use a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
});

type AuthValues = z.infer<typeof authSchema>;

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const form = useForm<AuthValues>({
    resolver: zodResolver(authSchema),
    defaultValues: { name: "Maya Chen", email: "maya@decisionflow.ai", password: "prototype" },
  });

  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(() => undefined)}>
      {mode === "register" && (
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" className="mt-2" {...form.register("name")} />
        </div>
      )}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" className="mt-2" {...form.register("email")} />
        {form.formState.errors.email && <p className="mt-1 text-xs text-red-600">{form.formState.errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" className="mt-2" {...form.register("password")} />
      </div>
      <Button asChild className="w-full">
        <Link href="/dashboard">{mode === "login" ? "Login" : "Register"}</Link>
      </Button>
    </form>
  );
}
