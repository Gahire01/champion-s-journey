"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site";
import { logoImg } from "@/lib/images";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = navLinks.map(([, href]) => href.slice(1)).filter(Boolean);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <Image
            src={logoImg}
            alt="ALI Boxing Club logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain drop-shadow-[0_2px_8px_rgba(220,38,38,0.4)]"
          />
          <span className="font-display text-lg tracking-wider">
            ALI <span className="text-[color:var(--gold)]">BOXING</span>
          </span>
        </a>
        <nav className="hidden items-center gap-4 xl:flex">
          {navLinks.map(([l, h]) => (
            <a
              key={h}
              href={h}
              className={`text-xs uppercase tracking-widest transition-colors ${
                active === h
                  ? "text-[color:var(--gold)]"
                  : "text-muted-foreground hover:text-[color:var(--gold)]"
              }`}
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#apply" className="btn-fight btn-fight-hover text-sm">
            Join Now <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center border border-border text-foreground transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] xl:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border/50 bg-background/95 backdrop-blur-xl xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navLinks.map(([l, h], i) => (
              <a
                key={h}
                href={h}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between border-b border-border/40 py-3 text-sm uppercase tracking-widest transition-colors last:border-0 hover:text-[color:var(--gold)] ${
                  active === h ? "text-[color:var(--gold)]" : "text-muted-foreground"
                }`}
              >
                {l}
                <span className="text-[10px] text-[color:var(--gold)]/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setMenuOpen(false)}
              className="btn-fight btn-fight-hover mt-4"
            >
              Join Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
