"use client";

import { useState } from "react";
import Image from "next/image";
import { Award } from "lucide-react";
import { coaches } from "@/lib/people";
import CertificateViewer from "@/components/CertificateViewer";

export default function Coaches() {
  const [certificate, setCertificate] = useState<{ label: string; href: string } | null>(null);
  const [head, ...rest] = coaches;

  return (
    <section id="coaches" className="mx-auto max-w-7xl px-6 py-32">
      <div className="mb-16 text-center">
        <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
          — The Coaching Team
        </div>
        <h2 className="font-display text-5xl sm:text-6xl">
          Cornermen. <span className="text-gradient-gold">Champions.</span>
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="group relative overflow-hidden border border-border bg-card lg:row-span-2">
          <div className="grid sm:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-auto">
              <Image
                src={head.image}
                alt={head.name}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                loading="eager"
                className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-background" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="inline-flex w-fit items-center gap-2 border border-[color:var(--gold)] bg-[color:var(--gold)]/10 px-3 py-1 text-[10px] uppercase tracking-widest text-[color:var(--gold)]">
                <Award className="h-3.5 w-3.5" /> {head.role}
              </div>
              <h3 className="mt-5 font-display text-4xl sm:text-5xl">{head.name}</h3>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Profile information coming soon.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => head.certificate && setCertificate(head.certificate)}
                  className="btn-fight btn-fight-hover inline-flex items-center gap-2 text-sm"
                >
                  <Award className="h-4 w-4" /> View Certificate
                </button>
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
                >
                  Book a session
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:col-start-2 lg:grid-cols-1">
          {rest.map((c) => (
            <div
              key={c.id}
              className="group relative flex overflow-hidden border border-border bg-card"
            >
              <div className="relative aspect-square w-32 shrink-0 overflow-hidden sm:w-40">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 640px) 128px, 160px"
                  loading="lazy"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <div className="text-[10px] uppercase tracking-widest text-[color:var(--gold)]">
                  {c.role}
                </div>
                <h3 className="mt-1 font-display text-2xl">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Profile information coming soon.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {certificate && (
        <CertificateViewer
          label={certificate.label}
          href={certificate.href}
          open
          onClose={() => setCertificate(null)}
        />
      )}
    </section>
  );
}
