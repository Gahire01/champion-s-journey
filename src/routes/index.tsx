import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Flame, Trophy, Users, Star, Calendar, MapPin, Phone, Mail,
  ArrowRight, Check, Heart, ShoppingBag, Play, Instagram, Facebook, Youtube,
  MessageCircle, Image as ImageIcon, Video as VideoIcon, Quote, Send,
} from "lucide-react";
import heroImg from "@/assets/hero-boxer.jpg";
import glovesImg from "@/assets/gloves.jpg";
import kidsImg from "@/assets/program-kids.jpg";
import womenImg from "@/assets/program-women.jpg";
import proImg from "@/assets/program-pro.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";
import logoImg from "@/assets/ali-logo.png";

// TODO: replace with real WhatsApp number in international format (no + or spaces), e.g. "14155551234"
const WHATSAPP_NUMBER = "250788750321";
const COACH_PHONE = "+250788750321";
const COACH_TEL = "tel:+250788750321";
const MTN_MOMO_CODE = "*182*8*1*250788750321#";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({ component: Index });

// Scroll reveal — adds .is-visible when the element enters the viewport
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}


function useCounter(target: number, duration = 1600) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            setN(Math.floor(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { n, ref };
}

function Stat({ value, suffix, label, icon: Icon }: { value: number; suffix?: string; label: string; icon: any }) {
  const { n, ref } = useCounter(value);
  return (
    <div className="group relative overflow-hidden border border-border bg-card p-8">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/30" />
      <Icon className="mb-4 h-6 w-6 text-[color:var(--gold)]" />
      <div className="font-display text-5xl font-bold tracking-tight text-foreground">
        <span ref={ref}>{n.toLocaleString()}</span>{suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}

function Index() {
  useReveal();
  const navLinks = [
    ["About", "#about"], ["Programs", "#programs"], ["Coaches", "#coaches"],
    ["Stories", "#stories"], ["Gallery", "#gallery"],
    ["Schedule", "#schedule"], ["Membership", "#membership"], ["Apply", "#apply"], ["Contact", "#contact"],
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoImg} alt="ALI Boxing Club logo" width={40} height={40} className="h-10 w-10 object-contain drop-shadow-[0_2px_8px_rgba(220,38,38,0.4)]" />
            <span className="font-display text-lg tracking-wider">ALI <span className="text-[color:var(--gold)]">BOXING</span></span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map(([l, h]) => (
              <a key={h} href={h} className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-[color:var(--gold)]">{l}</a>
            ))}
          </nav>
          <a href="#apply" className="btn-fight btn-fight-hover text-sm">Join Now <ArrowRight className="h-4 w-4" /></a>
        </div>
      </header>

      {/* HERO — with video placeholder */}
      <section id="top" className="relative min-h-screen overflow-hidden pt-16">
        <div className="absolute inset-0">
          {/* Video placeholder — drop your training/fight reel at /hero.mp4 (public/) or update src */}
          <video
            className="h-full w-full object-cover opacity-60 animate-kenburns"
            autoPlay muted loop playsInline
            poster={heroImg}
          >
            {/* <source src="/hero.mp4" type="video/mp4" /> */}
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          {/* Faint punching bag silhouette placeholder */}
          <div className="pointer-events-none absolute right-6 top-1/3 hidden h-64 w-24 animate-float-slow rounded-b-full bg-gradient-to-b from-primary/20 to-transparent blur-md lg:block" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
          <div className="animate-reveal-up">
            <div className="mb-6 inline-flex items-center gap-2 border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
              <Flame className="h-3 w-3" /> Since 2014 · 120+ Medals
            </div>
            <h1 className="font-display text-6xl font-bold leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
              Train Like<br />a <span className="text-gradient-gold">Champion</span>.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              From your first jab to the world stage — ALI Boxing Club builds fighters. Kids, women, amateurs and pros welcome.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#apply" className="btn-fight btn-fight-hover animate-glow-pulse">🥊 Join Now</a>
              <a href="#book" className="btn-ghost-gold btn-ghost-gold-hover">📅 Book a Free Class</a>
              <a href="#donate" className="btn-ghost-gold btn-ghost-gold-hover"><Heart className="h-4 w-4" /> Donate</a>
              <a href="#membership" className="btn-ghost-gold btn-ghost-gold-hover"><Trophy className="h-4 w-4" /> Become a Member</a>
            </div>
            <div className="mt-12 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> 47 members training now</div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 rotate-90 font-display text-[10rem] font-bold tracking-tighter text-white/[0.03]">FIGHT</div>
            {/* Floating logo mark */}
            <img src={logoImg} alt="" aria-hidden className="mx-auto h-72 w-72 animate-float-slow object-contain opacity-90 drop-shadow-[0_20px_60px_rgba(220,38,38,0.35)]" />
          </div>
        </div>
      </section>


      {/* MARQUEE */}
      <div className="relative overflow-hidden border-y border-border bg-primary py-5">
        <div className="animate-ticker flex whitespace-nowrap font-display text-2xl uppercase tracking-widest text-primary-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 px-4">
              {["Discipline", "Power", "Speed", "Heart", "Precision", "Respect", "Grit", "Victory"].map((w) => (
                <span key={w} className="flex items-center gap-8">
                  {w} <span className="text-[color:var(--gold)]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img src={glovesImg} alt="Red boxing gloves" width={1200} height={900} loading="lazy" className="diag-slice h-[520px] w-full object-cover" />
            <div className="absolute -bottom-6 -right-6 hidden border border-[color:var(--gold)] bg-background p-6 lg:block">
              <div className="font-display text-5xl text-[color:var(--gold)]">10+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Years of<br />Excellence</div>
            </div>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">— Our Story</div>
            <h2 className="font-display text-5xl leading-tight sm:text-6xl">Where <span className="text-gradient-gold">Fighters</span><br /> Are Forged.</h2>
            <p className="mt-6 text-muted-foreground">
              Founded by former national champion coaches, ALI Boxing Club is more than a gym — it's a family of fighters, mentors, and community leaders committed to building character through the sweet science.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Certified Coaches", "USA Boxing & IBA licensed staff"],
                ["World-Class Ring", "Full-size competition ring & 12 heavy bags"],
                ["Youth Development", "Scholarships for underserved kids"],
                ["Proven Results", "3 national champions in 2025"],
              ].map(([t, d]) => (
                <div key={t} className="border-l-2 border-primary pl-4">
                  <div className="font-display text-sm uppercase tracking-wider">{t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-24 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Stat value={1000} suffix="+" label="Active Members" icon={Users} />
          <Stat value={120} suffix="+" label="Medals Won" icon={Trophy} />
          <Stat value={18} label="Certified Coaches" icon={Star} />
          <Stat value={10} suffix="+" label="Years of Excellence" icon={Flame} />
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="border-t border-border bg-card/30 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">— Training Programs</div>
              <h2 className="font-display text-5xl sm:text-6xl">Pick Your <span className="text-gradient-gold">Fight</span>.</h2>
            </div>
            <p className="max-w-md text-muted-foreground">Seven programs built for every level — from a 6-year-old's first jab to a pro's title camp.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { img: kidsImg, title: "Kids Boxing", age: "Ages 6–12", fee: "$79/mo", coach: "Coach Marcus", schedule: "Mon · Wed · Fri · 5PM" },
              { img: womenImg, title: "Women's Boxing", age: "All Levels", fee: "$99/mo", coach: "Coach Elena", schedule: "Tue · Thu · Sat · 6PM" },
              { img: proImg, title: "Professional", age: "By invitation", fee: "Custom", coach: "Coach Diego", schedule: "Daily · 7AM & 6PM" },
              { img: kidsImg, title: "Youth Boxing", age: "Ages 13–17", fee: "$89/mo", coach: "Coach Marcus", schedule: "Mon · Wed · Fri · 6PM" },
              { img: womenImg, title: "Boxing Fitness", age: "All Levels", fee: "$69/mo", coach: "Coach Elena", schedule: "Daily · 12PM" },
              { img: proImg, title: "Amateur / Competition", age: "16+", fee: "$149/mo", coach: "Coach Diego", schedule: "Tue · Thu · Sat · 7PM" },
            ].map((p) => (
              <div key={p.title} className="group relative overflow-hidden border border-border bg-background transition-all hover:border-primary/60">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.title} width={1000} height={1200} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute right-4 top-4 border border-[color:var(--gold)]/60 bg-background/70 px-2 py-1 text-[10px] uppercase tracking-widest text-[color:var(--gold)] backdrop-blur">{p.age}</div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-3xl">{p.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-widest text-muted-foreground">
                      <span>{p.coach}</span><span className="text-[color:var(--gold)]">{p.fee}</span>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{p.schedule}</div>
                  </div>
                </div>
                <a href="#book" className="flex items-center justify-between border-t border-border px-6 py-4 text-xs uppercase tracking-widest transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  Book Class <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section id="coaches" className="mx-auto max-w-7xl px-6 py-32">
        <div className="mb-16 text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">— Meet The Coaches</div>
          <h2 className="font-display text-5xl sm:text-6xl">Cornermen. <span className="text-gradient-gold">Champions.</span></h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { img: coach1, name: "Marcus 'Iron' Johnson", role: "Head Coach", years: "22 yrs", bio: "Former USA Boxing national coach, developed 8 Golden Gloves champions." },
            { img: coach2, name: "Diego Ramirez", role: "Pro & Amateur Lead", years: "18 yrs", bio: "Ex-WBC ranked lightweight, corner for 3 world title fights." },
            { img: coach3, name: "Elena Vasquez", role: "Women's & Fitness", role2: "", years: "12 yrs", bio: "IBA certified, national silver medalist, mother of two fighters." },
          ].map((c) => (
            <div key={c.name} className="group relative overflow-hidden border border-border bg-card">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.name} width={800} height={1000} loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-2xl">{c.name}</h3>
                    <div className="mt-1 text-xs uppercase tracking-widest text-[color:var(--gold)]">{c.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl">{c.years}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">experience</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{c.bio}</p>
                <a href="#book" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--gold)] hover:underline">
                  Book with this coach <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHAMPION / BACKGROUND STORIES */}
      <section id="stories" className="relative overflow-hidden border-t border-border bg-gradient-to-b from-background via-card/30 to-background py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div className="absolute -left-20 top-10 font-display text-[22rem] leading-none tracking-tighter">GRIT</div>
          <div className="absolute -right-10 bottom-0 font-display text-[18rem] leading-none tracking-tighter text-[color:var(--gold)]">GLORY</div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="reveal mb-16 max-w-3xl">
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">— Champion Stories</div>
            <h2 className="font-display text-5xl sm:text-6xl">From <span className="text-gradient-gold">Nothing</span> to the Ring.</h2>
            <p className="mt-4 text-muted-foreground">
              Every belt starts with a background story. These are the fighters who walked through our doors — and walked out champions.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Amir 'The Storm' Khan", from: "Street kid, age 11", to: "Junior National Gold 2024", years: "6 yrs at ALI",
                quote: "I had nothing but anger. Coach turned it into a jab. Now I'm ranked #1 in my weight class.", img: proImg },
              { name: "Layla Ahmed", from: "Single mom, office worker", to: "State Champion 2025", years: "3 yrs at ALI",
                quote: "Women's boxing gave me back my body and my confidence. I fight for every woman who ever felt small.", img: womenImg },
              { name: "Marco 'Kid' Diaz", from: "Bullied at school, age 8", to: "Silver Gloves finalist", years: "4 yrs at ALI",
                quote: "The bullies stopped after month one. Not because I fought — because I stopped being afraid.", img: kidsImg },
              { name: "Jamal 'Bomber' Reid", from: "Warehouse worker", to: "Pro debut 4-0 KO", years: "5 yrs at ALI",
                quote: "I was sparring on lunch breaks. Now I'm on Friday night cards. This gym is my second family.", img: coach1 },
              { name: "Priya Nair", from: "College student", to: "Regional Amateur Champion", years: "2 yrs at ALI",
                quote: "Elena believed in me before I did. That's the ALI difference — they see the fighter first.", img: coach3 },
              { name: "Big Tony", from: "Recovering, age 45", to: "Masters Division Bronze", years: "3 yrs at ALI",
                quote: "Boxing saved my life. Literally. The bag doesn't judge — it just makes you honest.", img: coach2 },
            ].map((s, i) => (
              <article
                key={s.name}
                className="reveal group relative flex flex-col overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)]/60 hover:shadow-[0_20px_60px_-20px_var(--blood)]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.name} loading="lazy" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  <div className="absolute left-4 top-4 border border-[color:var(--gold)]/60 bg-background/70 px-2 py-1 text-[10px] uppercase tracking-widest text-[color:var(--gold)] backdrop-blur">{s.years}</div>
                  <Quote className="absolute right-4 top-4 h-6 w-6 text-[color:var(--gold)]/60" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl">{s.name}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest">
                    <span className="text-muted-foreground">{s.from}</span>
                    <ArrowRight className="h-3 w-3 text-[color:var(--gold)]" />
                    <span className="text-[color:var(--gold)]">{s.to}</span>
                  </div>
                  <p className="mt-4 flex-1 text-sm italic text-muted-foreground">"{s.quote}"</p>
                  <a href="#apply" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--gold)] transition-transform hover:translate-x-1">
                    Write your story <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}

      <section id="schedule" className="border-y border-border bg-card/30 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">— Weekly Schedule</div>
              <h2 className="font-display text-5xl sm:text-6xl">This Week's <span className="text-gradient-gold">Rounds</span>.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["All", "Kids", "Adults", "Women", "Elite", "Fitness"].map((f, i) => (
                <button key={f} className={`border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${i === 0 ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"}`}>{f}</button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto border border-border">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="border-b border-border bg-background">
                  {["Time", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((h) => (
                    <th key={h} className="p-4 text-left font-display text-xs uppercase tracking-widest text-muted-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["7:00 AM", "Pro Camp", "Fitness", "Pro Camp", "Fitness", "Pro Camp", "Open Gym"],
                  ["12:00 PM", "Fitness", "Fitness", "Fitness", "Fitness", "Fitness", "Fitness"],
                  ["5:00 PM", "Kids", "Youth", "Kids", "Youth", "Kids", "Kids"],
                  ["6:00 PM", "Youth", "Women", "Youth", "Women", "Youth", "Women"],
                  ["7:00 PM", "Amateur", "Amateur", "Amateur", "Amateur", "Sparring", "Sparring"],
                ].map((row, ri) => (
                  <tr key={ri} className="border-b border-border last:border-0 hover:bg-primary/5">
                    {row.map((cell, ci) => (
                      <td key={ci} className={`p-4 ${ci === 0 ? "font-display text-[color:var(--gold)]" : "text-muted-foreground"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section id="membership" className="mx-auto max-w-7xl px-6 py-32">
        <div className="mb-16 text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">— Membership</div>
          <h2 className="font-display text-5xl sm:text-6xl">Choose Your <span className="text-gradient-gold">Weight Class</span>.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { name: "Beginner", price: 79, tag: "Get Started", features: ["3 sessions per week", "Group classes", "Gym access", "Beginner curriculum"] },
            { name: "Warrior", price: 129, tag: "Most Popular", featured: true, features: ["Unlimited training", "All group classes", "Sparring nights", "Progress tracking", "Guest passes (2/mo)"] },
            { name: "Champion", price: 249, tag: "Elite", features: ["Everything in Warrior", "Personal head coach", "Nutrition plan", "Competition prep", "Video film review", "Priority ring time"] },
          ].map((p) => (
            <div key={p.name} className={`relative border p-8 ${p.featured ? "border-[color:var(--gold)] bg-gradient-to-b from-primary/10 to-transparent" : "border-border bg-card"}`}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[color:var(--gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-background">Most Popular</div>
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
              <a href="#book" className={`mt-8 block w-full text-center ${p.featured ? "btn-fight btn-fight-hover" : "btn-ghost-gold btn-ghost-gold-hover"}`}>
                Choose {p.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* EVENT + DONATE */}
      <section id="donate" className="border-y border-border bg-gradient-to-br from-primary/20 via-background to-background py-32">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">— Next Event</div>
            <h2 className="font-display text-5xl sm:text-6xl">Fight Night <span className="text-gradient-gold">XII</span></h2>
            <p className="mt-4 text-muted-foreground">March 22 · 7:00 PM · ALI Arena — 8 amateur bouts, live music, food trucks.</p>
            <Countdown targetDays={38} />
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className="btn-fight btn-fight-hover">🎟 Reserve Tickets</a>
              <a href="#contact" className="btn-ghost-gold btn-ghost-gold-hover"><MapPin className="h-4 w-4" /> Directions</a>
            </div>
          </div>
          <div className="border border-[color:var(--gold)]/30 bg-card p-8">
            <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
              <Heart className="h-4 w-4" /> — Support the Next Champion
            </div>
            <h3 className="font-display text-3xl">Donate to Youth Scholarships</h3>
            <p className="mt-3 text-sm text-muted-foreground">100% of donations fund equipment, competition travel, and free training for underserved kids.</p>
            <div className="mt-6">
              <div className="mb-2 flex justify-between text-xs uppercase tracking-widest text-muted-foreground">
                <span>Raised: $18,420</span><span>Goal: $25,000</span>
              </div>
              <div className="h-2 overflow-hidden bg-secondary">
                <div className="h-full bg-gradient-to-r from-primary to-[color:var(--gold)]" style={{ width: "73%" }} />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[25, 50, 100, 250].map((v) => (
                <a
                  key={v}
                  href={waLink(`Hi ALI Boxing Club — I'd like to donate $${v} to youth scholarships. Please share payment details.`)}
                  target="_blank" rel="noreferrer"
                  className="border border-border bg-background px-4 py-3 font-display text-lg transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
                >${v}</a>
              ))}
              <a
                href={waLink("Hi ALI Boxing Club — I want to donate to the youth scholarship fund. What are the ways to give?")}
                target="_blank" rel="noreferrer"
                className="btn-fight btn-fight-hover"
              ><Heart className="h-4 w-4" /> Donate via WhatsApp</a>
              <a
                href={COACH_TEL}
                className="btn-ghost-gold btn-ghost-gold-hover"
              ><Phone className="h-4 w-4" /> Call Coach {COACH_PHONE}</a>
            </div>

            {/* MTN MoMo donation panel */}
            <div className="mt-6 border border-[#FFCC00]/40 bg-[#FFCC00]/5 p-5">
              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#FFCC00]">
                <span className="inline-flex h-5 items-center justify-center bg-[#FFCC00] px-2 text-[10px] font-bold text-black">MTN</span>
                Mobile Money — Donate Instantly
              </div>
              <p className="text-sm text-muted-foreground">
                Send directly to Coach via MTN MoMo. Dial the USSD code or use the number below.
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <div className="border border-border bg-background px-4 py-3">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">MoMo Number</div>
                  <div className="font-display text-lg text-[color:var(--gold)]">0788 750 321</div>
                </div>
                <div className="border border-border bg-background px-4 py-3">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">USSD Shortcut</div>
                  <div className="font-display text-lg text-[color:var(--gold)]">*182*1*1*0788750321#</div>
                </div>
              </div>
              <a
                href={`ussd:${encodeURIComponent("*182*1*1*0788750321#")}`}
                className="mt-3 inline-flex items-center gap-2 border border-[#FFCC00]/60 bg-[#FFCC00]/10 px-4 py-2 text-xs uppercase tracking-widest text-[#FFCC00] transition-colors hover:bg-[#FFCC00] hover:text-black"
              >Open MoMo dialer</a>
            </div>


          </div>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="mx-auto max-w-7xl px-6 py-32">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">— Shop</div>
            <h2 className="font-display text-5xl sm:text-6xl">Gear Up.</h2>
          </div>
          <a href="#" className="text-xs uppercase tracking-widest text-[color:var(--gold)] hover:underline">View all →</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "ALI Signature Gloves", price: 129, img: glovesImg },
            { name: "Hand Wraps (Pair)", price: 19, img: kidsImg },
            { name: "Club Hoodie", price: 65, img: coach1 },
            { name: "Training Shorts", price: 49, img: proImg },
          ].map((p) => (
            <div key={p.name} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden border border-border bg-card">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <button className="absolute inset-x-4 bottom-4 translate-y-4 border border-[color:var(--gold)] bg-background/80 py-2 text-xs uppercase tracking-widest text-[color:var(--gold)] opacity-0 backdrop-blur transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <ShoppingBag className="mr-2 inline h-3 w-3" /> Add to Cart
                </button>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">{p.name}</span>
                <span className="font-display text-[color:var(--gold)]">${p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY — 200 image placeholders + 12 video placeholders */}
      <Gallery />

      {/* TESTIMONIALS */}

      <section className="border-t border-border bg-card/30 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">— Voices from the Ring</div>
            <h2 className="font-display text-5xl sm:text-6xl">What Our <span className="text-gradient-gold">Fighters</span> Say.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { q: "My son walked in shy, walked out a Golden Gloves finalist. Coach Marcus is the real deal.", n: "Angela P.", r: "Parent" },
              { q: "Best gym in the city. The energy, the coaching, the community — nothing compares.", n: "David K.", r: "Amateur, 3-1" },
              { q: "Elena's women's class rebuilt my confidence more than any therapist ever did.", n: "Sara M.", r: "Member since 2022" },
            ].map((t, i) => (
              <div key={i} className="border border-border bg-background p-8">
                <div className="mb-4 flex text-[color:var(--gold)]">{"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}</div>
                <p className="text-muted-foreground">"{t.q}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="font-display text-sm uppercase tracking-wider">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY — sends via WhatsApp */}
      <ApplyWhatsApp />

      {/* BOOK + CONTACT */}

      <section id="book" className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <div id="contact">
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">— Book / Contact</div>
            <h2 className="font-display text-5xl sm:text-6xl">Step In The <span className="text-gradient-gold">Ring</span>.</h2>
            <p className="mt-4 text-muted-foreground">Book your free first class or drop us a line. We answer within 24 hours.</p>
            <div className="mt-10 space-y-5 text-sm">
              <div className="flex items-center gap-4"><MapPin className="h-5 w-5 text-[color:var(--gold)]" /> 1420 Champion Way, Boston, MA 02118</div>
              <div className="flex items-center gap-4"><Phone className="h-5 w-5 text-[color:var(--gold)]" /> (617) 555-JABS</div>
              <div className="flex items-center gap-4"><Mail className="h-5 w-5 text-[color:var(--gold)]" /> hello@aliboxingclub.com</div>
              <div className="flex items-center gap-4"><Calendar className="h-5 w-5 text-[color:var(--gold)]" /> Mon–Sat · 6AM – 10PM</div>
            </div>
            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, Youtube].map((I, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center border border-border transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"><I className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
          <form className="border border-border bg-card p-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input placeholder="Full name" className="border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-[color:var(--gold)]" />
              <input placeholder="Email" type="email" className="border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-[color:var(--gold)]" />
            </div>
            <select className="mt-4 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]">
              <option>Program of interest…</option>
              <option>Kids Boxing</option><option>Youth Boxing</option><option>Women's Boxing</option>
              <option>Amateur / Competition</option><option>Boxing Fitness</option><option>Private Coaching</option>
            </select>
            <input type="date" className="mt-4 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]" />
            <textarea placeholder="Tell us your goals…" rows={4} className="mt-4 w-full border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-[color:var(--gold)]" />
            <button type="submit" className="btn-fight btn-fight-hover mt-6 w-full">Book My Free Class <ArrowRight className="h-4 w-4" /></button>
            <p className="mt-3 text-center text-xs text-muted-foreground">No card required · 60-minute session</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center bg-primary font-display text-lg font-bold text-primary-foreground">A</span>
              <span className="font-display text-lg tracking-wider">ALI <span className="text-[color:var(--gold)]">BOXING</span></span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">Building champions inside and outside the ring since 2014.</p>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Train</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#programs" className="hover:text-foreground">Programs</a></li>
              <li><a href="#schedule" className="hover:text-foreground">Schedule</a></li>
              <li><a href="#membership" className="hover:text-foreground">Membership</a></li>
              <li><a href="#book" className="hover:text-foreground">Book a class</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Club</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">About</a></li>
              <li><a href="#coaches" className="hover:text-foreground">Coaches</a></li>
              <li><a href="#shop" className="hover:text-foreground">Shop</a></li>
              <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} ALI Boxing Club. All rights reserved.</div>
            <div>Train hard. Fight smart. Live proud.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Countdown({ targetDays }: { targetDays: number }) {
  const [target] = useState(() => Date.now() + targetDays * 86400000);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return (
    <div className="mt-8 grid grid-cols-4 gap-3">
      {[["Days", d], ["Hours", h], ["Min", m], ["Sec", s]].map(([l, v]) => (
        <div key={l} className="border border-border bg-background/50 p-4 text-center backdrop-blur">
          <div className="font-display text-4xl text-[color:var(--gold)] tabular-nums">{String(v).padStart(2, "0")}</div>
          <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
        </div>
      ))}
    </div>
  );
}

/* -------------------- GALLERY -------------------- */
function Gallery() {
  const [tab, setTab] = useState<"photos" | "videos">("photos");
  const [visible, setVisible] = useState(40);
  const photos = Array.from({ length: 200 }, (_, i) => i + 1);
  const videos = Array.from({ length: 12 }, (_, i) => i + 1);

  // Rotating gradient palette so 200 placeholders don't look identical
  const palette = [
    "from-primary/40 via-background to-[color:var(--gold)]/20",
    "from-[color:var(--gold)]/30 via-background to-primary/30",
    "from-primary/50 via-background to-background",
    "from-background via-primary/20 to-[color:var(--gold)]/30",
    "from-[color:var(--gold)]/20 via-card to-primary/40",
    "from-primary/30 via-card to-background",
  ];

  return (
    <section id="gallery" className="border-t border-border bg-background py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">— Gallery</div>
            <h2 className="font-display text-5xl sm:text-6xl">Inside The <span className="text-gradient-gold">Gym</span>.</h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              200 fight moments · 12 highlight reels. Placeholders — swap them with your real photos & videos.
            </p>
          </div>
          <div className="inline-flex border border-border">
            <button
              onClick={() => setTab("photos")}
              className={`flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-widest transition-colors ${tab === "photos" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-[color:var(--gold)]"}`}
            >
              <ImageIcon className="h-4 w-4" /> Photos · 200
            </button>
            <button
              onClick={() => setTab("videos")}
              className={`flex items-center gap-2 border-l border-border px-5 py-2 text-xs uppercase tracking-widest transition-colors ${tab === "videos" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-[color:var(--gold)]"}`}
            >
              <VideoIcon className="h-4 w-4" /> Videos · 12
            </button>
          </div>
        </div>

        {tab === "photos" ? (
          <>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {photos.slice(0, visible).map((n) => (
                <figure
                  key={n}
                  className={`reveal group relative aspect-square overflow-hidden border border-border bg-gradient-to-br ${palette[n % palette.length]}`}
                  style={{ transitionDelay: `${(n % 12) * 40}ms` }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-60 transition-opacity group-hover:opacity-100">
                    <ImageIcon className="h-6 w-6 text-[color:var(--gold)]/70" />
                    <span className="mt-2 font-display text-xs uppercase tracking-widest text-muted-foreground">Photo {String(n).padStart(3, "0")}</span>
                  </div>
                  <div className="absolute inset-0 translate-y-full bg-background/70 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0" />
                  <div className="absolute inset-0 flex items-end justify-between p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-display text-lg text-[color:var(--gold)]">#{String(n).padStart(3, "0")}</span>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Replace me</span>
                  </div>
                </figure>
              ))}
            </div>
            {visible < photos.length && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setVisible((v) => Math.min(v + 40, photos.length))}
                  className="btn-ghost-gold btn-ghost-gold-hover"
                >
                  Load more ({photos.length - visible} left)
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((n) => (
              <figure
                key={n}
                className="reveal group relative aspect-video overflow-hidden border border-border bg-gradient-to-br from-primary/30 via-background to-[color:var(--gold)]/20"
                style={{ transitionDelay: `${n * 60}ms` }}
              >
                <div className="absolute inset-0 shimmer-bg opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full border border-[color:var(--gold)] bg-background/70 backdrop-blur transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary">
                    <Play className="h-6 w-6 translate-x-0.5 text-[color:var(--gold)] transition-colors group-hover:text-primary-foreground" />
                  </div>
                  <span className="mt-4 font-display text-lg uppercase tracking-widest">Video {String(n).padStart(2, "0")}</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Drop your MP4 here</span>
                </div>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* -------------------- APPLY VIA WHATSAPP -------------------- */
function ApplyWhatsApp() {
  const [form, setForm] = useState({
    name: "", age: "", phone: "", program: "Kids Boxing", experience: "Beginner", goal: "",
  });

  const buildMsg = () =>
    `🥊 *NEW APPLICATION — ALI Boxing Club*\n\n` +
    `👤 Name: ${form.name || "-"}\n` +
    `🎂 Age: ${form.age || "-"}\n` +
    `📞 Phone: ${form.phone || "-"}\n` +
    `🎯 Program: ${form.program}\n` +
    `📈 Experience: ${form.experience}\n` +
    `💬 Goal: ${form.goal || "-"}\n\n` +
    `Sent from aliboxingclub.com`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink(buildMsg()), "_blank", "noopener,noreferrer");
  };

  const input = "w-full border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-[color:var(--gold)] transition-colors";

  return (
    <section id="apply" className="relative overflow-hidden border-y border-border bg-gradient-to-br from-[#25D366]/10 via-background to-primary/10 py-32">
      <div className="pointer-events-none absolute -right-24 top-10 hidden opacity-10 lg:block">
        <MessageCircle className="h-96 w-96 text-[#25D366]" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5">
        <div className="reveal lg:col-span-2">
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#25D366]">
            <MessageCircle className="h-4 w-4" /> — Apply via WhatsApp
          </div>
          <h2 className="font-display text-5xl sm:text-6xl">One <span className="text-gradient-gold">Message</span><br />Away.</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Fill this out and we'll open WhatsApp with your application pre-filled. A coach replies within minutes during gym hours.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "No account needed — just WhatsApp",
              "Direct reply from a real coach",
              "Free 60-minute trial class",
              "Family & scholarship options available",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" /> {f}
              </li>
            ))}
          </ul>
          <a
            href={waLink("Hi ALI Boxing Club! I'd like more info about training.")}
            target="_blank" rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-[#25D366]/60 bg-[#25D366]/10 px-5 py-3 font-display text-sm uppercase tracking-widest text-[#25D366] transition-all hover:bg-[#25D366] hover:text-background"
          >
            <MessageCircle className="h-4 w-4" /> Chat with a Coach
          </a>
          <a
            href={COACH_TEL}
            className="mt-3 ml-0 inline-flex items-center gap-2 border border-[color:var(--gold)]/60 bg-[color:var(--gold)]/10 px-5 py-3 font-display text-sm uppercase tracking-widest text-[color:var(--gold)] transition-all hover:bg-[color:var(--gold)] hover:text-background sm:ml-3"
          >
            <Phone className="h-4 w-4" /> Call {COACH_PHONE}
          </a>
        </div>
        <form onSubmit={onSubmit} className="reveal border border-border bg-card p-8 lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Full name" className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required placeholder="Age" type="number" min={5} max={80} className={input} value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
          </div>
          <input required placeholder="Your phone (with country code)" className={`${input} mt-4`} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <select className={input} value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })}>
              {["Kids Boxing", "Youth Boxing", "Women's Boxing", "Amateur / Competition", "Boxing Fitness", "Professional", "Private Coaching"].map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
            <select className={input} value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })}>
              {["Beginner", "Some experience", "Amateur", "Professional"].map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
          <textarea rows={4} placeholder="What's your goal? (fitness, competition, self-defense…)" className={`${input} mt-4`} value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} />
          <button type="submit" className="btn-fight btn-fight-hover mt-6 flex w-full items-center justify-center gap-2 animate-glow-pulse">
            <MessageCircle className="h-4 w-4" /> Send Application via WhatsApp <Send className="h-4 w-4" />
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Opens WhatsApp in a new tab. We reply personally within 24h.
          </p>
        </form>
      </div>
    </section>
  );
}

