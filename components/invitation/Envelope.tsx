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
        className="relative aspect-[1.65/1] overflow-hidden rounded-[8px] border border-[#d7c8b7] bg-[linear-gradient(162deg,#f8f2ea_0%,#efe3d6_44%,#e4d2bf_100%)] shadow-[0_32px_72px_rgba(36,30,24,0.24)]"
        animate={{ y: pressed ? 4 : 0, rotateZ: pressed ? -0.35 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_14%,rgba(255,255,255,0.68),transparent_34%),radial-gradient(circle_at_86%_84%,rgba(87,69,53,0.14),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-28 mix-blend-multiply paper-grain" />
        <div className="absolute inset-[10px] rounded-[6px] border border-[#c8b5a2]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.62)]" />
        <div className="absolute inset-[16px] rounded-[5px] border border-[#b69f8a]/40" />

        <div className="absolute inset-x-0 bottom-0 h-[60%] rounded-b-[7px] border-t border-[#bfab94] bg-[linear-gradient(180deg,#ecdfd0,#e2d0bc)]" />

        <div
          className="absolute bottom-0 left-0 h-[60%] w-1/2 border-r border-[#bca690] bg-[linear-gradient(164deg,#e7d8c7,#dac6af)]"
          style={{ clipPath: "polygon(0 100%,100% 100%,100% 0)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[60%] w-1/2 border-l border-[#bca690] bg-[linear-gradient(196deg,#e7d8c7,#dac6af)]"
          style={{ clipPath: "polygon(0 100%,100% 100%,0 0)" }}
        />

        <div className="absolute inset-x-0 bottom-[46%] h-px bg-[#c6b19a]/70" />
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2)_50%,transparent)] opacity-55" />
        <div className="absolute left-1/2 bottom-[17%] h-[26%] w-px -translate-x-1/2 bg-[#b89f87]/45" />

        <motion.div
          className="absolute inset-x-0 top-0 h-[61%] origin-top overflow-hidden"
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          animate={{ rotateX: flapOpen ? -165 : 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <div
            className="absolute inset-0 border-b border-[#bca793] bg-[linear-gradient(180deg,#f1e5d8,#e5d5c3)]"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }}
          />
          <div
            className="pointer-events-none absolute inset-[10%] border border-[#b79f8a]/65"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }}
          />
          <div className="pointer-events-none absolute left-1/2 top-[7%] h-[72%] w-px -translate-x-1/2 bg-[#c0a892]/55" />
          <div className="pointer-events-none absolute inset-x-[20%] bottom-0 h-px bg-[#c0a892]/55" />
        </motion.div>

        <div className="absolute left-1/2 top-[34%] -translate-x-1/2 text-center">
          <div className="mx-auto flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#8f7660]/55" />
            <p className="font-serif text-[30px] tracking-[0.08em] text-[#4a3a2f]">
              A<span className="px-[3px] text-[15px] align-middle text-[#776050]">&</span>C
            </p>
            <span className="h-px w-7 bg-[#8f7660]/55" />
          </div>
          <p className="mt-1 text-[9px] uppercase tracking-[0.32em] text-[#6a5546]">Wedding Invitation</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#7a6556]">
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
