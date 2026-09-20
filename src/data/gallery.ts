import type { ImageMetadata } from "astro";
import mercy2021 from "../assets/images/mercy-conference/2021/mercy-2021-audience.jpg";
import mercySpeakers from "../assets/images/mercy-conference/2021/mercy-2021-speakers.jpg";
import mercy2022 from "../assets/images/mercy-conference/2022/mercy-2022-keynote.jpg";
import mercy2023 from "../assets/images/mercy-conference/2023/mercy-2023-audience.jpg";
import mercyStage from "../assets/images/mercy-conference/2023/mercy-2023-keynote.jpg";
import qaGroup from "../assets/images/myl-qa-2026/myl-qa-2026-stage.jpg";
import qaCommunity from "../assets/images/myl-qa-2026/myl-qa-2026-community.jpg";
import qaDiscussion from "../assets/images/myl-qa-2026/myl-qa-2026-discussion.jpg";
import hidayahAudience from "../assets/images/al-hidayah/al-hidayah-2023-gathering.jpg";
import hidayahKeynote from "../assets/images/al-hidayah/al-hidayah-2026-keynote.jpg";
import hidayahWorkshop from "../assets/images/al-hidayah/al-hidayah-2026-workshop.jpg";
import aiWorkshop from "../assets/images/events-programs/al-hidayah-ai-workshop-2026.jpg";
import hoopsTeam from "../assets/images/hoops4humanity/myl-basketball.png";
import hoopsAction from "../assets/images/hoops4humanity/basketball-1.png";

export const galleryCollections = [
  { id: "al-rahma", label: "Al-Rahma", href: "/events/mercy-for-humanity/" },
  { id: "al-hidayah", label: "Al-Hidayah", href: "/events/al-hidayah/" },
  { id: "hoops", label: "Hoops 4 Humanity", href: "/programs/hoops-for-humanity/" },
  { id: "qa", label: "Meet, Greet & Q&A", href: "/events/#scholar-qa-2026" },
] as const;

interface GalleryPhoto {
  image: ImageMetadata;
  alt: string;
  title: string;
  meta: string;
  collection: typeof galleryCollections[number]["id"];
  layout?: "wide" | "portrait" | "half";
}

// Photography from the existing event archive. Dates describe the pictured
// edition; the event pages contain the corresponding official source reports.
export const galleryPhotos: GalleryPhoto[] = [
  { image: mercy2023, alt: "The audience gathered at Al-Rahma 2023", title: "A gathering with purpose", meta: "2023 · Mississauga", collection: "al-rahma", layout: "wide" },
  { image: hoopsAction, alt: "A player takes a contested shot at a MYL basketball game", title: "More than a game", meta: "Sport & fellowship", collection: "hoops", layout: "portrait" },
  { image: qaGroup, alt: "MYL Canada organizers, scholars and guests together on stage", title: "The people who make it happen", meta: "2026 · Jamia Al Mustafa", collection: "qa" },
  { image: hidayahAudience, alt: "Attendees listening together at Al-Hidayah Canada", title: "Room to learn. Space to grow.", meta: "Al-Hidayah Canada · 2023", collection: "al-hidayah" },
  { image: mercy2021, alt: "The audience at the first Mercy to Humanity conference", title: "Where the story began", meta: "2021 · Living Arts Centre", collection: "al-rahma" },
  { image: hidayahKeynote, alt: "Shaykh-ul-Islam teaching at Al-Hidayah Canada 2026", title: "Pure intentions. Noble conduct.", meta: "2026 · Hamilton", collection: "al-hidayah", layout: "half" },
  { image: qaCommunity, alt: "The MYL Canada community gathered for a scholar Q&A", title: "Better questions, together", meta: "2026 · Jamia Al Mustafa", collection: "qa", layout: "half" },
  { image: hoopsTeam, alt: "Players and volunteers pose together on the basketball court", title: "One court. A whole community.", meta: "Connect · Act · Impact", collection: "hoops", layout: "wide" },
  { image: mercyStage, alt: "Shaykh Hammad Mustafa addressing the Al-Rahma 2023 conference", title: "A message of mercy", meta: "2023 · The International Centre", collection: "al-rahma", layout: "portrait" },
  { image: mercy2022, alt: "A keynote address at the 2022 Mercy to Humanity conference", title: "A growing conversation", meta: "2022 · The International Centre", collection: "al-rahma" },
  { image: aiWorkshop, alt: "Ali Malik leading an AI workshop at Al-Hidayah Canada", title: "Learning for the world ahead", meta: "2026 · McMaster University", collection: "al-hidayah" },
  { image: qaDiscussion, alt: "Young people listening to a scholar during MYL Canada’s Q&A", title: "Faith in conversation", meta: "2026 · Jamia Al Mustafa", collection: "qa" },
  { image: mercySpeakers, alt: "Speakers at the first Mercy to Humanity conference in 2021", title: "Knowledge that brings us closer", meta: "2021 · Mississauga", collection: "al-rahma", layout: "half" },
  { image: hidayahWorkshop, alt: "A learning session at Al-Hidayah Canada 2026", title: "Take something meaningful home", meta: "Al-Hidayah Canada · 2026", collection: "al-hidayah", layout: "half" },
];
