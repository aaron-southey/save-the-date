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
      className="absolute left-1/2 top-[65%] z-20 h-[58px] w-[58px] -translate-x-1/2 rounded-full border border-[#4c2f22]/75 bg-[radial-gradient(circle_at_28%_25%,#8f6147,#6f462f_58%,#503122)] shadow-[0_14px_26px_rgba(43,27,20,0.42)] outline-none focus-visible:ring-2 focus-visible:ring-[#8f7461] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5efe4] disabled:cursor-not-allowed"
      animate={{
        scale: isPressed ? 0.92 : isReleased ? 0.5 : 1,
        opacity: isReleased ? 0 : 1,
        rotate: isReleased ? 8 : 0,
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-[12px] font-serif tracking-[0.12em] text-[#f2e3d5]">A · C</span>
    </motion.button>
  );
}
