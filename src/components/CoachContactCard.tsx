import { Phone, MessageCircle, MapPin, ArrowRight, Flame } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { coach1 } from "@/lib/images";

const WHATSAPP_NUMBER = "250788750321";
const COACH_PHONE = "+250788750321";
const COACH_TEL = "tel:+250788750321";

const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const items = [
  { icon: Phone, label: "Call directly", value: COACH_PHONE, href: COACH_TEL, cta: "Tap to call" },
  { icon: MessageCircle, label: "WhatsApp", value: `+${WHATSAPP_NUMBER}`, href: waLink("Hello Coach, I'd like more info about ALI Boxing Club."), cta: "Message on WhatsApp" },
  { icon: MapPin, label: "Visit the gym", value: "ALI Boxing Club — Kigali, Rwanda", href: "https://maps.google.com/?q=Kigali+Rwanda+boxing", cta: "Open in Maps" },
];

export default function CoachContactCard() {
  useReveal();
  return (
    <section id="coach-contact" className="relative border-y border-border bg-gradient-to-b from-background via-card/40 to-background py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float-slow" />
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[color:var(--gold)]/15 blur-3xl animate-float-slow" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal mb-14 text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">— Reach The Coach</div>
          <h2 className="font-display text-5xl sm:text-6xl">Talk To <span className="text-gradient-gold">Coach</span> Directly.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Questions about training, schedule or membership? Skip the forms — call, message, or drop by the gym today.
          </p>
        </div>

        <div className="reveal relative overflow-hidden border border-border bg-card diag-slice">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_2fr]">
            <div className="relative flex flex-col justify-between gap-6 border-b border-border bg-gradient-to-br from-primary/20 via-background to-background p-10 lg:border-b-0 lg:border-r">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[color:var(--gold)]">
                  <Flame className="h-3 w-3" /> Head Coach · On Duty
                </div>
                <h3 className="font-display text-4xl leading-tight">Coach Ali <span className="text-gradient-gold">Semwaga</span></h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  22 years in the ring · Developed 8 Golden Gloves champions · Available 7 days a week.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={coach1} alt="Head Coach" className="h-20 w-20 rounded-full border-2 border-[color:var(--gold)] object-cover" />
                <div className="flex-1">
                  <div className="flex gap-1 text-[color:var(--gold)]">★</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">Trusted by 400+ fighters</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={COACH_TEL} className="btn-fight btn-fight-hover animate-glow-pulse">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a href={waLink("Hello Coach!")} target="_blank" rel="noopener" className="btn-ghost-gold btn-ghost-gold-hover">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="grid gap-px bg-border sm:grid-cols-3">
              {items.map(({ icon: Icon, label, value, href, cta }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                  className="group relative flex flex-col justify-between gap-6 bg-card p-8 transition-all duration-300 hover:bg-background"
                >
                  <div className="flex h-14 w-14 items-center justify-center border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/5 text-[color:var(--gold)] transition-transform duration-300 group-hover:scale-110 group-hover:border-[color:var(--gold)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</div>
                    <div className="mt-2 font-display text-xl leading-snug">{value}</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--gold)]">
                    {cta} <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-primary to-[color:var(--gold)] transition-transform duration-500 group-hover:scale-x-100" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-px border-t border-border bg-border text-center text-xs uppercase tracking-widest sm:grid-cols-3">
            <div className="bg-background/50 p-4"><span className="text-muted-foreground">Mon–Fri · </span><span className="text-[color:var(--gold)]">6AM – 9PM</span></div>
            <div className="bg-background/50 p-4"><span className="text-muted-foreground">Saturday · </span><span className="text-[color:var(--gold)]">7AM – 6PM</span></div>
            <div className="bg-background/50 p-4"><span className="text-muted-foreground">Sunday · </span><span className="text-[color:var(--gold)]">Private only</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
