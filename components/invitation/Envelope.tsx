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
        className="relative aspect-[1.62/1] overflow-hidden rounded-[8px] border border-[#dfd1bf] bg-[linear-gradient(160deg,#f7f0e4_0%,#eee1d0_48%,#e7d8c5_100%)] shadow-[0_34px_72px_rgba(40,33,28,0.24)]"
        animate={{ y: pressed ? 4 : 0, rotateZ: pressed ? -0.4 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.64),transparent_36%),radial-gradient(circle_at_84%_74%,rgba(132,109,89,0.12),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-35 mix-blend-multiply paper-grain" />
        <div className="absolute inset-[10px] rounded-[5px] border border-[#d3c3ae]/80" />

        <div className="absolute inset-x-0 bottom-0 h-[58%] rounded-b-[7px] border-t border-[#d4c2ab] bg-[linear-gradient(180deg,#efe2d1,#e7d9c6)]" />
        <div
          className="absolute bottom-0 left-0 h-[58%] w-[52%] border-r border-[#d3c0a9] bg-[linear-gradient(160deg,#ecdfcf,#e2d2be)]"
          style={{ clipPath: "polygon(0 100%,100% 100%,100% 0)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[58%] w-[52%] border-l border-[#d3c0a9] bg-[linear-gradient(200deg,#ecdfcf,#e2d2be)]"
          style={{ clipPath: "polygon(0 100%,100% 100%,0 0)" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22)_50%,transparent)] opacity-60" />

        <motion.div
          className="absolute inset-x-0 top-0 h-[58%] origin-top overflow-hidden"
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          animate={{ rotateX: flapOpen ? -165 : 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <div
            className="absolute inset-0 border-b border-[#d4c2ab] bg-[linear-gradient(180deg,#f3eadd,#ecdecb)]"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }}
          />
          <div
            className="pointer-events-none absolute inset-[9%] border border-[#ccb9a0]/60"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }}
          />
          <div className="pointer-events-none absolute left-1/2 top-[5%] h-[72%] w-px -translate-x-1/2 bg-[#d6c6b2]/70" />
        </motion.div>

        <div className="absolute left-1/2 top-[33%] -translate-x-1/2 text-center">
          <div className="mx-auto flex h-[74px] w-[74px] items-center justify-center rounded-full border border-[#cbb79f] bg-[radial-gradient(circle_at_35%_28%,#f6efe5,#ece0cf_64%,#e3d3be)] shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_8px_18px_rgba(87,70,55,0.12)]">
            <p className="font-serif text-[22px] tracking-[0.08em] text-[#7a6758]">
              A<span className="px-[2px] text-[14px] align-middle text-[#947f6e]">&</span>C
            </p>
          </div>
          <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#8e7f73]">
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
