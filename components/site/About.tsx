"use client";

import Image from "next/image";
import { Users, Trophy, Star, Flame } from "lucide-react";
import Stat from "@/components/Stat";
import { glovesImg } from "@/lib/images";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div className="relative h-[520px] w-full">
            <Image
              src={glovesImg}
              alt="Red boxing gloves"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              className="diag-slice object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden border border-[color:var(--gold)] bg-background p-6 lg:block">
            <div className="font-display text-5xl text-[color:var(--gold)]">10+</div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Years of
              <br />
              Excellence
            </div>
          </div>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
            — Our Story
          </div>
          <h2 className="font-display text-5xl leading-tight sm:text-6xl">
            Where <span className="text-gradient-gold">Fighters</span>
            <br /> Are Forged.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Founded by former national champion coaches, ALI Boxing Club is more than a gym — it&apos;s
            a family of fighters, mentors, and community leaders committed to building character
            through the sweet science.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Certified Coaches", "USA Boxing & IBA licensed staff"],
              ["World-Class Ring", "Full-size competition ring & 12 heavy bags"],
              ["Youth Development", "Scholarships for underserved kids"],
              ["Proven Results", "3 national champions in 2025"],
            ].map(([t, d]) => (
              <div key={t} className="border-l-2 border-primary pl-4">
                <div className="font-display text-sm uppercase tracking-wider">{t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat value={1000} suffix="+" label="Active Members" icon={Users} />
        <Stat value={120} suffix="+" label="Medals Won" icon={Trophy} />
        <Stat value={18} label="Certified Coaches" icon={Star} />
        <Stat value={10} suffix="+" label="Years of Excellence" icon={Flame} />
      </div>
    </section>
  );
}
