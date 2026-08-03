import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { coach1, coach2, coach3 } from "@/lib/images";

const coaches = [
  { img: coach1, name: "Ali Semwaga", role: "Head Coach", years: "12 yrs", bio: "Former national team boxer, dedicated to building champions in Rwanda." },
  { img: coach2, name: "Diego Ramirez", role: "Pro & Amateur Lead", years: "18 yrs", bio: "Ex-WBC ranked lightweight, corner for 3 world title fights." },
  { img: coach3, name: "Elena Vasquez", role: "Women's & Fitness", years: "12 yrs", bio: "IBA certified, national silver medalist, mother of two fighters." },
];

export default function Coaches() {
  return (
    <section id="coaches" className="mx-auto max-w-7xl px-6 py-32">
      <div className="mb-16 text-center">
        <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
          — Meet The Coaches
        </div>
        <h2 className="font-display text-5xl sm:text-6xl">
          Cornermen. <span className="text-gradient-gold">Champions.</span>
        </h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {coaches.map((c) => (
          <div key={c.name} className="group relative overflow-hidden border border-border bg-card">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={c.img}
                alt={c.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl">{c.name}</h3>
                  <div className="mt-1 text-xs uppercase tracking-widest text-[color:var(--gold)]">
                    {c.role}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl">{c.years}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    experience
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{c.bio}</p>
              <a
                href="#book"
                className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--gold)] hover:underline"
              >
                Book with this coach <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
