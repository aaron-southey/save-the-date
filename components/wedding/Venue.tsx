"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { wedding } from "@/lib/wedding";

export function Venue() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const filter = useTransform(scrollYProgress, [0, 0.6, 1], ["grayscale(65%)", "grayscale(25%)", "grayscale(0%)"]);

  return (
    <section ref={ref} className="relative min-h-[85vh] overflow-hidden" id="venue">
      <motion.div
        className="absolute inset-0"
        style={{ filter }}
      >
        <Image
          src={wedding.images.venue}
          alt="[ADD VENUE PHOTO]"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(17,14,12,0.25),rgba(17,14,12,0.55))]" />

      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl items-end px-6 py-20 sm:px-10">
        <div className="max-w-2xl text-[#f4ede2]">
          <p className="text-xs uppercase tracking-[0.3em]">Venue</p>
          <h2 className="mt-4 font-serif text-5xl sm:text-6xl">{wedding.venue.name}</h2>
          <p className="mt-6 text-lg tracking-[0.08em]">{wedding.venue.location}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#ddcfbf]">[ADD VENUE PHOTO]</p>
        </div>
      </div>
    </section>
  );
}
