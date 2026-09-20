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
    <div className="relative w-[min(92vw,720px)]">
      <motion.div
        className="relative aspect-[1.65/1] overflow-hidden rounded-[8px] border border-[#b99f86] bg-[linear-gradient(162deg,#e2cfbc_0%,#c3a88f_42%,#9f7f65_100%)] shadow-[0_32px_68px_rgba(34,24,18,0.34)]"
        animate={{ y: pressed ? 4 : 0, rotateZ: pressed ? -0.35 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_14%,rgba(255,255,255,0.34),transparent_33%),radial-gradient(circle_at_86%_84%,rgba(53,38,30,0.3),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-28 mix-blend-multiply paper-grain" />
        <div className="absolute inset-[10px] rounded-[6px] border border-[#ad9076]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]" />
        <div className="absolute inset-[16px] rounded-[5px] border border-[#8c6f59]/35" />

        <div className="absolute inset-x-0 bottom-0 h-[60%] rounded-b-[7px] border-t border-[#98795f] bg-[linear-gradient(180deg,#d0b396,#b08f72)]" />

        <div
          className="absolute bottom-0 left-0 h-[60%] w-1/2 border-r border-[#8f725b] bg-[linear-gradient(164deg,#c3a688,#9f7e62)]"
          style={{ clipPath: "polygon(0 100%,100% 100%,100% 0)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[60%] w-1/2 border-l border-[#8f725b] bg-[linear-gradient(196deg,#c3a688,#9f7e62)]"
          style={{ clipPath: "polygon(0 100%,100% 100%,0 0)" }}
        />

        <div className="absolute inset-x-0 bottom-[46%] h-px bg-[#8d715a]/70" />
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14)_50%,transparent)] opacity-45" />
        <div className="absolute left-1/2 bottom-[17%] h-[26%] w-px -translate-x-1/2 bg-[#7b5f49]/50" />

        <motion.div
          className="absolute inset-x-0 top-0 h-[61%] origin-top overflow-hidden"
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          animate={{ rotateX: flapOpen ? -165 : 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <div
            className="absolute inset-0 border-b border-[#8d7058] bg-[linear-gradient(180deg,#d5b99b,#b89374)]"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }}
          />
          <div
            className="pointer-events-none absolute inset-[10%] border border-[#866953]/65"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }}
          />
          <div className="pointer-events-none absolute left-1/2 top-[7%] h-[72%] w-px -translate-x-1/2 bg-[#82654d]/60" />
          <div className="pointer-events-none absolute inset-x-[20%] bottom-0 h-px bg-[#8b6e57]/55" />
        </motion.div>

        <div className="absolute left-1/2 top-[34%] -translate-x-1/2 text-center">
          <div className="mx-auto flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#694f3c]/70" />
            <p className="font-serif text-[30px] tracking-[0.08em] text-[#3f2c20]">
              A<span className="px-[3px] text-[15px] align-middle text-[#654834]">&</span>C
            </p>
            <span className="h-px w-7 bg-[#694f3c]/70" />
          </div>
          <p className="mt-1 text-[9px] uppercase tracking-[0.32em] text-[#4e3a2d]">Wedding Invitation</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#5d4839]">
            {invitee ? `For ${invitee}` : "Private Invitation"}
          </p>
        </div>

        <WaxSeal onOpen={onOpen} isPressed={pressed} isReleased={released} disabled={disabled} />
      </motion.div>

      <p className="mt-10 text-center text-sm tracking-[0.22em] text-[#5f4a3d]">
        {invitee ? `A little something for ${invitee}` : "A little something for you"}
      </p>
      <p className="mt-3 text-center text-xs uppercase tracking-[0.3em] text-[#715b4c]">Open invitation</p>
    </div>
  );
}
