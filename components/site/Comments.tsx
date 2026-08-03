import CommentSection from "@/components/CommentSection";

export default function Comments() {
  return (
    <section className="border-t border-border bg-background py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">
            — Leave a Comment
          </div>
          <h2 className="font-display text-4xl sm:text-5xl">
            Share Your <span className="text-gradient-gold">Thoughts</span>.
          </h2>
        </div>
        <CommentSection />
      </div>
    </section>
  );
}
