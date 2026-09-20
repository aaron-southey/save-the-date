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
      className="absolute left-1/2 top-[62%] z-20 h-14 w-14 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ad564d,#7b2f2f)] shadow-[0_10px_30px_rgba(72,21,23,0.35)] outline-none focus-visible:ring-2 focus-visible:ring-[#8f7461] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5efe4] disabled:cursor-not-allowed"
      animate={{
        scale: isPressed ? 0.92 : isReleased ? 0.5 : 1,
        opacity: isReleased ? 0 : 1,
        rotate: isReleased ? 8 : 0,
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-sm font-serif tracking-[0.2em] text-[#f7ebe0]">A&C</span>
    </motion.button>
  );
}
