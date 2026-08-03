"use client";

import { useState } from "react";

const filters = [
  { key: "All", match: () => true },
  { key: "Kids", match: (c: string) => ["Kids", "Youth"].includes(c) },
  { key: "Adults", match: (c: string) => ["Pro Camp", "Amateur", "Open Gym", "Sparring"].includes(c) },
  { key: "Women", match: (c: string) => c === "Women" },
  { key: "Elite", match: (c: string) => ["Pro Camp", "Amateur", "Sparring"].includes(c) },
  { key: "Fitness", match: (c: string) => c === "Fitness" },
];

const rows = [
  ["7:00 AM", "Pro Camp", "Fitness", "Pro Camp", "Fitness", "Pro Camp", "Open Gym"],
  ["12:00 PM", "Fitness", "Fitness", "Fitness", "Fitness", "Fitness", "Fitness"],
  ["5:00 PM", "Kids", "Youth", "Kids", "Youth", "Kids", "Kids"],
  ["6:00 PM", "Youth", "Women", "Youth", "Women", "Youth", "Women"],
  ["7:00 PM", "Amateur", "Amateur", "Amateur", "Amateur", "Sparring", "Sparring"],
];

export default function Schedule() {
  const [active, setActive] = useState("All");

  const visibleRows = rows.filter((row) => {
    const filter = filters.find((f) => f.key === active) ?? filters[0];
    return row.slice(1).some((cell) => filter.match(cell));
  });

  return (
    <section id="schedule" className="border-y border-border bg-card/30 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
              — Weekly Schedule
            </div>
            <h2 className="font-display text-5xl sm:text-6xl">
              This Week&apos;s <span className="text-gradient-gold">Rounds</span>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
                  active === f.key
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
                }`}
              >
                {f.key}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto border border-border">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-border bg-background">
                {["Time", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((h) => (
                  <th key={h} className="p-4 text-left font-display text-xs uppercase tracking-widest text-muted-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row, ri) => (
                <tr key={ri} className="border-b border-border last:border-0 hover:bg-primary/5">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`p-4 ${ci === 0 ? "font-display text-[color:var(--gold)]" : "text-muted-foreground"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
