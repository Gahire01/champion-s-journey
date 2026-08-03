import { Check } from "lucide-react";

const plans = [
  { name: "Beginner", price: 79, tag: "Get Started", features: ["3 sessions per week", "Group classes", "Gym access", "Beginner curriculum"] },
  { name: "Warrior", price: 129, tag: "Most Popular", featured: true, features: ["Unlimited training", "All group classes", "Sparring nights", "Progress tracking", "Guest passes (2/mo)"] },
  { name: "Champion", price: 249, tag: "Elite", features: ["Everything in Warrior", "Personal head coach", "Nutrition plan", "Competition prep", "Video film review", "Priority ring time"] },
];

export default function Membership() {
  return (
    <section id="membership" className="mx-auto max-w-7xl px-6 py-32">
      <div className="mb-16 text-center">
        <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
          — Membership
        </div>
        <h2 className="font-display text-5xl sm:text-6xl">
          Choose Your <span className="text-gradient-gold">Weight Class</span>.
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative border p-8 ${
              p.featured
                ? "border-[color:var(--gold)] bg-gradient-to-b from-primary/10 to-transparent"
                : "border-border bg-card"
            }`}
          >
            {p.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[color:var(--gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-background">
                Most Popular
              </div>
            )}
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.tag}</div>
            <h3 className="mt-2 font-display text-4xl">{p.name}</h3>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-6xl">${p.price}</span>
              <span className="text-sm text-muted-foreground">/month</span>
            </div>
            <ul className="mt-8 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="#book"
              className={`mt-8 block w-full text-center ${
                p.featured ? "btn-fight btn-fight-hover" : "btn-ghost-gold btn-ghost-gold-hover"
              }`}
            >
              Choose {p.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
