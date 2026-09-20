"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type MagneticButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function MagneticButton({ children, className = "", ...props }: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLButtonElement>(null);

  const onMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.div whileTap={{ scale: 0.98 }} className="inline-block">
      <button
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`transition-transform duration-200 ease-out ${className}`}
        {...props}
      >
        {children}
      </button>
    </motion.div>
  );
}
