"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Flame, Heart, Trophy } from "lucide-react";
import { heroImages } from "@/lib/images";

export default function Hero() {
  const [idx, setIdx] = useState({ cur: 0, prev: 0 });

  useEffect(() => {
    const id = setInterval(
      () => setIdx((s) => ({ prev: s.cur, cur: (s.cur + 1) % heroImages.length })),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  const current = heroImages[idx.cur];
  const previous = heroImages[idx.prev];

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <Image
            key={previous}
            src={previous}
            alt=""
            aria-hidden
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover opacity-0 animate-kenburns transition-opacity duration-1000"
          />
          <Image
            key={current}
            src={current}
            alt=""
            aria-hidden
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover opacity-60 animate-kenburns transition-opacity duration-1000"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
        <div className="animate-reveal-up">
          <div className="mb-6 inline-flex items-center gap-2 border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
            <Flame className="h-3 w-3" /> Since 2014 · 120+ Medals
          </div>
          <h1 className="font-display text-6xl font-bold leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
            Train Like
            <br />a <span className="text-gradient-gold">Champion</span>.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            From your first jab to the world stage — ALI Boxing Club builds fighters. Kids, women,
            amateurs and pros welcome.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#apply" className="btn-fight btn-fight-hover animate-glow-pulse">
              🥊 Join Now
            </a>
            <a href="#book" className="btn-ghost-gold btn-ghost-gold-hover">
              📅 Book a Free Class
            </a>
            <a href="#donate" className="btn-ghost-gold btn-ghost-gold-hover">
              <Heart className="h-4 w-4" /> Donate
            </a>
            <a href="#membership" className="btn-ghost-gold btn-ghost-gold-hover">
              <Trophy className="h-4 w-4" /> Become a Member
            </a>
          </div>
          <div className="mt-12 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> 47 members
              training now
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 rotate-90 font-display text-[10rem] font-bold tracking-tighter text-white/[0.03]">
            FIGHT
          </div>
          <div className="relative mx-auto h-72 w-72">
            <Image
              key={current}
              src={current}
              alt=""
              aria-hidden
              sizes="20rem"
              className="absolute inset-0 h-full w-full animate-float-slow rounded-2xl object-cover opacity-90 drop-shadow-[0_20px_60px_rgba(220,38,38,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
