import Image from "next/image";
import { Flame, Ruler, Scale } from "lucide-react";
import { fighters } from "@/lib/fighters";

function RecordBar({ wins, losses }: { wins: number; losses: number }) {
  const total = wins + losses || 1;
  return (
    <div className="mt-4 h-1.5 overflow-hidden bg-secondary">
      <div
        className="h-full bg-gradient-to-r from-primary to-[color:var(--gold)]"
        style={{ width: `${(wins / total) * 100}%` }}
      />
    </div>
  );
}

export default function Fighters() {
  return (
    <section
      id="fighters"
      className="relative overflow-hidden border-t border-border bg-gradient-to-b from-background via-card/30 to-background py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute -right-10 top-8 font-display text-[22rem] leading-none tracking-tighter">
          ROSTER
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
              — Our Fighters
            </div>
            <h2 className="font-display text-5xl sm:text-6xl">
              The <span className="text-gradient-gold">Roster</span>.<br />
              The Record.
            </h2>
            <p className="mt-4 text-muted-foreground">
              The men and women who carry the ALI name into the ring — every bout, every belt,
              every win on their way to glory.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-px border border-border bg-border text-center">
            {[
              [`${fighters.length}`, "Active Fighters"],
              ["3", "National Champs"],
              ["68%", "Win Rate"],
            ].map(([v, l]) => (
              <div key={l} className="bg-card/60 px-6 py-4 backdrop-blur">
                <div className="font-display text-2xl text-[color:var(--gold)]">{v}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fighters.map((f, i) => {
            const { wins, losses, draws, kos } = f.record;
            const fights = wins + losses + draws;
            return (
              <article
                key={f.name}
                className="group relative flex flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-[0_20px_60px_-20px_var(--blood)]"
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={f.image}
                    alt={`${f.name} — ${f.weightClass}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 border border-[color:var(--gold)]/60 bg-background/70 px-2 py-1 text-[10px] uppercase tracking-widest text-[color:var(--gold)] backdrop-blur">
                    <Flame className="h-3 w-3" /> {f.weightClass}
                  </div>
                  <div className="absolute right-4 top-4 bg-primary/90 px-2.5 py-1 font-display text-sm tracking-wider text-primary-foreground backdrop-blur">
                    {wins}-{losses}-{draws}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl">{f.name}</h3>
                  <div className="mt-1 text-xs uppercase tracking-widest text-[color:var(--gold)]">
                    “{f.nickname}”
                  </div>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{f.note}</p>

                  <div className="mt-5 grid grid-cols-3 gap-px border border-border bg-border text-center">
                    {[
                      [String(fights), "Fights"],
                      [String(wins), "Wins"],
                      [String(kos), "KOs"],
                    ].map(([v, l]) => (
                      <div key={l} className="bg-background/50 p-3">
                        <div className="font-display text-2xl text-[color:var(--gold)]">{v}</div>
                        <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                          {l}
                        </div>
                      </div>
                    ))}
                  </div>

                  <RecordBar wins={wins} losses={losses} />

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-border pt-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      Age {f.age}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Ruler className="h-3 w-3 text-[color:var(--gold)]" /> {f.height}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      Reach {f.reach}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Scale className="h-3 w-3 text-[color:var(--gold)]" /> {f.stance}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
