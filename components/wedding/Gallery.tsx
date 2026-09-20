import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";
import { wedding } from "@/lib/wedding";

const spans = ["md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-2"];

export function Gallery() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 md:py-32" id="photography">
      <p className="text-xs uppercase tracking-[0.26em] text-[#756a63]">Photography</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {wedding.images.gallery.map((src, index) => (
          <FadeIn
            key={src}
            className={`overflow-hidden rounded-sm ${spans[index % spans.length]}`}
            delay={index * 0.08}
          >
            <Image
              src={src}
              alt={`Editorial gallery image placeholder ${index + 1} for Aaron and Charlotte.`}
              width={1600}
              height={1000}
              className="h-[16rem] w-full object-cover sm:h-[22rem]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
