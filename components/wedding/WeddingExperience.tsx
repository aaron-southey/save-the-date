import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { DateSection } from "@/components/wedding/DateSection";
import { FinalSection } from "@/components/wedding/FinalSection";
import { Gallery } from "@/components/wedding/Gallery";
import { Hero } from "@/components/wedding/Hero";
import { SparkSection } from "@/components/wedding/SparkSection";
import { Story } from "@/components/wedding/Story";
import { Venue } from "@/components/wedding/Venue";

type WeddingExperienceProps = {
  invitee: string | null;
};

export function WeddingExperience({ invitee }: WeddingExperienceProps) {
  return (
    <main className="paper-bg text-[#2c2624]">
      <ScrollProgress />

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
