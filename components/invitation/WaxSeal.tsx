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
      className="absolute left-1/2 top-[65%] z-20 h-[58px] w-[58px] -translate-x-1/2 rounded-full border border-[#6c2328]/70 bg-[radial-gradient(circle_at_28%_25%,#bf6f66,#8b3236_58%,#642226)] shadow-[0_14px_26px_rgba(62,20,21,0.4)] outline-none focus-visible:ring-2 focus-visible:ring-[#8f7461] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5efe4] disabled:cursor-not-allowed"
      animate={{
        scale: isPressed ? 0.92 : isReleased ? 0.5 : 1,
        opacity: isReleased ? 0 : 1,
        rotate: isReleased ? 8 : 0,
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-[12px] font-serif tracking-[0.12em] text-[#f7ebe0]">A · C</span>
    </motion.button>
  );
}
