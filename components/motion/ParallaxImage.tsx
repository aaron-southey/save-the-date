"use client";

import Image, { type ImageProps } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxImageProps = ImageProps & {
  containerClassName?: string;
  offset?: number;
};

export function ParallaxImage({ containerClassName, offset = 40, ...props }: ParallaxImageProps) {
  const { alt, ...imageProps } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={containerClassName}>
      <motion.div style={{ y }}>
        <Image alt={alt ?? ""} {...imageProps} />
      </motion.div>
    </div>
  );
}
