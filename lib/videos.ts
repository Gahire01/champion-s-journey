export type VideoCategory = "match" | "session";

export type VideoItem = {
  id: string;
  title: string;
  category: VideoCategory;
  categoryLabel: string;
  src: string;
  poster: string;
};

export const videoCategories: { id: "all" | VideoCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "match", label: "Matches" },
  { id: "session", label: "Club Sessions" },
];

const poster = "/videos/cover.jpg";

export const videos: VideoItem[] = [
  {
    id: "match",
    title: "Match",
    category: "match",
    categoryLabel: "Match",
    src: "/videos/match.mp4",
    poster,
  },
  {
    id: "session-70917",
    title: "Club Session 1",
    category: "session",
    categoryLabel: "Club Session",
    src: "/videos/session-70917.mp4",
    poster,
  },
  {
    id: "session-70926",
    title: "Club Session 2",
    category: "session",
    categoryLabel: "Club Session",
    src: "/videos/session-70926.mp4",
    poster,
  },
  {
    id: "session-71207",
    title: "Club Session 3",
    category: "session",
    categoryLabel: "Club Session",
    src: "/videos/session-71207.mp4",
    poster,
  },
  {
    id: "session-71208",
    title: "Club Session 4",
    category: "session",
    categoryLabel: "Club Session",
    src: "/videos/session-71208.mp4",
    poster,
  },
  {
    id: "session-71208b",
    title: "Club Session 5",
    category: "session",
    categoryLabel: "Club Session",
    src: "/videos/session-71208b.mp4",
    poster,
  },
  {
    id: "session-71210",
    title: "Club Session 6",
    category: "session",
    categoryLabel: "Club Session",
    src: "/videos/session-71210.mp4",
    poster,
  },
];
