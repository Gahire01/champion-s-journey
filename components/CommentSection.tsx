"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";

export default function CommentSection() {
  const [comments, setComments] = useLocalStorageState<{ name: string; text: string; date: string }[]>(
    "gallery-comments",
    [],
  );
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const addComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    const entry = { name: name.trim(), text: text.trim(), date: new Date().toLocaleDateString() };
    setComments([entry, ...comments]);
    setName("");
    setText("");
  };

  return (
    <div>
      <form onSubmit={addComment} className="mb-10 space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className="w-full border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-[color:var(--gold)]"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          rows={3}
          required
          className="w-full border border-input bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-[color:var(--gold)]"
        />
        <button type="submit" className="btn-fight btn-fight-hover">
          <MessageCircle className="mr-2 inline h-4 w-4" /> Post Comment
        </button>
      </form>
      <div className="space-y-4">
        {comments.length === 0 && (
          <p className="text-center text-sm text-muted-foreground">No comments yet. Be the first!</p>
        )}
        {comments.map((c, i) => (
          <div key={i} className="border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="font-display text-sm uppercase tracking-wider">{c.name}</span>
              <span className="text-[10px] text-muted-foreground">{c.date}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
