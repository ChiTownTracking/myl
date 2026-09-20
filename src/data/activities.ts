import type { ImageMetadata } from "astro";
import mercy from "../assets/images/al-rahma-conference/al-rahma-audience-hall.jpg";
import mercy2021 from "../assets/images/mercy-conference/2021/mercy-2021-audience.jpg";
import mercy2022 from "../assets/images/mercy-conference/2022/mercy-2022-gathering.jpg";
import mercy2023 from "../assets/images/mercy-conference/2023/mercy-2023-audience.jpg";
import retreat from "../assets/images/al-hidayah/al-hidayah-2026-keynote.jpg";
import hoops from "../assets/images/hoops4humanity/myl-basketball.png";
import discussion from "../assets/images/myl-qa-2026/myl-qa-2026-discussion.jpg";
import community from "../assets/images/herosection/myl-back-hoodies.png";
import podcast from "../assets/images/podcast/tomorrows-ummah-podcast-logo.jpeg";
import burdah from "../assets/images/events-programs/burdah-night-2026.jpg";
import mawlid from "../assets/images/events-programs/mawlid-cambridge-2025.jpg";
import salah from "../assets/images/events-programs/husn-e-salah-2023.jpg";
import hikmah from "../assets/images/events-programs/al-hikmah-highlight.jpg";
import hidayah2028 from "../assets/images/events-programs/al-hidayah-2028.jpg";
import workshop from "../assets/images/events-programs/al-hidayah-ai-workshop-2026.jpg";

export interface Activity {
  id: string;
  category: "Conferences & retreats" | "Learning" | "Spiritual gatherings" | "Sport" | "Media";
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  imageStyle?: "poster" | "logo";
  imageCaption?: string;
  meta: string;
  href: string;
  linkLabel: string;
  source: { label: string; href: string };
}

// Curated from public MYL social posts and official recaps on 2026-09-19.
// These are program descriptions and historical highlights, not a live schedule.
// Keep image provenance and verification caveats in docs/events-programs-sources.md.
export const programs: Activity[] = [
  {
    id: "al-rahma", category: "Conferences & retreats", title: "Al-Rahma · Mercy for Humanity",
    description: "MYL Canada’s flagship conference brings scholars and the community together to explore the Prophet Muhammad’s ﷺ example of mercy, compassion and justice.",
    image: mercy, imageAlt: "A full audience hall at an Al-Rahma conference", meta: "Conference series · Mississauga",
    href: "/events/mercy-for-humanity/", linkLabel: "Explore the conference",
    source: { label: "Instagram highlights", href: "https://www.instagram.com/stories/highlights/18041473420565846/" },
  },
  {
    id: "al-hidayah", category: "Conferences & retreats", title: "Al-Hidayah Canada",
    description: "A residential MQI Canada retreat with scholarly talks, worship and practical workshops. MYL Canada volunteers support registration and event delivery.",
    image: retreat, imageAlt: "A keynote session at Al-Hidayah Canada 2026", meta: "Residential retreat · Hamilton",
    href: "/events/al-hidayah/", linkLabel: "Discover the retreat",
    source: { label: "Instagram recap", href: "https://www.instagram.com/alhidayah_ca/reel/Dcr_nSYORDu/" },
  },
  {
    id: "hoops-for-humanity", category: "Sport", title: "Hoops 4 Humanity",
    description: "Basketball, teamwork and community on the same court. MYL’s sports gatherings give young people a place to compete, build friendships and get involved.",
    image: hoops, imageAlt: "Players and volunteers gathered on the basketball court at Hoops 4 Humanity", meta: "Community basketball",
    href: "/programs/hoops-for-humanity/", linkLabel: "Explore Hoops 4 Humanity",
    source: { label: "MYL event listings", href: "https://www.eventbrite.ca/o/myl-muslim-youth-league-canada-54899574643" },
  },
  {
    id: "al-hikmah", category: "Learning", title: "Al-Hikmah Series",
    description: "Make space for Islamic learning with MYL Canada’s Al-Hikmah series. Explore the saved session highlights on the official Instagram page.",
    image: hikmah, imageAlt: "Al-Hikmah Series artwork from MYL Canada’s Instagram highlights", imageStyle: "logo", meta: "Islamic learning series",
    href: "https://www.instagram.com/stories/highlights/18052258229509199/", linkLabel: "Explore Al-Hikmah",
    source: { label: "Instagram highlights", href: "https://www.instagram.com/stories/highlights/18052258229509199/" },
  },
  {
    id: "scholar-qa", category: "Learning", title: "Meet, Greet & Scholar Q&As",
    description: "Bring your questions into the conversation. MYL’s scholar sessions explore faith, identity, technology and the everyday challenges young Muslims face.",
    image: discussion, imageAlt: "Shaykh Hammad Mustafa in conversation at MYL Canada’s 2026 Q&A", meta: "Youth conversations · Mississauga",
    href: "/events/#scholar-qa-2026", linkLabel: "See the July 2026 gathering",
    source: { label: "Official recap", href: "https://www.minhaj.org/english/Canada/tid/62850/Canada-MYL-Canada-Hosts-Meet-Greet-and-QA-Session-with-Shaykh-Hammad-Mustafa-al-Madani-al-Qadri.html" },
  },
  {
    id: "mawlid-burdah", category: "Spiritual gatherings", title: "Mawlid & Burdah Nights",
    description: "Gather for Qur’an recitation, nasheeds, poetry and reflections on the Prophetic example. MYL’s gatherings include Grand Mawlid celebrations and Burdah Night.",
    image: mawlid, imageAlt: "Original poster for MYL Canada’s September 2025 Mawlid celebration in Cambridge", imageStyle: "poster", meta: "Remembrance & companionship",
    href: "/events/#burdah-night", linkLabel: "Explore the gatherings",
    source: { label: "Facebook event post", href: "https://www.facebook.com/MYLCanada/posts/776213561571108/" },
  },
  {
    id: "youth-itikaf", category: "Spiritual gatherings", title: "Youth I’tikaf",
    description: "A residential Ramadan gathering at MMCC for boys aged 14 and up, bringing faith and brotherhood together with meals and overnight accommodation.",
    image: community, imageAlt: "Two members wearing MYL Canada hoodies", imageCaption: "MYL Canada community", meta: "Ramadan program · Mississauga",
    href: "/contact/?interest=Youth%20Itikaf", linkLabel: "Ask about the next I’tikaf",
    source: { label: "MYL’s official links", href: "https://linktr.ee/MYLCanada" },
  },
  {
    id: "husn-e-salah", category: "Learning", title: "Husn-e-Salah Course",
    description: "A three-month diploma course in Islamic prayer, taught by Shaykh Dr. Abdullah al-Qadri and presented by MQI and Minhaj School of Canada at MMCC.",
    image: salah, imageAlt: "Original 2023 Husn-e-Salah course poster with instructor and course details", imageStyle: "poster", meta: "Past course · Began October 2023",
    href: "https://mmcc-canada.org/myl-husn-e-salah-course/", linkLabel: "Read the course announcement",
    source: { label: "MMCC course archive", href: "https://mmcc-canada.org/myl-husn-e-salah-course/" },
  },
  {
    id: "tomorrows-ummah", category: "Media", title: "Tomorrow’s Ummah Podcast",
    description: "Continue the conversation between gatherings. Explore MYL Canada’s podcast on Islamic scholarship, contemporary questions and the life of the Muslim community.",
    image: podcast, imageAlt: "Tomorrow’s Ummah Podcast artwork", imageStyle: "logo", meta: "Listen & learn",
    href: "/podcast/", linkLabel: "Explore the podcast",
    source: { label: "MYL YouTube", href: "https://www.youtube.com/channel/UCXmsaRQM30CktMnZcPNUJvg" },
  },
];

