"use client";

import { useEffect, useState } from "react";
import { OpeningTransition } from "@/components/invitation/OpeningTransition";
import { WeddingExperience } from "@/components/wedding/WeddingExperience";
import { getInviteeFromSearchParams } from "@/lib/invitee";

const STORAGE_KEY = "weddingInvitationOpened";

export function InvitationGate() {
  const [showIntro, setShowIntro] = useState<boolean | null>(null);
  const [invitee, setInvitee] = useState<string | null>(null);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      const hasOpened = window.localStorage.getItem(STORAGE_KEY) === "true";
      setInvitee(getInviteeFromSearchParams(new URLSearchParams(window.location.search)));
      setShowIntro(!hasOpened);
    });

    return () => window.cancelAnimationFrame(raf);
  }, []);

  const completeIntro = () => {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setShowIntro(false);
  };

  const replayIntro = () => {
    setShowIntro(true);
  };

  if (showIntro === null) {
    return <div className="min-h-screen paper-bg" aria-hidden="true" />;
  }

  if (showIntro) {
    return <OpeningTransition onComplete={completeIntro} onSkip={completeIntro} invitee={invitee} />;
  }

  return <WeddingExperience onReplayInvitation={replayIntro} invitee={invitee} />;
}
