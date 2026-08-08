"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Clapperboard, Play, X } from "lucide-react";
import { videos, videoCategories, type VideoItem } from "@/lib/videos";

export default function Videos() {
  const [active, setActive] = useState<"all" | VideoItem["category"]>("all");
  const [playing, setPlaying] = useState<VideoItem | null>(null);

  const visible = useMemo(
    () => (active === "all" ? videos : videos.filter((v) => v.category === active)),
    [active],
  );

  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPlaying(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [playing]);

  return (
    <section
      id="videos"
      className="relative overflow-hidden border-t border-border bg-gradient-to-b from-background via-card/30 to-background py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <Image
          src="/videos/cover.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
            <Clapperboard className="h-4 w-4" /> — Watch The Club
          </div>
          <h2 className="font-display text-5xl sm:text-6xl">
            In The <span className="text-gradient-gold">Ring</span>.
          </h2>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {videoCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest transition-colors ${
                active === c.id
                  ? "bg-[color:var(--gold)] text-background"
                  : "border border-border text-muted-foreground hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setPlaying(v)}
              className="group relative block aspect-video overflow-hidden border border-border bg-card text-left"
            >
              <Image
                src={v.poster}
                alt={v.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid h-16 w-16 place-items-center rounded-full border border-[color:var(--gold)]/60 bg-background/60 text-[color:var(--gold)] backdrop-blur transition-transform duration-300 group-hover:scale-110 group-hover:bg-[color:var(--gold)] group-hover:text-background">
                  <Play className="ml-1 h-6 w-6" fill="currentColor" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[10px] uppercase tracking-widest text-[color:var(--gold)]">
                  {v.categoryLabel}
                </div>
                <div className="mt-1 font-display text-xl">{v.title}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {playing && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${playing.title} video player`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setPlaying(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative flex max-h-full w-full max-w-4xl flex-col overflow-hidden border border-border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-widest text-[color:var(--gold)]">
                  {playing.categoryLabel}
                </div>
                <div className="truncate font-display text-lg">{playing.title}</div>
              </div>
              <button
                type="button"
                onClick={() => setPlaying(null)}
                aria-label="Close video player"
                className="grid h-10 w-10 shrink-0 place-items-center border border-border text-muted-foreground transition-colors hover:border-[color:var(--gold)] hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="min-h-0 flex-1 bg-black">
              <video
                key={playing.id}
                src={playing.src}
                poster={playing.poster}
                controls
                autoPlay
                preload="metadata"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