export const featuredGathering = {
  title: "Burdah Night 2026",
  date: "September 19, 2026", datetime: "2026-09-19",
  time: "7:00 PM", venue: "Jamia Al Mustafa, Mississauga",
  address: "2505 Dixie Road, Mississauga, ON L4Y 2A1",
  description: "An evening of praise and remembrance with Qari Safar Al Madani and keynote speaker Shaykh Dr. Abdullah al-Qadri. Come together with family and friends in love for the Prophet Muhammad ﷺ.",
  image: burdah, imageAlt: "Original Burdah Night 2026 poster announcing September 19 at 7 PM at Jamia Al Mustafa",
  source: "https://www.instagram.com/mylcanada/p/DdQDtD9RjIF/",
};

export const retreatAnnouncement = {
  title: "Al-Hidayah returns in 2028.",
  description: "The next Canadian gathering has been announced. Dates, venue and registration details are still to come.",
  image: hidayah2028,
  source: "https://www.instagram.com/alhidayah_ca/p/Dcos-V1sj-7/",
};

export const eventHighlights = [
  {
    id: "al-hidayah-2026", title: "Al-Hidayah Canada 2026", date: "August 1–3, 2026", datetime: "2026-08-01", location: "McMaster University · Hamilton",
    description: "Three days of learning, worship and companionship around the theme Pure Intentions & Noble Conduct. Organized by MQI Canada with MYL volunteer support.",
    image: retreat, imageAlt: "A keynote gathering at Al-Hidayah Canada 2026", imageStyle: "photo",
    href: "/events/al-hidayah/", linkLabel: "Explore the retreat",
    source: "https://www.instagram.com/alhidayah_ca/reel/Dcr_nSYORDu/", sourceLabel: "Instagram recap",
  },
  {
    id: "al-hidayah-workshops-2026", title: "Faith, Character & Skills Workshops", date: "August 3, 2026", datetime: "2026-08-03", location: "Al-Hidayah · McMaster University",
    description: "Practical retreat sessions explored AI with Ali Malik, ethical wealth with Syed Najam, community building with Shaykh Adnan Sohail and reconciliation with Shaykh Ibrahim Hussain.",
    image: workshop, imageAlt: "Ali Malik’s artificial intelligence workshop at Al-Hidayah Canada 2026", imageStyle: "photo",
    href: "https://www.instagram.com/alhidayah_ca/p/DcDYm6wjtF6/", linkLabel: "View the workshop recap",
    source: "https://www.instagram.com/alhidayah_ca/p/DcDYm6wjtF6/", sourceLabel: "Instagram",
  },
  {
    id: "scholar-qa-2026", title: "Meet, Greet & Q&A", date: "July 18, 2026", datetime: "2026-07-18", location: "Jamia Al Mustafa · Mississauga",
    description: "An interactive session with Shaykh Hammad Mustafa al-Madani al-Qadri on faith, doubt, digital distraction, AI and community responsibility, followed by recognition of MYL volunteers.",
    image: discussion, imageAlt: "The MYL Canada question-and-answer gathering with Shaykh Hammad Mustafa", imageStyle: "photo",
    href: "https://www.minhaj.org/english/Canada/tid/62850/Canada-MYL-Canada-Hosts-Meet-Greet-and-QA-Session-with-Shaykh-Hammad-Mustafa-al-Madani-al-Qadri.html", linkLabel: "Read the official recap",
    source: "https://www.minhaj.org/english/Canada/tid/62850/Canada-MYL-Canada-Hosts-Meet-Greet-and-QA-Session-with-Shaykh-Hammad-Mustafa-al-Madani-al-Qadri.html", sourceLabel: "Minhaj-ul-Quran",
  },
  {
    id: "mawlid-cambridge-2025", title: "1500th Mawlid un Nabi ﷺ", date: "September 4, 2025", datetime: "2025-09-04", location: "Cambridge chapter · Ontario",
    description: "A brothers’ gathering with Qur’an recitation, nasheeds, poetry and a keynote by Shaykh Dr. Abdullah al-Qadri celebrating the life and teachings of the Prophet ﷺ.",
    image: mawlid, imageAlt: "MYL Canada Cambridge chapter’s original 1500th Mawlid celebration poster", imageStyle: "poster",
    href: "https://www.facebook.com/MYLCanada/posts/776213561571108/", linkLabel: "View the original post",
    source: "https://www.facebook.com/MYLCanada/posts/776213561571108/", sourceLabel: "Facebook",
  },
  {
    id: "al-rahma-2023", title: "Third Annual Al-Rahma Conference", date: "November 18, 2023", datetime: "2023-11-18", location: "The International Centre · Mississauga",
    description: "Shaykh Hammad Mustafa explored the Prophet’s ﷺ final sermon and its call to equality, justice, compassion and the dignity of every person.",
    image: mercy2023, imageAlt: "Attendees at the third annual Mercy for Humanity conference in 2023", imageStyle: "photo",
    href: "/events/mercy-for-humanity/", linkLabel: "Explore the conference history",
    source: "https://mmcc-canada.org/canada-3rd-annual-mercy-for-humanity-muhammad-pbuh-conference/", sourceLabel: "MMCC recap",
  },
  {
    id: "al-rahma-2022", title: "Second Annual Al-Rahma Conference", date: "October 30, 2022", datetime: "2022-10-30", location: "The International Centre · Mississauga",
    description: "More than 1,000 attendees gathered for reflections on Prophetic mercy with Shaykh Dr. Muhammad al-Ninowy and Shaykh Hammad Mustafa al-Madani al-Qadri.",
    image: mercy2022, imageAlt: "The community gathered at the 2022 Mercy to Humanity conference", imageStyle: "photo",
    href: "/events/mercy-for-humanity/", linkLabel: "Explore the conference history",
    source: "https://www.minhaj.org/english/Overseas/tid/55097/Mercy-to-Humanity-Muhammad-pbuh-Conference-by-Muslim-Youth-League-Canada.html", sourceLabel: "Minhaj-ul-Quran recap",
  },
  {
    id: "al-rahma-2021", title: "The First Mercy to Humanity Conference", date: "November 6, 2021", datetime: "2021-11-06", location: "Living Arts Centre · Mississauga",
    description: "The first in-person conference brought GTA youth together to reflect on the Prophet’s ﷺ merciful character, with a keynote by Shaykh Hammad Mustafa al-Madani al-Qadri.",
    image: mercy2021, imageAlt: "Audience at the first Mercy to Humanity conference in 2021", imageStyle: "photo",
    href: "/events/mercy-for-humanity/", linkLabel: "Explore the conference history",
    source: "https://mmcc-canada.org/mercy-to-humanity-muhammad-pbuh-conference-by-muslim-youth-league-canada/", sourceLabel: "MMCC recap",
  },
];
