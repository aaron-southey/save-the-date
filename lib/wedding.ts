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
    intro:
      "We met 10 years ago on 26th April 2016, and every chapter since has felt like home. From quiet Sundays to big adventures, we’ve built a life full of laughter, loyalty, and love.",
    outro:
      "Now we can’t wait to celebrate the next chapter with the people who mean the most to us.",
  },
  dog: {
    name: "Spark",
    heading: "And of course, Spark",
    intro:
      "Spark is our very naughty little sausage dog — full of personality, always under our feet, and always making us laugh.",
    imageAlt: "Portrait placeholder for Spark, Aaron and Charlotte's sausage dog.",
  },
  images: {
    hero: "/images/couple-hero.svg",
    story: "/images/story-placeholder.svg",
    dog: "/images/spark-placeholder.svg",
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
