import { TIMELINE_38_SRC, TIMELINE_51_SRC, TIMELINE_70_SRC } from "@/lib/media";

export type ProjectCategory =
  | "All"
  | "Editorial"
  | "Cinematic"
  | "Commercial"
  | "Experimental";

export type Project = {
  id: string;
  title: string;
  client: string;
  category: Exclude<ProjectCategory, "All">;
  year: string;
  equipment?: string;
  collab?: string;
  accentColor: string;
  thumbnail?: string;
  video?: string;
  /** Use the .mov as the card visual (no stock thumbnail) */
  videoOnly?: boolean;
  /** Default grid aspect for this clip — 16/9 suits most timeline exports */
  preferredAspect?: "9/16" | "16/9";
  objectPosition?: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "TIMELINE 70",
    client: "Personal Project",
    category: "Cinematic",
    year: "2025",
    accentColor: "#FF3B00",
    video: TIMELINE_70_SRC,
    videoOnly: true,
    preferredAspect: "16/9",
    objectPosition: "center center",
  },
  {
    id: "02",
    title: "CITY LIGHTS",
    client: "Practice Shoot",
    category: "Experimental",
    year: "2024",
    accentColor: "#C8FF00",
    video: TIMELINE_51_SRC,
    videoOnly: true,
    preferredAspect: "16/9",
    objectPosition: "center center",
  },
  {
    id: "03",
    title: "FIRST CUT",
    client: "Local Business",
    category: "Commercial",
    year: "2024",
    accentColor: "#00FFD1",
    video: TIMELINE_38_SRC,
    videoOnly: true,
    preferredAspect: "16/9",
    objectPosition: "center center",
  },
];

export const FILTER_CATEGORIES: ProjectCategory[] = [
  "All",
  "Editorial",
  "Cinematic",
  "Commercial",
  "Experimental",
];
