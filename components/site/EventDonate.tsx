import { Heart, MapPin, Phone } from "lucide-react";
import Countdown from "@/components/Countdown";
import { waLink, COACH_TEL, COACH_PHONE } from "@/lib/site";

export default function EventDonate() {
  return (
    <section id="donate" className="border-y border-border bg-gradient-to-br from-primary/20 via-background to-background py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
            — Next Event
          </div>
          <h2 className="font-display text-5xl sm:text-6xl">
            Fight Night <span className="text-gradient-gold">XII</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            March 22 · 7:00 PM · ALI Arena — 8 amateur bouts, live music, food trucks.
          </p>
          <Countdown targetDays={38} />
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#book" className="btn-fight btn-fight-hover">
              🎟 Reserve Tickets
            </a>
            <a href="#contact" className="btn-ghost-gold btn-ghost-gold-hover">
              <MapPin className="h-4 w-4" /> Directions
            </a>
          </div>
        </div>
        <div className="border border-[color:var(--gold)]/30 bg-card p-8">
          <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
            <Heart className="h-4 w-4" /> — Support the Next Champion
          </div>
          <h3 className="font-display text-3xl">Donate to Youth Scholarships</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            100% of donations fund equipment, competition travel, and free training for underserved
            kids.
          </p>
          <div className="mt-6">
            <div className="mb-2 flex justify-between text-xs uppercase tracking-widest text-muted-foreground">
              <span>Raised: $18,420</span>
              <span>Goal: $25,000</span>
            </div>
            <div className="h-2 overflow-hidden bg-secondary">
              <div
                className="h-full bg-gradient-to-r from-primary to-[color:var(--gold)]"
                style={{ width: "73%" }}
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {[25, 50, 100, 250].map((v) => (
              <a
                key={v}
                href={waLink(`Hi ALI Boxing Club — I'd like to donate $${v} to youth scholarships. Please share payment details.`)}
                target="_blank"
                rel="noreferrer"
                className="border border-border bg-background px-4 py-3 font-display text-lg transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              >
                ${v}
              </a>
            ))}
            <a
              href={waLink("Hi ALI Boxing Club — I want to donate to the youth scholarship fund. What are the ways to give?")}
              target="_blank"
              rel="noreferrer"
              className="btn-fight btn-fight-hover"
            >
              <Heart className="h-4 w-4" /> Donate via WhatsApp
            </a>
            <a href={COACH_TEL} className="btn-ghost-gold btn-ghost-gold-hover">
              <Phone className="h-4 w-4" /> Call Coach {COACH_PHONE}
            </a>
          </div>

          <div className="mt-6 border border-[#FFCC00]/40 bg-[#FFCC00]/5 p-5">
            <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#FFCC00]">
              <span className="inline-flex h-5 items-center justify-center bg-[#FFCC00] px-2 text-[10px] font-bold text-black">
                MTN
              </span>
              Mobile Money — Donate Instantly
            </div>
            <p className="text-sm text-muted-foreground">
              Send directly to Coach via MTN MoMo. Dial the USSD code or use the number below.
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <div className="border border-border bg-background px-4 py-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  MoMo Number
                </div>
                <div className="font-display text-lg text-[color:var(--gold)]">0788 750 321</div>
              </div>
              <div className="border border-border bg-background px-4 py-3">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  USSD Shortcut
                </div>
                <div className="font-display text-lg text-[color:var(--gold)]">
                  *182*1*1*0788750321#
                </div>
              </div>
            </div>
            <a
              href={`ussd:${encodeURIComponent("*182*1*1*0788750321#")}`}
              className="mt-3 inline-flex items-center gap-2 border border-[#FFCC00]/60 bg-[#FFCC00]/10 px-4 py-2 text-xs uppercase tracking-widest text-[#FFCC00] transition-colors hover:bg-[#FFCC00] hover:text-black"
            >
              Open MoMo dialer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
