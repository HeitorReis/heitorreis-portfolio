import type { HomepageSettings } from "@/types/domain";

export const defaultHomepageSettings: HomepageSettings = {
  id: 1,
  headline: "Heitor Reis turns engineering range into business impact.",
  subheadline:
    "Computer Engineering candidate building at the intersection of AI, business systems, healthtech, and low-level computing. Proven by Embraer automations that saved money, a Harvard Brazil Hackathon win, and product work that moves from prototype to measurable value.",
  heroImagePath: "hero-heitor-profile.jpg",
  showPhotoInHero: true,
  updatedAt: new Date(0).toISOString(),
};

export const personalCards = [
  {
    title: "Running",
    summary: "Keeps discipline active outside technical work.",
    imagePath: "personal-running.jpg",
  },
  {
    title: "Music",
    summary: "A space for attention, rhythm, and creativity.",
    imagePath: "personal-music.jpg",
  },
  {
    title: "3D printing",
    summary: "A hands-on outlet for curiosity, iteration, and making ideas tangible.",
    imagePath: "personal-3d-printing.jpg",
  },
] as const;
