"use client";

import { motion } from "framer-motion";

type WaxSealProps = {
  onOpen: () => void;
  isPressed: boolean;
  isReleased: boolean;
  disabled?: boolean;
};

export function WaxSeal({ onOpen, isPressed, isReleased, disabled }: WaxSealProps) {
  return (
    <motion.button
      type="button"
      aria-label="Open invitation"
      onClick={onOpen}
      disabled={disabled}
      className="absolute left-1/2 top-[65%] z-20 h-[58px] w-[58px] -translate-x-1/2 rounded-full border border-[#6b4a35]/80 bg-[radial-gradient(circle_at_30%_26%,#a57a5e,#855d43_56%,#64422f)] shadow-[0_16px_28px_rgba(57,40,30,0.4)] outline-none focus-visible:ring-2 focus-visible:ring-[#8f7461] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5efe4] disabled:cursor-not-allowed"
      animate={{
        scale: isPressed ? 0.92 : isReleased ? 0.5 : 1,
        opacity: isReleased ? 0 : 1,
        rotate: isReleased ? 8 : 0,
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-[11px] font-serif tracking-[0.16em] text-[#fbf2e9]">A&C</span>
    </motion.button>
  );
}
