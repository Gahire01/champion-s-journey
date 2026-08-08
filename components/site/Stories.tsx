import { ArrowRight, Quote } from "lucide-react";
import { fighters, members } from "@/lib/people";

const stories = [
  ...fighters.slice(0, 3).map((f) => ({ name: f.name, tag: "Fighter" })),
  ...members.slice(0, 3).map((m) => ({ name: m.name, tag: "Member" })),
];

export default function Stories() {
  return (
    <section
      id="stories"
      className="relative overflow-hidden border-t border-border bg-gradient-to-b from-background via-card/30 to-background py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute -left-20 top-10 font-display text-[22rem] leading-none tracking-tighter">
          GRIT
        </div>
        <div className="absolute -right-10 bottom-0 font-display text-[18rem] leading-none tracking-tighter text-[color:var(--gold)]">
          GLORY
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal mb-16 max-w-3xl">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
            — Champion Stories
          </div>
          <h2 className="font-display text-5xl sm:text-6xl">
            From <span className="text-gradient-gold">Nothing</span> to the Ring.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every belt starts with a background story. Member and fighter profiles are being
            prepared and will be published here soon.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <article
              key={s.name}
              className="reveal group relative flex flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-[0_20px_60px_-20px_var(--blood)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative grid aspect-[4/3] place-items-center bg-gradient-to-br from-primary/20 via-background to-[color:var(--gold)]/10">
                <div className="grid h-24 w-24 place-items-center border-2 border-[color:var(--gold)]/30 font-display text-5xl text-[color:var(--gold)] transition-transform duration-300 group-hover:scale-110">
                  {s.name.charAt(0)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute left-4 top-4 border border-[color:var(--gold)]/60 bg-background/70 px-2 py-1 text-[10px] uppercase tracking-widest text-[color:var(--gold)] backdrop-blur">
                  {s.tag}
                </div>
                <Quote className="absolute right-4 top-4 h-6 w-6 text-[color:var(--gold)]/60" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl">{s.name}</h3>
                <div className="mt-2 text-[10px] uppercase tracking-widest text-[color:var(--gold)]">
                  Full story coming soon
                </div>
                <p className="mt-4 flex-1 text-sm italic text-muted-foreground">
                  This profile is being prepared and will be published soon.
                </p>
                <a
                  href="#apply"
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--gold)] transition-transform hover:translate-x-1"
                >
                  Write your story <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
