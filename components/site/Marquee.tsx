export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border bg-primary py-5">
      <div className="animate-ticker flex whitespace-nowrap font-display text-2xl uppercase tracking-widest text-primary-foreground">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8 px-4">
            {[
              "Discipline",
              "Power",
              "Speed",
              "Heart",
              "Precision",
              "Respect",
              "Grit",
              "Victory",
            ].map((w) => (
              <span key={w} className="flex items-center gap-8">
                {w} <span className="text-[color:var(--gold)]">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
