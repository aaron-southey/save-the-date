import { ImageReveal } from "@/components/motion/ImageReveal";
import { wedding } from "@/lib/wedding";

export function SparkSection() {
  return (
    <section
      className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-18 sm:px-10 sm:py-24 md:grid-cols-[1fr,1.05fr] md:py-32"
      id="spark"
    >
      <ImageReveal
        src={wedding.images.dog}
        alt={wedding.dog.imageAlt}
        width={1200}
        height={1500}
        className="h-[22rem] w-full object-cover sm:h-[34rem]"
        containerClassName="overflow-hidden rounded-sm"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
      />
      <div>
        <p className="text-xs uppercase tracking-[0.26em] text-[#756a63]">Family</p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-[#282322] sm:text-5xl">{wedding.dog.heading}</h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-[#504843] sm:text-lg">{wedding.dog.intro}</p>
      </div>
    </section>
  );
}
