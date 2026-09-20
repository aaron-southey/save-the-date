"use client";

import { useEffect, useState } from "react";
import { OpeningTransition } from "@/components/invitation/OpeningTransition";
import { WeddingExperience } from "@/components/wedding/WeddingExperience";
import { getInviteeFromSearchParams } from "@/lib/invitee";

export function InvitationGate() {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [invitee, setInvitee] = useState<string | null>(null);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      const params = new URLSearchParams(window.location.search);
      setInvitee(getInviteeFromSearchParams(params));
      setMounted(true);
    });

    return () => window.cancelAnimationFrame(raf);
  }, []);

  const completeIntro = () => {
    setShowIntro(false);
  };

  if (!mounted) {
    return <div className="min-h-screen paper-bg" aria-hidden="true" />;
  }

  if (showIntro) {
    return <OpeningTransition onComplete={completeIntro} invitee={invitee} />;
  }

  return <WeddingExperience invitee={invitee} />;
}
