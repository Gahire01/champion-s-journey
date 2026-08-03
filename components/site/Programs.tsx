import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { kidsImg, womenImg, proImg, youthImg, fitnessImg, amateurImg } from "@/lib/images";

const programs = [
  { img: kidsImg, title: "Kids Boxing", age: "Ages 6–12", fee: "$79/mo", coach: "Coach Marcus", schedule: "Mon · Wed · Fri · 5PM" },
  { img: womenImg, title: "Women's Boxing", age: "All Levels", fee: "$99/mo", coach: "Coach Elena", schedule: "Tue · Thu · Sat · 6PM" },
  { img: proImg, title: "Professional", age: "By invitation", fee: "Custom", coach: "Coach Diego", schedule: "Daily · 7AM & 6PM" },
  { img: youthImg, title: "Youth Boxing", age: "Ages 13–17", fee: "$89/mo", coach: "Coach Marcus", schedule: "Mon · Wed · Fri · 6PM" },
  { img: fitnessImg, title: "Boxing Fitness", age: "All Levels", fee: "$69/mo", coach: "Coach Elena", schedule: "Daily · 12PM" },
  { img: amateurImg, title: "Amateur / Competition", age: "16+", fee: "$149/mo", coach: "Coach Diego", schedule: "Tue · Thu · Sat · 7PM" },
];

const imgSizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";

export default function Programs() {
  return (
    <section id="programs" className="border-t border-border bg-card/30 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
              — Training Programs
            </div>
            <h2 className="font-display text-5xl sm:text-6xl">
              Pick Your <span className="text-gradient-gold">Fight</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Seven programs built for every level — from a 6-year-old&apos;s first jab to a pro&apos;s title
            camp.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden border border-border bg-background transition-all hover:border-primary/60"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes={imgSizes}
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute right-4 top-4 border border-[color:var(--gold)]/60 bg-background/70 px-2 py-1 text-[10px] uppercase tracking-widest text-[color:var(--gold)] backdrop-blur">
                  {p.age}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-3xl">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-widest text-muted-foreground">
                    <span>{p.coach}</span>
                    <span className="text-[color:var(--gold)]">{p.fee}</span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{p.schedule}</div>
                </div>
              </div>
              <a
                href="#book"
                className="flex items-center justify-between border-t border-border px-6 py-4 text-xs uppercase tracking-widest transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
              >
                Book Class <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
