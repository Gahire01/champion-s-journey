export default function Testimonials() {
  return (
    <section className="border-t border-border bg-card/30 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
            — Voices from the Ring
          </div>
          <h2 className="font-display text-5xl sm:text-6xl">
            What Our <span className="text-gradient-gold">Fighters</span> Say.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real stories from our members and fighters are being collected for launch. Check back
            soon — the ring talk is coming.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="border border-dashed border-border bg-background/60 p-8 text-center"
            >
              <div className="mb-4 flex justify-center gap-1 text-[color:var(--gold)]/40">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="text-sm italic text-muted-foreground">
                Member testimonial coming soon.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
