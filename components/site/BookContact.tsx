"use client";

import { useState } from "react";
import { ArrowRight, Calendar, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink, COACH_PHONE, COACH_TEL } from "@/lib/site";

export default function BookContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    program: "Program of interest…",
    date: "",
    goals: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `🥊 *BOOKING REQUEST — ALI Boxing Club*\n\n` +
      `👤 Name: ${form.name || "-"}\n` +
      `📧 Email: ${form.email || "-"}\n` +
      `🎯 Program: ${form.program}\n` +
      `📅 Preferred date: ${form.date || "-"}\n` +
      `💬 Goals: ${form.goals || "-"}\n\n` +
      `Sent from aliboxingclub.com`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="book" className="mx-auto max-w-7xl px-6 py-32">
      <div className="grid gap-16 lg:grid-cols-2">
        <div id="contact">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
            — Book / Contact
          </div>
          <h2 className="font-display text-5xl sm:text-6xl">
            Step In The <span className="text-gradient-gold">Ring</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Book your free first class or drop us a line. We answer within 24 hours.
          </p>
          <div className="mt-10 space-y-5 text-sm">
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-[color:var(--gold)]" /> ALI Boxing Club — Kigali,
              Rwanda
            </div>
            <a
              href={COACH_TEL}
              className="flex items-center gap-4 text-foreground transition-colors hover:text-[color:var(--gold)]"
            >
              <Phone className="h-5 w-5 text-[color:var(--gold)]" /> {COACH_PHONE}
            </a>
            <a
              href={waLink("Hello Coach, I'd like to book a class at ALI Boxing Club.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-foreground transition-colors hover:text-[color:var(--gold)]"
            >
              <MessageCircle className="h-5 w-5 text-[color:var(--gold)]" /> Message us on WhatsApp
            </a>
            <div className="flex items-center gap-4">
              <Calendar className="h-5 w-5 text-[color:var(--gold)]" /> Mon–Sat · 6AM – 10PM
            </div>
          </div>
        </div>
        <form className="border border-border bg-card p-8" onSubmit={onSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-[color:var(--gold)]"
            />
            <input
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-[color:var(--gold)]"
            />
          </div>
          <select
            className="mt-4 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]"
            value={form.program}
            onChange={(e) => setForm({ ...form, program: e.target.value })}
          >
            <option>Program of interest…</option>
            <option>Kids Boxing</option>
            <option>Youth Boxing</option>
            <option>Women&apos;s Boxing</option>
            <option>Amateur / Competition</option>
            <option>Boxing Fitness</option>
            <option>Private Coaching</option>
          </select>
          <input
            type="date"
            className="mt-4 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
          <textarea
            placeholder="Tell us your goals…"
            rows={4}
            className="mt-4 w-full border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-[color:var(--gold)]"
            value={form.goals}
            onChange={(e) => setForm({ ...form, goals: e.target.value })}
          />
          <button type="submit" className="btn-fight btn-fight-hover mt-6 w-full">
            Book My Free Class <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            No card required · 60-minute session
          </p>
        </form>
      </div>
    </section>
  );
}
