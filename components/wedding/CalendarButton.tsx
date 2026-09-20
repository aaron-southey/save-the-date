"use client";

import { useState } from "react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { downloadWeddingCalendarEvent } from "@/lib/calendar";

export function CalendarButton() {
  const [message, setMessage] = useState("");

  const onAddToCalendar = () => {
    downloadWeddingCalendarEvent();
    setMessage("If your calendar does not open automatically, use the downloaded .ics file.");
  };

  return (
    <div>
      <MagneticButton
        type="button"
        onClick={onAddToCalendar}
        className="rounded-full border border-[#5a4a3f] bg-[#2f2826] px-7 py-3 text-xs uppercase tracking-[0.23em] text-[#f6efe4] transition hover:bg-[#433834] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f7461]"
      >
        Add to calendar
      </MagneticButton>
      {message ? <p className="mt-3 max-w-sm text-xs text-[#645a53]">{message}</p> : null}
    </div>
  );
}
