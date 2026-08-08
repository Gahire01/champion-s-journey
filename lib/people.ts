export type Coach = {
  id: string;
  name: string;
  role: string;
  tier: "head" | "second" | "third";
  image: string;
  certificate?: { label: string; href: string };
};

export type Leader = {
  id: string;
  name: string;
  role: string;
};

export type Fighter = {
  id: string;
  name: string;
};

export type Member = {
  id: string;
  name: string;
};

export const coaches: Coach[] = [
  {
    id: "ali-semwaga",
    name: "Ali Semwaga",
    role: "Owner & Head Coach",
    tier: "head",
    image: "/coaches/ali-semwaga.jpg",
    certificate: {
      label: "IBA 1 Star Coaches Course",
      href: "/docs/iba-1-star-coach-certificate.pdf",
    },
  },
  {
    id: "havrimana-abdul",
    name: "Havrimana Abdul",
    role: "Second Coach",
    tier: "second",
    image: "/coaches/havrimana-abdul.jpg",
  },
  {
    id: "izabayo-placid",
    name: "Izabayo Placid",
    role: "Third Coach",
    tier: "third",
    image: "/coaches/izabayo-placid.jpg",
  },
];

export const leadership: Leader[] = [
  { id: "ali-semwaga", name: "Ali Semwaga", role: "Owner & Head Coach" },
  { id: "abdilillah-gahire", name: "Abdilillah Gahire", role: "Secretary" },
  { id: "havrimana-abdul", name: "Havrimana Abdul", role: "Second Coach" },
  { id: "izabayo-placid", name: "Izabayo Placid", role: "Third Coach" },
];

export const fighters: Fighter[] = [
  { id: "tuyishimire-jean-millioner", name: "Tuyishimire Jean Millioner" },
  { id: "iradukunda-sultan", name: "Iradukunda Sultan" },
  { id: "hakizimana-christian", name: "Hakizimana Christian" },
  { id: "arnould-ishimwe", name: "Arnould Ishimwe" },
  { id: "micyomyiza-yannick", name: "Micyomyiza Yannick" },
  { id: "karangwa-aime", name: "Karangwa Aime" },
  { id: "honore-swabuli", name: "Honore Swabuli" },
  { id: "nshimiyimana-phillipo", name: "Nshimiyimana Phillipo" },
  { id: "nshuti-gad", name: "Nshuti Gad" },
  { id: "gisubizo-aime", name: "Gisubizo Aime" },
  { id: "iyamuremy-yannick", name: "Iyamuremy Yannick" },
];

export const members: Member[] = [
  { id: "innocent-rugira", name: "Innocent Rugira" },
  { id: "andrew-amani", name: "Andrew Amani" },
  { id: "sebikamba-yosuf", name: "Sebikamba Yosuf" },
  { id: "amour-martial", name: "Amour Martial" },
  { id: "innocent-kayibanda", name: "Innocent Kayibanda" },
  { id: "munyadida-selemani", name: "Munyadida Selemani" },
  { id: "karangwa-amiable", name: "Karangwa Amiable" },
  { id: "mutesi-mar-rita", name: "Mutesi Mar Rita" },
  { id: "umuhonza-conni", name: "Umuhonza Conni" },
  { id: "rashidason", name: "Rashidason" },
];
