import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { DateSection } from "@/components/wedding/DateSection";
import { FinalSection } from "@/components/wedding/FinalSection";
import { Gallery } from "@/components/wedding/Gallery";
import { Hero } from "@/components/wedding/Hero";
import { SparkSection } from "@/components/wedding/SparkSection";
import { Story } from "@/components/wedding/Story";
import { Venue } from "@/components/wedding/Venue";

type WeddingExperienceProps = {
  onReplayInvitation: () => void;
  invitee: string | null;
};

export function WeddingExperience({ onReplayInvitation, invitee }: WeddingExperienceProps) {
  return (
    <main className="paper-bg text-[#2c2624]">
      <ScrollProgress />

      <button
        type="button"
        onClick={onReplayInvitation}
        className="safe-bottom fixed left-1/2 z-40 min-h-11 -translate-x-1/2 rounded-full border border-[#cbb9a5] bg-[#f3ebde]/95 px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-[#5d534d] backdrop-blur transition hover:bg-[#ece2d4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8f7461] sm:left-auto sm:right-5 sm:top-5 sm:bottom-auto sm:translate-x-0"
      >
        View invitation again
      </button>

      <Hero invitee={invitee} />
      <Story />
      <SparkSection />
      <DateSection />
      <Gallery />
      <Venue />

      <FinalSection />
    </main>
  );
}
