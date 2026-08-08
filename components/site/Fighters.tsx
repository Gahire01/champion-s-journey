import { UserRound } from "lucide-react";
import { fighters } from "@/lib/people";

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
              The <span className="text-gradient-gold">Roster</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              The men and women who carry the ALI name into the ring. Full fighter profiles are
              being prepared and will be published soon.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px border border-border bg-border text-center">
            <div className="bg-card/60 px-8 py-4 backdrop-blur">
              <div className="font-display text-2xl text-[color:var(--gold)]">
                {fighters.length}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                Active Fighters
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fighters.map((f) => (
            <article
              key={f.id}
              className="group flex items-center gap-5 border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-[0_20px_60px_-20px_var(--blood)]"
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center border border-border bg-gradient-to-br from-primary/20 via-background to-[color:var(--gold)]/10 font-display text-2xl text-[color:var(--gold)] transition-transform duration-300 group-hover:scale-110">
                {f.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <h3 className="truncate font-display text-lg leading-snug">{f.name}</h3>
                <div className="mt-1 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <UserRound className="h-3 w-3 text-[color:var(--gold)]" /> Profile coming soon
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
