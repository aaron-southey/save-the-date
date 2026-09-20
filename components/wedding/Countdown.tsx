"use client";

import { useEffect, useMemo, useState } from "react";

type CountdownProps = {
  targetDate: string;
};

type Remaining = {
  days: number;
  weeks: number;
};

const getRemaining = (targetDate: string): Remaining => {
  const target = new Date(`${targetDate}T00:00:00Z`).getTime();
  const now = Date.now();
  const diff = Math.max(target - now, 0);
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return { days, weeks: Math.ceil(days / 7) };
};

export function Countdown({ targetDate }: CountdownProps) {
  const [remaining, setRemaining] = useState(() => getRemaining(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining(targetDate)), 60_000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  const lines = useMemo(
    () => [
      { label: "days to go", value: remaining.days.toString() },
      { label: "weeks to go", value: remaining.weeks.toString() },
    ],
    [remaining.days, remaining.weeks],
  );

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {lines.map((line) => (
        <div key={line.label} className="border-l border-[#cfc0ad] pl-5">
          <p className="font-serif text-4xl text-[#2e2826] sm:text-5xl">{line.value}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.26em] text-[#776c65]">{line.label}</p>
        </div>
      ))}
    </div>
  );
}
