"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { PropsWithChildren } from "react";

type FadeInProps = PropsWithChildren<
  HTMLMotionProps<"div"> & {
    delay?: number;
    y?: number;
  }
>;

export function FadeIn({ children, delay = 0, y = 24, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
