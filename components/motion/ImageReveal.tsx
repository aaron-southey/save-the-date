"use client";

import Image, { type ImageProps } from "next/image";
import { motion } from "framer-motion";

type ImageRevealProps = ImageProps & {
  containerClassName?: string;
};

export function ImageReveal({ containerClassName, ...props }: ImageRevealProps) {
  const { alt, ...imageProps } = props;

  return (
    <motion.div
      className={containerClassName}
      initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image alt={alt ?? ""} {...imageProps} />
      </motion.div>
    </motion.div>
  );
}
