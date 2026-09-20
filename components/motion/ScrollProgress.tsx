"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-[linear-gradient(90deg,rgba(90,74,63,0.6),rgba(54,50,48,0.8))]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
