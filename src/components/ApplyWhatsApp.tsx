import { useState } from "react";
import { Check, MessageCircle, Phone, Send } from "lucide-react";

const WHATSAPP_NUMBER = "250788750321";
const COACH_PHONE = "+250788750321";
const COACH_TEL = "tel:+250788750321";

const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const input = "w-full border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-[color:var(--gold)] transition-colors";

export default function ApplyWhatsApp() {
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
