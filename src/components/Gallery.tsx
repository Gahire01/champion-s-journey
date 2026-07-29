import { useState, useCallback, useEffect } from "react";
import {
  Heart, Play, Image as ImageIcon, Video as VideoIcon,
  X, ChevronLeft, ChevronRight,
} from "lucide-react";
import { galleryImages, totalImages } from "@/lib/gallery-images";

export default function Gallery() {
  const [tab, setTab] = useState<"photos" | "videos">("photos");
  const [visible, setVisible] = useState(30);
  const [lightbox, setLightbox] = useState<{ list: string[]; index: number } | null>(null);
  const [likes, setLikes] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem("gallery-likes") || "{}");
    } catch { return {}; }
  });
  const [errored, setErrored] = useState<Set<string>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const videos = Array.from({ length: 12 }, (_, i) => i + 1);

  const toggleLike = useCallback((src: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLikes((prev) => {
      const next = { ...prev, [src]: !prev[src] };
      localStorage.setItem("gallery-likes", JSON.stringify(next));
      return next;
    });
  }, []);

  const openLightbox = useCallback((index: number) => {
    setLightbox({ list: galleryImages, index });
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setLightbox((prev) => prev ? { ...prev, index: (prev.index + 1) % prev.list.length } : null);
  }, []);

  const goPrev = useCallback(() => {
    setLightbox((prev) => prev ? { ...prev, index: (prev.index - 1 + prev.list.length) % prev.list.length } : null);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    if (!lightbox) return;
    const preload = (i: number) => {
      if (i < 0 || i >= lightbox.list.length) return;
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.as = "image";
      link.href = lightbox.list[i];
      document.head.appendChild(link);
    };
    preload(lightbox.index + 1);
    preload(lightbox.index - 1);
  }, [lightbox?.index, lightbox?.list]);

  return (
    <section id="gallery" className="border-t border-border bg-background py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">— Gallery</div>
            <h2 className="font-display text-5xl sm:text-6xl">Inside The <span className="text-gradient-gold">Gym</span>.</h2>
            <p className="mt-3 max-w-lg text-muted-foreground">
              {totalImages} fight moments · 12 highlight reels
            </p>
          </div>
          <div className="inline-flex border border-border">
            <button
              onClick={() => setTab("photos")}
              className={`flex items-center gap-2 px-5 py-2 text-xs uppercase tracking-widest transition-colors ${tab === "photos" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-[color:var(--gold)]"}`}
            >
              <ImageIcon className="h-4 w-4" /> Photos · {totalImages}
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
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {galleryImages.slice(0, visible).map((src, i) => {
                const liked = !!likes[src];
                const filename = src.split("/").pop() || "";
                return (
                  <figure
                    key={src}
                    className="reveal group relative aspect-square overflow-hidden border border-border bg-card cursor-pointer"
                    style={{ transitionDelay: `${(i % 12) * 40}ms` }}
                    onClick={() => openLightbox(i)}
                  >
                    {errored.has(src) ? (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-background to-[color:var(--gold)]/10">
                        <ImageIcon className="h-8 w-8 text-muted-foreground/40" />
                      </div>
                    ) : !loadedImages.has(src) ? (
                      <div className="h-full w-full animate-pulse bg-gradient-to-br from-card via-background to-card/50" />
                    ) : null}
                    <img
                      src={src}
                      alt={`Gallery ${filename}`}
                      loading="lazy"
                      decoding="async"
                      onLoad={() => setLoadedImages((prev) => new Set(prev).add(src))}
                      onError={() => setErrored((prev) => new Set(prev).add(src))}
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-110 ${loadedImages.has(src) ? "opacity-100" : "opacity-0"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <div className="flex items-center gap-2 rounded-full border border-white/30 bg-background/80 px-4 py-2 text-xs uppercase tracking-widest text-white backdrop-blur-sm">
                        <ImageIcon className="h-3 w-3" /> View
                      </div>
                    </div>
                    <button
                      onClick={(e) => toggleLike(src, e)}
                      className={`absolute bottom-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border bg-background/70 text-sm backdrop-blur-sm transition-all hover:scale-110 ${liked ? "border-red-500 text-red-500" : "border-white/40 text-white/70"}`}
                      aria-label={liked ? "Unlike" : "Like"}
                    >
                      <Heart className={`h-4 w-4 ${liked ? "fill-red-500" : ""}`} />
                    </button>
                    <div className="absolute left-2 top-2 rounded bg-background/70 px-2 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur-sm">
                      #{String(i + 1).padStart(3, "0")}
                    </div>
                  </figure>
                );
              })}
            </div>
            {visible < galleryImages.length && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setVisible((v) => Math.min(v + 30, galleryImages.length))}
                  className="btn-ghost-gold btn-ghost-gold-hover"
                >
                  Load more ({galleryImages.length - visible} left)
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

      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute left-4 top-4 z-10 rounded-full bg-black/50 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm">
            {lightbox.index + 1} / {lightbox.list.length}
          </div>
          <button
            onClick={(e) => toggleLike(lightbox.list[lightbox.index], e)}
            className={`absolute right-4 top-16 z-10 flex h-10 w-10 items-center justify-center rounded-full border bg-black/50 text-sm backdrop-blur-sm transition-all hover:scale-110 ${likes[lightbox.list[lightbox.index]] ? "border-red-500 text-red-500" : "border-white/20 text-white/70"}`}
          >
            <Heart className={`h-5 w-5 ${likes[lightbox.list[lightbox.index]] ? "fill-red-500" : ""}`} />
          </button>
          <div className="absolute left-4 top-14 z-10 rounded-full bg-black/50 px-4 py-2 text-xs font-medium text-white/60 backdrop-blur-sm">
            {Object.values(likes).filter(Boolean).length} liked
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:bg-white/20 sm:left-4"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          {errored.has(lightbox.list[lightbox.index]) ? (
            <div className="flex max-h-[90vh] max-w-[95vw] items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 via-background to-[color:var(--gold)]/10 p-20">
              <ImageIcon className="h-16 w-16 text-muted-foreground/30" />
            </div>
          ) : !loadedImages.has(lightbox.list[lightbox.index]) ? (
            <div className="flex max-h-[90vh] max-w-[95vw] items-center justify-center rounded-lg bg-card p-20">
              <div className="h-12 w-12 animate-spin rounded-full border-2 border-[color:var(--gold)] border-t-transparent" />
            </div>
          ) : (
            <img
              src={lightbox.list[lightbox.index]}
              alt={`Gallery ${lightbox.index + 1}`}
              decoding="async"
              className="max-h-[90vh] max-w-[95vw] object-contain"
              onClick={(e) => e.stopPropagation()}
              onLoad={() => setLoadedImages((prev) => new Set(prev).add(lightbox.list[lightbox.index]))}
              onError={() => setErrored((prev) => new Set(prev).add(lightbox.list[lightbox.index]))}
            />
          )}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:bg-white/20 sm:right-4"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
