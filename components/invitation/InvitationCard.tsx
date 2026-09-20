"use client";

import { motion } from "framer-motion";
import type { RefObject } from "react";
import { wedding } from "@/lib/wedding";

type InvitationCardProps = {
  reveal: boolean;
  transitionOut: boolean;
  invitee: string | null;
  focusRef: RefObject<HTMLDivElement | null>;
};

export function InvitationCard({ reveal, transitionOut, invitee, focusRef }: InvitationCardProps) {
  return (
    <motion.div
      ref={focusRef}
      tabIndex={-1}
      aria-label="Invitation details"
      className="absolute left-1/2 top-1/2 z-10 w-[min(86vw,620px)] -translate-x-1/2 rounded-sm border border-[#d7c8b8] bg-[linear-gradient(160deg,#fbf7f0,#f4ebdf)] px-8 py-14 text-center shadow-[0_36px_72px_rgba(34,28,22,0.22)] sm:px-12"
      initial={{ y: 40, scale: 0.92, opacity: 0 }}
      animate={{
        y: reveal ? (transitionOut ? -70 : -130) : 40,
        scale: reveal ? (transitionOut ? 1.35 : 1) : 0.92,
        opacity: reveal ? 1 : 0,
        borderRadius: transitionOut ? "0px" : "2px",
      }}
      transition={{ duration: transitionOut ? 1.1 : 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute inset-[10px] border border-[#d0c0af]/75" />
      {invitee ? (
        <p className="mb-5 text-[11px] uppercase tracking-[0.26em] text-[#6e6158]">For {invitee}</p>
      ) : null}
      <p className="font-serif text-4xl tracking-[0.05em] text-[#3c322d] sm:text-6xl">{wedding.couple.names}</p>
      <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[#6f6259]">{wedding.dateDisplay}</p>
      <p className="mt-4 text-base tracking-[0.1em] text-[#544943]">{wedding.venue.name}</p>
    </motion.div>
  );
}
