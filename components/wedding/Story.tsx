import { ImageReveal } from "@/components/motion/ImageReveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { wedding } from "@/lib/wedding";

export function Story() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-18 sm:px-10 sm:py-24 md:grid-cols-[1.05fr,1fr] md:py-32" id="story">
      <div>
        <TextReveal
          text={wedding.story.heading}
          as="h2"
          className="font-serif text-3xl leading-tight text-[#282322] sm:text-5xl"
        />
        <p className="mt-6 max-w-lg text-base leading-relaxed text-[#504843] sm:mt-8 sm:text-lg">{wedding.story.intro}</p>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-[#504843] sm:text-lg">{wedding.story.outro}</p>
      </div>
      <ImageReveal
        src={wedding.images.story}
        alt="Story section image placeholder for Aaron and Charlotte."
        width={1200}
        height={1500}
        className="h-[22rem] w-full object-cover sm:h-[34rem]"
        containerClassName="overflow-hidden rounded-sm"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
      />
    </section>
  );
}
