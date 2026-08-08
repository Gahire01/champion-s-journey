import { leadership, members } from "@/lib/people";

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-6 py-32">
      <div className="mb-16 text-center">
        <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
          — Leadership & Members
        </div>
        <h2 className="font-display text-5xl sm:text-6xl">
          The People <span className="text-gradient-gold">Behind</span> The Club.
        </h2>
      </div>

      <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
        Leadership
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {leadership.map((t) => (
          <div
            key={t.id}
            className="group border border-border bg-card p-6 text-center transition-all duration-300 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5"
          >
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full border-2 border-[color:var(--gold)]/30 bg-gradient-to-br from-primary/20 via-background to-[color:var(--gold)]/10 font-display text-2xl text-[color:var(--gold)] transition-transform duration-300 group-hover:scale-110">
              {t.name.charAt(0)}
            </div>
            <h3 className="font-display text-lg">{t.name}</h3>
            <div className="mt-1 text-xs uppercase tracking-widest text-[color:var(--gold)]">
              {t.role}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4 mt-20 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
        Members
      </div>
      <div className="flex flex-wrap gap-3">
        {members.map((m) => (
          <span
            key={m.id}
            className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-[color:var(--gold)]/60 hover:text-foreground"
          >
            <span className="grid h-5 w-5 place-items-center bg-gradient-to-br from-primary/30 to-[color:var(--gold)]/20 font-display text-[10px] text-[color:var(--gold)]">
              {m.name.charAt(0)}
            </span>
            {m.name}
          </span>
        ))}
      </div>
    </section>
  );
}
