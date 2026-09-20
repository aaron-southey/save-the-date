import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { CalendarButton } from "@/components/wedding/CalendarButton";
import { DateSection } from "@/components/wedding/DateSection";
import { FinalSection } from "@/components/wedding/FinalSection";
import { Gallery } from "@/components/wedding/Gallery";
import { Hero } from "@/components/wedding/Hero";
import { Story } from "@/components/wedding/Story";
import { Venue } from "@/components/wedding/Venue";
import { wedding } from "@/lib/wedding";

type WeddingExperienceProps = {
  onReplayInvitation: () => void;
};

export function WeddingExperience({ onReplayInvitation }: WeddingExperienceProps) {
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

      <Hero />
      <Story />
      <DateSection />
      <Gallery />
      <Venue />

      <section className="mx-auto w-full max-w-6xl px-6 py-18 sm:px-10 sm:py-24 md:py-32">
        <p className="font-serif text-4xl text-[#2f2826] sm:text-7xl">Save the date</p>
        <p className="mt-6 text-sm uppercase tracking-[0.28em] text-[#746963]">{wedding.dateDisplay}</p>
        <div className="mt-10">
          <CalendarButton />
        </div>
      </section>

      <FinalSection />
    </main>
  );
}
