"use client";

import { motion } from "framer-motion";
import { WaxSeal } from "@/components/invitation/WaxSeal";

type EnvelopeProps = {
  onOpen: () => void;
  pressed: boolean;
  released: boolean;
  flapOpen: boolean;
  disabled?: boolean;
  invitee: string | null;
};

export function Envelope({ onOpen, pressed, released, flapOpen, disabled, invitee }: EnvelopeProps) {
  return (
    <div className="relative w-[min(92vw,700px)]">
      <motion.div
        className="relative aspect-[1.64/1] overflow-hidden rounded-[8px] border border-[#d8c8b7] bg-[linear-gradient(162deg,#fbf7f0_0%,#f2e9de_48%,#e8d8c6_100%)] shadow-[0_30px_64px_rgba(37,30,24,0.22)]"
        animate={{ y: pressed ? 4 : 0, rotateZ: pressed ? -0.3 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_14%,rgba(255,255,255,0.68),transparent_34%),radial-gradient(circle_at_84%_84%,rgba(114,93,75,0.12),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-22 mix-blend-multiply paper-grain" />
        <div className="absolute inset-[11px] rounded-[6px] border border-[#cdbca8]/70" />

        <div className="absolute inset-x-0 bottom-0 h-[60%] rounded-b-[7px] border-t border-[#c9b49e] bg-[linear-gradient(180deg,#efe4d6,#e5d5c3)]" />

        <div
          className="absolute bottom-0 left-0 h-[60%] w-1/2 border-r border-[#c2ac95] bg-[linear-gradient(164deg,#e8d9c8,#deccb7)]"
          style={{ clipPath: "polygon(0 100%,100% 100%,100% 0)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[60%] w-1/2 border-l border-[#c2ac95] bg-[linear-gradient(196deg,#e8d9c8,#deccb7)]"
          style={{ clipPath: "polygon(0 100%,100% 100%,0 0)" }}
        />

        <motion.div
          className="absolute inset-x-0 top-0 h-[61%] origin-top overflow-hidden"
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          animate={{ rotateX: flapOpen ? -165 : 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <div
            className="absolute inset-0 border-b border-[#c5af98] bg-[linear-gradient(180deg,#f4eadf,#eadbcc)]"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }}
          />
          <div
            className="pointer-events-none absolute inset-[11%] border border-[#bfa68f]/60"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }}
          />
        </motion.div>

        <div className="absolute left-1/2 top-[35%] -translate-x-1/2 text-center">
          <p className="font-serif text-[30px] tracking-[0.08em] text-[#4d3c30]">
            A<span className="px-[3px] text-[15px] align-middle text-[#76604e]">&</span>C
          </p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#6f5a4c]">
            {invitee ? `For ${invitee}` : "Private Invitation"}
          </p>
        </div>

        <WaxSeal onOpen={onOpen} isPressed={pressed} isReleased={released} disabled={disabled} />
      </motion.div>

      <p className="mt-10 text-center text-sm tracking-[0.22em] text-[#695548]">
        {invitee ? `A little something for ${invitee}` : "A little something for you"}
      </p>
      <p className="mt-3 text-center text-xs uppercase tracking-[0.3em] text-[#7e6a5c]">Open invitation</p>
    </div>
  );
}
