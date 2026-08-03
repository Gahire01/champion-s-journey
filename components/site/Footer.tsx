import Image from "next/image";
import { logoImg } from "@/lib/images";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src={logoImg}
              alt="ALI Boxing Club"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-display text-lg tracking-wider">
              ALI <span className="text-[color:var(--gold)]">BOXING</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Building champions inside and outside the ring since 2014.
          </p>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
            Train
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#programs" className="hover:text-foreground">Programs</a></li>
            <li><a href="#schedule" className="hover:text-foreground">Schedule</a></li>
            <li><a href="#membership" className="hover:text-foreground">Membership</a></li>
            <li><a href="#book" className="hover:text-foreground">Book a class</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
            Club
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#coaches" className="hover:text-foreground">Coaches</a></li>
            <li><a href="#fighters" className="hover:text-foreground">Fighters</a></li>
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
  );
}
