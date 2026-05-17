export type ArchiveItem = {
  id: string;
  src: string;
  caption: string;
  aspect: "tall" | "wide";
  width: number;
  height: number;
};

export const archiveItems: ArchiveItem[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
    caption: "Timeline 70 · 2025 · Personal",
    aspect: "tall",
    width: 450,
    height: 800,
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=80",
    caption: "City Lights · 2024 · Practice reel",
    aspect: "wide",
    width: 900,
    height: 506,
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1574267432644-f6105fc8a0b3?w=600&q=80",
    caption: "First Cut · 2024 · Local promo",
    aspect: "tall",
    width: 450,
    height: 800,
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1594909127802-573f457b6c3a?w=900&q=80",
    caption: "BTS · 2024 · Learning shoot",
    aspect: "wide",
    width: 900,
    height: 506,
  },
];
