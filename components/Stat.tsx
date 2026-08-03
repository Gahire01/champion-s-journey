"use client";

import { useCounter } from "@/hooks/useCounter";
import type { LucideIcon } from "lucide-react";

export default function Stat({
  value,
  suffix,
  label,
  icon: Icon,
}: {
  value: number;
  suffix?: string;
  label: string;
  icon: LucideIcon;
}) {
  const { n, ref } = useCounter(value);
  return (
    <div className="group relative overflow-hidden border border-border bg-card p-8">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/30" />
      <Icon className="mb-4 h-6 w-6 text-[color:var(--gold)]" />
      <div className="font-display text-5xl font-bold tracking-tight text-foreground">
        <span ref={ref}>{n.toLocaleString()}</span>
        {suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}
