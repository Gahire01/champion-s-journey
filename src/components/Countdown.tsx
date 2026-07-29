import { useState, useEffect } from "react";

export default function Countdown({ targetDays }: { targetDays: number }) {
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
