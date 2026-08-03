const team = [
  { name: "Ali Semwaga", role: "Head Coach & Founder", desc: "Visionary leader behind ALI Boxing Club. Over a decade of shaping champions." },
  { name: "Sandrine Uwimana", role: "Secretary", desc: "Keeps the club running — registrations, scheduling, and member support." },
  { name: "Patrick Mugisha", role: "Product Manager", desc: "Drives program development, curriculum design, and member experience." },
  { name: "Diane Kabatesi", role: "Account Manager", desc: "Manages finances, sponsorships, and the youth scholarship fund." },
];

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-6 py-32">
      <div className="mb-16 text-center">
        <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
          — Team
        </div>
        <h2 className="font-display text-5xl sm:text-6xl">
          The People <span className="text-gradient-gold">Behind</span> The Club.
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((t) => (
          <div
            key={t.name}
            className="group border border-border bg-card p-6 text-center transition-all duration-300 hover:border-[color:var(--gold)]/60 hover:shadow-xl hover:shadow-[color:var(--gold)]/5"
          >
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full border-2 border-[color:var(--gold)]/30 bg-gradient-to-br from-primary/20 via-background to-[color:var(--gold)]/10 font-display text-2xl text-[color:var(--gold)] transition-transform duration-300 group-hover:scale-110">
              {t.name.charAt(0)}
            </div>
            <h3 className="font-display text-lg">{t.name}</h3>
            <div className="mt-1 text-xs uppercase tracking-widest text-[color:var(--gold)]">
              {t.role}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
