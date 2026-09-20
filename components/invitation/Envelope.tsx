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
    <div className="relative w-[min(90vw,680px)]">
      <motion.div
        className="relative aspect-[1.5/1] rounded-md border border-[#e6dccc] bg-[linear-gradient(160deg,#f5efe4,#ece2d4)] shadow-[0_28px_70px_rgba(46,39,34,0.22)]"
        animate={{ y: pressed ? 4 : 0, rotateZ: pressed ? -0.4 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-x-0 bottom-0 h-[55%] rounded-b-md border-t border-[#ddd0bf] bg-[linear-gradient(180deg,#efe5d7,#e9ddce)]" />

        <motion.div
          className="absolute inset-x-0 top-0 h-[56%] origin-top overflow-hidden"
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          animate={{ rotateX: flapOpen ? -165 : 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <div
            className="absolute inset-0 border-b border-[#d6cab8] bg-[linear-gradient(180deg,#f2e9da,#ede2d2)]"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }}
          />
        </motion.div>

        <div className="absolute left-1/2 top-[34%] -translate-x-1/2 text-center">
          <p className="font-serif text-2xl tracking-[0.2em] text-[#857465]">A & C</p>
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
