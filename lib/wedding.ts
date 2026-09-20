export const WEDDING_DATE = "2028-04-28";
export const WEDDING_START = "";
export const WEDDING_END = "";
export const WEDDING_TIMEZONE = "Europe/London";
export const WEDDING_LOCATION = "Coombe Lodge, Blagdon, Somerset, UK";

export const wedding = {
  site: {
    url: "https://save-the-date.vercel.app",
    title: "Aaron & Charlotte — Save the Date",
    description:
      "A cinematic digital invitation for Aaron & Charlotte's wedding at Coombe Lodge on 28 April 2028.",
    ogImage: "/images/og-placeholder.svg",
  },
  couple: {
    names: "Aaron & Charlotte",
    firstName: "Aaron",
    secondName: "Charlotte",
  },
  date: WEDDING_DATE,
  dateDisplay: "28 April 2028",
  venue: {
    name: "Coombe Lodge",
    location: "Blagdon, Somerset, UK",
    fullAddress: WEDDING_LOCATION,
  },
  story: {
    heading: "Our Story",
    intro: "[ADD STORY COPY]",
  },
  images: {
    hero: "/images/couple-hero.svg",
    story: "/images/story-placeholder.svg",
    venue: "/images/venue-placeholder.svg",
    gallery: [
      "/images/gallery-1.svg",
      "/images/gallery-2.svg",
      "/images/gallery-3.svg",
      "/images/gallery-4.svg",
    ],
  },
  calendar: {
    title: "Aaron & Charlotte — Wedding",
    description: "Save the date for Aaron & Charlotte.",
    timezone: WEDDING_TIMEZONE,
    date: WEDDING_DATE,
    start: WEDDING_START,
    end: WEDDING_END,
    location: WEDDING_LOCATION,
  },
} as const;
