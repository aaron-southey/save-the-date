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
        className="relative aspect-[1.65/1] overflow-hidden rounded-[6px] border border-[#bda791] bg-[linear-gradient(160deg,#d7c2ae_0%,#bfa58e_48%,#aa8d74_100%)] shadow-[0_30px_60px_rgba(34,24,18,0.3)]"
        animate={{ y: pressed ? 4 : 0, rotateZ: pressed ? -0.35 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_15%,rgba(255,255,255,0.34),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(58,44,34,0.22),transparent_44%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply paper-grain" />
        <div className="absolute inset-[10px] rounded-[4px] border border-[#ad947d]/75" />

        <div className="absolute inset-x-0 bottom-0 h-[60%] rounded-b-[5px] border-t border-[#a98e76] bg-[linear-gradient(180deg,#d4baa2,#b5987d)]" />

        <div
          className="absolute bottom-0 left-0 h-[60%] w-1/2 border-r border-[#a68a72] bg-[linear-gradient(164deg,#ccb097,#b08f73)]"
          style={{ clipPath: "polygon(0 100%,100% 100%,100% 0)" }}
        />
        <div
          className="absolute bottom-0 right-0 h-[60%] w-1/2 border-l border-[#a68a72] bg-[linear-gradient(196deg,#ccb097,#b08f73)]"
          style={{ clipPath: "polygon(0 100%,100% 100%,0 0)" }}
        />

        <div className="absolute inset-x-0 bottom-[46%] h-px bg-[#aa8f76]/70" />
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14)_50%,transparent)] opacity-50" />

        <motion.div
          className="absolute inset-x-0 top-0 h-[61%] origin-top overflow-hidden"
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          animate={{ rotateX: flapOpen ? -165 : 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <div
            className="absolute inset-0 border-b border-[#a98d75] bg-[linear-gradient(180deg,#dcc5ad,#c4a587)]"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }}
          />
          <div
            className="pointer-events-none absolute inset-[10%] border border-[#9f836a]/60"
            style={{ clipPath: "polygon(0 0,100% 0,50% 100%)" }}
          />
          <div className="pointer-events-none absolute left-1/2 top-[7%] h-[72%] w-px -translate-x-1/2 bg-[#a88d74]/60" />
        </motion.div>

        <div className="absolute left-1/2 top-[34%] -translate-x-1/2 text-center">
          <p className="font-serif text-[30px] tracking-[0.06em] text-[#4b3528]">
            A<span className="px-[3px] text-[15px] text-[#6b4c38]">&</span>C
          </p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#5c4535]">Wedding Invitation</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#6a5546]">
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
