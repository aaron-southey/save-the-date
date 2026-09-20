"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { wedding } from "@/lib/wedding";

type HeroProps = {
  invitee: string | null;
};

export function Hero({ invitee }: HeroProps) {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden" aria-label="Hero">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={wedding.images.hero}
          alt="Editorial portrait placeholder for Aaron and Charlotte."
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(17,14,12,0.18),rgba(17,14,12,0.55))]" />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-6xl items-end px-6 pb-16 sm:px-10 sm:pb-24">
        <div>
          {invitee ? (
            <motion.p
              className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#efe3d4] sm:text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Invited: {invitee}
            </motion.p>
          ) : null}
          <motion.h1
            className="font-serif text-4xl text-[#f7f2ea] sm:text-7xl md:text-8xl"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            {wedding.couple.names}
          </motion.h1>
          <motion.p
            className="mt-4 text-[11px] uppercase tracking-[0.25em] text-[#f2e7d8] sm:text-sm sm:tracking-[0.3em]"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
          >
            {wedding.dateDisplay}
          </motion.p>
          <motion.p
            className="mt-2 text-sm tracking-[0.08em] text-[#f2e7d8] sm:mt-3 sm:text-lg sm:tracking-[0.12em]"
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
