"use client";

import { motion } from "framer-motion";
import { Countdown } from "@/components/wedding/Countdown";
import { wedding } from "@/lib/wedding";

export function DateSection() {
  const [year, month, day] = wedding.date.split("-");

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 md:py-32" id="date">
      <p className="text-xs uppercase tracking-[0.26em] text-[#756a63]">The Date</p>
      <div className="mt-8 grid gap-3 font-serif text-7xl leading-none text-[#2f2926] sm:grid-cols-3 sm:text-8xl">
        {[
          { value: day, key: "day" },
          { value: month, key: "month" },
          { value: year, key: "year" },
        ].map((item, index) => (
          <motion.p
            key={item.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            {item.value}
          </motion.p>
        ))}
      </div>
      <Countdown targetDate={wedding.date} />
    </section>
  );
}
