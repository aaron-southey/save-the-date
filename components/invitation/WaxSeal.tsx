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
      className="absolute left-1/2 top-[63%] z-20 h-14 w-14 -translate-x-1/2 rounded-full border border-[#6a2427]/70 bg-[radial-gradient(circle_at_26%_24%,#bd6c63,#812f31_62%,#662325)] shadow-[0_12px_28px_rgba(65,20,21,0.42)] outline-none focus-visible:ring-2 focus-visible:ring-[#8f7461] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5efe4] disabled:cursor-not-allowed"
      animate={{
        scale: isPressed ? 0.92 : isReleased ? 0.5 : 1,
        opacity: isReleased ? 0 : 1,
        rotate: isReleased ? 8 : 0,
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-[13px] font-serif tracking-[0.16em] text-[#f7ebe0]">A&C</span>
    </motion.button>
  );
}
