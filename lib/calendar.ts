import { wedding } from "@/lib/wedding";

type CalendarConfig = {
  title: string;
  description: string;
  location: string;
  date: string;
  timezone: string;
  start?: string;
  end?: string;
};

const escapeIcsText = (value: string): string =>
  value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");

const formatUtcStamp = (date: Date): string =>
  date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

const toYmd = (value: string): string => value.replace(/-/g, "");

const buildDateTime = (date: string, time: string): string =>
  `${toYmd(date)}T${time.replace(":", "")}00`;

const nextDayYmd = (date: string): string => {
  const dt = new Date(`${date}T00:00:00Z`);
  dt.setUTCDate(dt.getUTCDate() + 1);
  return dt.toISOString().slice(0, 10).replace(/-/g, "");
};

const buildIcsContent = ({
  title,
  description,
  location,
  date,
  timezone,
  start,
  end,
}: CalendarConfig): string => {
  const uid = `${toYmd(date)}-${title}-${location}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .concat("@save-the-date");
  const created = formatUtcStamp(new Date());
  const hasStart = Boolean(start);
  const hasEnd = Boolean(end);

  if (hasStart !== hasEnd) {
    throw new Error("Timed calendar events require both start and end times.");
  }

  const isAllDay = !hasStart && !hasEnd;
  const eventLines = isAllDay
    ? [`DTSTART;VALUE=DATE:${toYmd(date)}`, `DTEND;VALUE=DATE:${nextDayYmd(date)}`]
    : [
        `DTSTART;TZID=${timezone}:${buildDateTime(date, start!)}`,
        `DTEND;TZID=${timezone}:${buildDateTime(date, end!)}`,
      ];

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Aaron and Charlotte//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${created}`,
    ...eventLines,
    `SUMMARY:${escapeIcsText(title)}`,
    `DESCRIPTION:${escapeIcsText(description)}`,
    `LOCATION:${escapeIcsText(location)}`,
    "STATUS:CONFIRMED",
    "TRANSP:OPAQUE",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
};

export const downloadWeddingCalendarEvent = (): void => {
  if (typeof window === "undefined") {
    return;
  }

  const content = buildIcsContent({
    title: wedding.calendar.title,
    description: wedding.calendar.description,
    location: wedding.calendar.location,
    date: wedding.calendar.date,
    timezone: wedding.calendar.timezone,
    start: wedding.calendar.start,
    end: wedding.calendar.end,
  });

  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "aaron-charlotte-wedding.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
