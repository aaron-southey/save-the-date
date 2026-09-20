"use client";

import { motion } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
};

export function TextReveal({ text, className, delay = 0, as = "span" }: TextRevealProps) {
  const Comp = motion[as];

  return (
    <Comp className={className} initial="hidden" whileInView="show" viewport={{ once: true }}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom mr-[0.35ch]"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              show: {
                y: "0%",
                opacity: 1,
                transition: {
                  delay: delay + index * 0.06,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </Comp>
  );
}
