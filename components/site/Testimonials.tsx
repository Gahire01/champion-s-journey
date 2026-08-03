const testimonials = [
  { q: "My son walked in shy, walked out a Golden Gloves finalist. Coach Marcus is the real deal.", n: "Angela P.", r: "Parent" },
  { q: "Best gym in the city. The energy, the coaching, the community — nothing compares.", n: "David K.", r: "Amateur, 3-1" },
  { q: "Elena's women's class rebuilt my confidence more than any therapist ever did.", n: "Sara M.", r: "Member since 2022" },
];

export default function Testimonials() {
  return (
    <section className="border-t border-border bg-card/30 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
            — Voices from the Ring
          </div>
          <h2 className="font-display text-5xl sm:text-6xl">
            What Our <span className="text-gradient-gold">Fighters</span> Say.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-border bg-background p-8">
              <div className="mb-4 flex text-[color:var(--gold)]">★</div>
              <p className="text-muted-foreground">&ldquo;{t.q}&rdquo;</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-display text-sm uppercase tracking-wider">{t.n}</div>
                <div className="text-xs text-muted-foreground">{t.r}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
