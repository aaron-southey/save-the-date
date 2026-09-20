import { ImageReveal } from "@/components/motion/ImageReveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { wedding } from "@/lib/wedding";

export function Story() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-24 sm:px-10 md:grid-cols-[1.05fr,1fr] md:py-32" id="story">
      <div>
        <TextReveal
          text="It all started with…"
          as="h2"
          className="font-serif text-4xl leading-tight text-[#282322] sm:text-5xl"
        />
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#504843]">{wedding.story.intro}</p>
      </div>
      <ImageReveal
        src={wedding.images.story}
        alt="[ADD COUPLE PHOTO]"
        width={1200}
        height={1500}
        className="h-[26rem] w-full object-cover sm:h-[34rem]"
        containerClassName="overflow-hidden rounded-sm"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </section>
  );
}
