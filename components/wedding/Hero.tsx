"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { wedding } from "@/lib/wedding";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" aria-label="Hero">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={wedding.images.hero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(17,14,12,0.18),rgba(17,14,12,0.55))]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-end px-6 pb-20 sm:px-10 sm:pb-24">
        <div>
          <motion.h1
            className="font-serif text-5xl text-[#f7f2ea] sm:text-7xl md:text-8xl"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            {wedding.couple.names}
          </motion.h1>
          <motion.p
            className="mt-5 text-sm uppercase tracking-[0.3em] text-[#f2e7d8]"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
          >
            {wedding.dateDisplay}
          </motion.p>
          <motion.p
            className="mt-3 text-base tracking-[0.12em] text-[#f2e7d8] sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.65 }}
          >
            {wedding.venue.name} · {wedding.venue.location}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
