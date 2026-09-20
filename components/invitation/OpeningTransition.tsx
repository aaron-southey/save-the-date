"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Envelope } from "@/components/invitation/Envelope";
import { InvitationCard } from "@/components/invitation/InvitationCard";

type OpeningTransitionProps = {
  onComplete: () => void;
  onSkip: () => void;
  invitee: string | null;
};

export function OpeningTransition({ onComplete, onSkip, invitee }: OpeningTransitionProps) {
  const reduceMotion = useReducedMotion();
  const [pressed, setPressed] = useState(false);
  const [released, setReleased] = useState(false);
  const [flapOpen, setFlapOpen] = useState(false);
  const [cardReveal, setCardReveal] = useState(false);
  const [transitionOut, setTransitionOut] = useState(false);
  const [opened, setOpened] = useState(false);
  const timeoutIds = useRef<number[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(
    () => () => {
      timeoutIds.current.forEach((id) => window.clearTimeout(id));
      timeoutIds.current = [];
    },
    [],
  );

  const schedule = (callback: () => void, delay: number) => {
    const id = window.setTimeout(callback, delay);
    timeoutIds.current.push(id);
  };

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);

    if (reduceMotion) {
      setReleased(true);
      setFlapOpen(true);
      setCardReveal(true);
      setTransitionOut(true);
      schedule(onComplete, 260);
      return;
    }

    setPressed(true);
    schedule(() => {
      setPressed(false);
      setReleased(true);
    }, 180);
    schedule(() => setFlapOpen(true), 320);
    schedule(() => setCardReveal(true), 700);
    schedule(() => setTransitionOut(true), 1550);
    schedule(onComplete, 2450);
  };

  useEffect(() => {
    if (!cardReveal) return;
    const raf = window.requestAnimationFrame(() => cardRef.current?.focus());
    return () => window.cancelAnimationFrame(raf);
  }, [cardReveal]);

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-4 paper-bg">
      <div className="paper-grain pointer-events-none absolute inset-0" />

      <button
        type="button"
        onClick={onSkip}
        className="safe-top absolute right-4 z-30 min-h-11 rounded-full border border-[#cdbca9] px-5 py-2 text-xs uppercase tracking-[0.2em] text-[#5f564f] transition hover:bg-[#efe5d6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f7461] sm:right-6"
      >
        Skip intro
      </button>

      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Envelope
          onOpen={handleOpen}
          pressed={pressed}
          released={released}
          flapOpen={flapOpen}
          disabled={opened}
          invitee={invitee}
        />

        <InvitationCard
          reveal={cardReveal}
          transitionOut={transitionOut}
          invitee={invitee}
          focusRef={cardRef}
        />
      </motion.div>
    </section>
  );
}
