"use client";

import { motion } from "framer-motion";
import { wedding } from "@/lib/wedding";

type InvitationCardProps = {
  reveal: boolean;
  transitionOut: boolean;
};

export function InvitationCard({ reveal, transitionOut }: InvitationCardProps) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-10 w-[min(86vw,620px)] -translate-x-1/2 rounded-sm border border-[#e2d6c8] bg-[#f9f4ea] px-8 py-14 text-center shadow-[0_30px_60px_rgba(36,30,24,0.22)] sm:px-12"
      initial={{ y: 40, scale: 0.92, opacity: 0 }}
      animate={{
        y: reveal ? (transitionOut ? -70 : -130) : 40,
        scale: reveal ? (transitionOut ? 1.35 : 1) : 0.92,
        opacity: reveal ? 1 : 0,
        borderRadius: transitionOut ? "0px" : "2px",
      }}
      transition={{ duration: transitionOut ? 1.1 : 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-serif text-4xl tracking-wide text-[#2e2927] sm:text-6xl">{wedding.couple.names}</p>
      <p className="mt-8 text-sm uppercase tracking-[0.28em] text-[#736760]">{wedding.dateDisplay}</p>
      <p className="mt-4 text-base tracking-[0.08em] text-[#4d4541]">{wedding.venue.name}</p>
    </motion.div>
  );
}
