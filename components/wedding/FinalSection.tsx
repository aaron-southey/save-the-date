import { CalendarButton } from "@/components/wedding/CalendarButton";
import { wedding } from "@/lib/wedding";

export function FinalSection() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-24 text-center sm:px-10 md:py-36" id="save-the-date">
      <p className="font-serif text-4xl text-[#2c2624] sm:text-6xl">We’d love you to be there.</p>
      <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[#746963]">{wedding.couple.names}</p>
      <p className="mt-3 text-xs uppercase tracking-[0.28em] text-[#8a7d75]">{wedding.dateDisplay}</p>
      <div className="mt-10 flex justify-center">
        <CalendarButton />
      </div>
    </section>
  );
}
