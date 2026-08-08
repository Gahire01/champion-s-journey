"use client";

import { useEffect } from "react";
import { Download, X } from "lucide-react";

type CertificateViewerProps = {
  label: string;
  href: string;
  open: boolean;
  onClose: () => void;
};

export default function CertificateViewer({ label, href, open, onClose }: CertificateViewerProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${label} certificate`}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative flex h-full w-full max-w-4xl flex-col overflow-hidden border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4">
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-widest text-[color:var(--gold)]">
              Certificate
            </div>
            <div className="truncate font-display text-lg">{label}</div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={href}
              download
              className="btn-fight btn-fight-hover inline-flex items-center gap-2 text-xs"
            >
              <Download className="h-3.5 w-3.5" /> Download
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate viewer"
              className="grid h-10 w-10 place-items-center border border-border text-muted-foreground transition-colors hover:border-[color:var(--gold)] hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="min-h-0 flex-1 bg-black">
          <iframe
            src={href}
            title={`${label} certificate`}
            className="h-full w-full"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
