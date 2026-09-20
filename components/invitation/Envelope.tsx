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
        className="relative aspect-[1.65/1] overflow-hidden rounded-[6px] border border-[#d8c8b0] bg-[linear-gradient(160deg,#f8f1e4_0%,#efe2d0_48%,#e7d8c2_100%)] shadow-[0_28px_56px_rgba(43,34,28,0.22)]"
        animate={{ y: pressed ? 4 : 0, rotateZ: pressed ? -0.35 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_15%,rgba(255,255,255,0.62),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(131,107,86,0.1),transparent_44%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply paper-grain" />
        <div className="absolute inset-[10px] rounded-[4px] border border-[#cdbba3]/75" />

        <div className="absolute inset-x-0 bottom-0 h-[60%] rounded-b-[5px] border-t border-[#cab69e] bg-[linear-gradient(180deg,#efe2cf,#e6d5be)]" />

        <div
          className="absolute bottom-0 left-0 h-[60%] w-1/2 border-r border-[#c9b59c] bg-[linear-gradient(164deg,#eadfcd,#dfccb4)]"
          style={{ clipPath: "polygon(0 100%,100% 100%,100% 0)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[60%] w-1/2 border-l border-[#c9b59c] bg-[linear-gradient(196deg,#eadfcd,#dfccb4)]"
          style={{ clipPath: "polygon(0 100%,100% 100%,0 0)" }}
        />

        <div className="absolute inset-x-0 bottom-[46%] h-px bg-[#cfbca2]/70" />
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2)_50%,transparent)] opacity-60" />

        <motion.div
          className="absolute inset-x-0 top-0 h-[61%] origin-top overflow-hidden"
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          animate={{ rotateX: flapOpen ? -165 : 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <div
            className="absolute inset-0 border-b border-[#cbb79d] bg-[linear-gradient(180deg,#f5edde,#ecdcc7)]"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }}
          />
          <div
            className="pointer-events-none absolute inset-[10%] border border-[#c8b397]/60"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }}
          />
          <div className="pointer-events-none absolute left-1/2 top-[7%] h-[72%] w-px -translate-x-1/2 bg-[#d2c1aa]/65" />
        </motion.div>

        <div className="absolute left-1/2 top-[34%] -translate-x-1/2 text-center">
          <p className="font-serif text-[30px] tracking-[0.06em] text-[#756252]">
            A<span className="px-[3px] text-[15px] text-[#907a68]">&</span>C
          </p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#8a786b]">Wedding Invitation</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#8f8174]">
            {invitee ? `For ${invitee}` : "Private Invitation"}
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
