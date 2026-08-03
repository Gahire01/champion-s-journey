export type FighterRecord = {
  wins: number;
  losses: number;
  draws: number;
  kos: number;
};

export type Fighter = {
  name: string;
  nickname: string;
  weightClass: string;
  age: number;
  height: string;
  reach: string;
  stance: "Orthodox" | "Southpaw" | "Switch";
  record: FighterRecord;
  image: string;
  note: string;
};

export const fighters: Fighter[] = [
  {
    name: "Amir Khan",
    nickname: "The Storm",
    weightClass: "Featherweight",
    age: 24,
    height: "5' 9\"",
    reach: '70"',
    stance: "Orthodox",
    record: { wins: 18, losses: 2, draws: 0, kos: 12 },
    image: "/IMG-20260727-WA0060.jpg",
    note: "Junior National Gold 2024 · ranked #1 in class",
  },
  {
    name: "Jamal Reid",
    nickname: "The Bomber",
    weightClass: "Middleweight",
    age: 28,
    height: "6' 1\"",
    reach: '75"',
    stance: "Southpaw",
    record: { wins: 4, losses: 0, draws: 0, kos: 4 },
    image: "/IMG-20260727-WA0041.jpg",
    note: "Undefeated pro debut · all wins by KO",
  },
  {
    name: "Layla Ahmed",
    nickname: "The Finisher",
    weightClass: "Lightweight",
    age: 26,
    height: "5' 6\"",
    reach: '66"',
    stance: "Orthodox",
    record: { wins: 10, losses: 1, draws: 0, kos: 6 },
    image: "/IMG-20260727-WA0050.jpg",
    note: "State Champion 2025 · 2x Golden Gloves",
  },
  {
    name: "Marco Diaz",
    nickname: "Kid",
    weightClass: "Flyweight",
    age: 19,
    height: "5' 4\"",
    reach: '64"',
    stance: "Orthodox",
    record: { wins: 22, losses: 3, draws: 0, kos: 14 },
    image: "/IMG-20260727-WA0040.jpg",
    note: "Silver Gloves finalist · fastest hands in the club",
  },
  {
    name: "Priya Nair",
    nickname: "The Technician",
    weightClass: "Bantamweight",
    age: 22,
    height: "5' 5\"",
    reach: '65"',
    stance: "Southpaw",
    record: { wins: 8, losses: 2, draws: 0, kos: 3 },
    image: "/IMG-20260727-WA0047.jpg",
    note: "Regional Amateur Champion · 2026",
  },
  {
    name: "Tony Grant",
    nickname: "Big Tony",
    weightClass: "Heavyweight",
    age: 46,
    height: "6' 3\"",
    reach: '79"',
    stance: "Orthodox",
    record: { wins: 15, losses: 6, draws: 1, kos: 11 },
    image: "/IMG-20260727-WA0067.jpg",
    note: "Masters Division Bronze · legend of the gym",
  },
];
