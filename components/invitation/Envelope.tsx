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
    <div className="relative w-[min(90vw,700px)]">
      <motion.div
        className="relative aspect-[1.58/1] overflow-hidden rounded-md border border-[#e4d7c6] bg-[linear-gradient(155deg,#f6efe3,#ede2d2_54%,#e8dbc9)] shadow-[0_36px_90px_rgba(38,31,26,0.26)]"
        animate={{ y: pressed ? 4 : 0, rotateZ: pressed ? -0.4 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(255,255,255,0.66),transparent_34%),radial-gradient(circle_at_84%_80%,rgba(145,120,96,0.12),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-multiply paper-grain" />
        <div className="absolute left-3 right-3 top-3 bottom-3 rounded-[4px] border border-[#d7c8b5]/70" />
        <div className="absolute inset-x-0 bottom-0 h-[57%] rounded-b-md border-t border-[#d8cab8] bg-[linear-gradient(180deg,#efe3d4,#e8dccb)]" />
        <div className="absolute inset-x-0 bottom-0 h-[57%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25)_45%,transparent)] opacity-60" />

        <motion.div
          className="absolute inset-x-0 top-0 h-[58%] origin-top overflow-hidden"
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          animate={{ rotateX: flapOpen ? -165 : 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <div
            className="absolute inset-0 border-b border-[#d3c3af] bg-[linear-gradient(180deg,#f3ebdc,#ecdfcf)]"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }}
          />
          <div
            className="pointer-events-none absolute inset-[9%] border border-[#cfbfa9]/50"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }}
          />
        </motion.div>

        <div className="absolute left-1/2 top-[33%] -translate-x-1/2 text-center">
          <p className="font-serif text-2xl tracking-[0.2em] text-[#7f6d5f]">A & C</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#8e7f73]">
            {invitee ? `To ${invitee}` : "Private Invitation"}
          </p>
        </div>

        <WaxSeal onOpen={onOpen} isPressed={pressed} isReleased={released} disabled={disabled} />
      </motion.div>

      <p className="mt-10 text-center text-sm tracking-[0.22em] text-[#6f625a]">
        {invitee ? `A little something for ${invitee}` : "A little something for you"}
      </p>
      <p className="mt-3 text-center text-xs uppercase tracking-[0.3em] text-[#8f8178]">Open invitation</p>
    </div>
  );
}
