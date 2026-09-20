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

const parseTime = (time: string): [string, string] => {
  const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(time);
  if (!match) throw new Error("Invalid time format. Use HH:mm.");
  return [match[1], match[2]];
};

const buildDateTime = (date: string, time: string): string => {
  const [hours, minutes] = parseTime(time);
  return `${toYmd(date)}T${hours}${minutes}00`;
};

const parseDateParts = (date: string): [number, number, number] => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  if (!match) throw new Error("Invalid date format. Use YYYY-MM-DD.");

  const [, yearStr, monthStr, dayStr] = match;
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);
  const candidate = new Date(Date.UTC(year, month - 1, day));

  if (
    candidate.getUTCFullYear() !== year ||
    candidate.getUTCMonth() !== month - 1 ||
    candidate.getUTCDate() !== day
  ) {
    throw new Error("Invalid calendar date.");
  }

  return [year, month, day];
};

const nextDayYmd = (date: string): string => {
  const [year, month, day] = parseDateParts(date);
  const dt = new Date(Date.UTC(year, month - 1, day));
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
  const timezoneLines =
    !isAllDay && timezone === "Europe/London"
      ? [
          "BEGIN:VTIMEZONE",
          "TZID:Europe/London",
          "X-LIC-LOCATION:Europe/London",
          "BEGIN:DAYLIGHT",
          "TZOFFSETFROM:+0000",
          "TZOFFSETTO:+0100",
          "TZNAME:BST",
          "DTSTART:19700329T010000",
          "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU",
          "END:DAYLIGHT",
          "BEGIN:STANDARD",
          "TZOFFSETFROM:+0100",
          "TZOFFSETTO:+0000",
          "TZNAME:GMT",
          "DTSTART:19701025T020000",
          "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU",
          "END:STANDARD",
          "END:VTIMEZONE",
        ]
      : [];
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
    ...timezoneLines,
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
