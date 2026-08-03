import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { story1, story2, story3, coach1, coach3, coach2 } from "@/lib/images";

const stories = [
  { name: "Amir 'The Storm' Khan", from: "Street kid, age 11", to: "Junior National Gold 2024", years: "6 yrs at ALI", quote: "I had nothing but anger. Coach turned it into a jab. Now I'm ranked #1 in my weight class.", img: story1 },
  { name: "Layla Ahmed", from: "Single mom, office worker", to: "State Champion 2025", years: "3 yrs at ALI", quote: "Women's boxing gave me back my body and my confidence. I fight for every woman who ever felt small.", img: story2 },
  { name: "Marco 'Kid' Diaz", from: "Bullied at school, age 8", to: "Silver Gloves finalist", years: "4 yrs at ALI", quote: "The bullies stopped after month one. Not because I fought — because I stopped being afraid.", img: story3 },
  { name: "Jamal 'Bomber' Reid", from: "Warehouse worker", to: "Pro debut 4-0 KO", years: "5 yrs at ALI", quote: "I was sparring on lunch breaks. Now I'm on Friday night cards. This gym is my second family.", img: coach1 },
  { name: "Priya Nair", from: "College student", to: "Regional Amateur Champion", years: "2 yrs at ALI", quote: "Elena believed in me before I did. That's the ALI difference — they see the fighter first.", img: coach3 },
  { name: "Big Tony", from: "Recovering, age 45", to: "Masters Division Bronze", years: "3 yrs at ALI", quote: "Boxing saved my life. Literally. The bag doesn't judge — it just makes you honest.", img: coach2 },
];

const imgSizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";

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
            Every belt starts with a background story. These are the fighters who walked through
            our doors — and walked out champions.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s, i) => (
            <article
              key={s.name}
              className="reveal group relative flex flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-[0_20px_60px_-20px_var(--blood)]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.name}
                  fill
                  sizes={imgSizes}
                  loading="lazy"
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute left-4 top-4 border border-[color:var(--gold)]/60 bg-background/70 px-2 py-1 text-[10px] uppercase tracking-widest text-[color:var(--gold)] backdrop-blur">
                  {s.years}
                </div>
                <Quote className="absolute right-4 top-4 h-6 w-6 text-[color:var(--gold)]/60" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl">{s.name}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest">
                  <span className="text-muted-foreground">{s.from}</span>
                  <ArrowRight className="h-3 w-3 text-[color:var(--gold)]" />
                  <span className="text-[color:var(--gold)]">{s.to}</span>
                </div>
                <p className="mt-4 flex-1 text-sm italic text-muted-foreground">&ldquo;{s.quote}&rdquo;</p>
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
