"use client";

import { useEffect, useState } from "react";
import { OpeningTransition } from "@/components/invitation/OpeningTransition";
import { WeddingExperience } from "@/components/wedding/WeddingExperience";
import { getInviteeFromSearchParams, getInviteeStorageKey } from "@/lib/invitee";

const DEFAULT_STORAGE_KEY = "weddingInvitationOpened:default";

export function InvitationGate() {
  const [showIntro, setShowIntro] = useState<boolean | null>(null);
  const [invitee, setInvitee] = useState<string | null>(null);
  const [storageKey, setStorageKey] = useState(DEFAULT_STORAGE_KEY);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      const nextStorageKey = getInviteeStorageKey(params);
      const hasOpened = window.localStorage.getItem(nextStorageKey) === "true";

      setStorageKey(nextStorageKey);
      setInvitee(getInviteeFromSearchParams(params));
      setShowIntro(!hasOpened);
    });

    return () => window.cancelAnimationFrame(raf);
  }, []);

  const completeIntro = () => {
    window.localStorage.setItem(storageKey, "true");
    setShowIntro(false);
  };

  const replayIntro = () => {
    window.localStorage.removeItem(storageKey);
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
