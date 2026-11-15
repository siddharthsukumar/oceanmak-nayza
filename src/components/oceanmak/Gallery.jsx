import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const GALLERY_IMAGES = import.meta.glob(
  "../../assests/images/gallery/*.{avif,gif,jpg,jpeg,png,webp}",
  { eager: true, import: "default", query: "?url" },
);

const ITEMS = Object.entries(GALLERY_IMAGES).map(([path, img]) => {
  const filename = path
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "");

  return {
    img,
    title: filename
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase()),
    ratio: "aspect-[4/3]",
  };
});

export default function Gallery() {
  return (
    <section id="gallery" className="bg-abyss-2 section-rule">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <SectionLabel index="SECTION // 08" className="mb-6">
              Project Gallery
            </SectionLabel>
            <h2 className="font-display font-bold uppercase text-white text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em]">
              Project Gallery
            </h2>
          </div>
          <p className="text-white/55 max-w-md text-[15px] leading-relaxed">
            A visual record of commercial diving, underwater and marine
            construction work across the region.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {ITEMS.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 0.05}
              className="group relative overflow-hidden border border-line"
            >
              <div className={`relative ${item.ratio}`}>
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  fittingType="fill"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-abyss/40 group-hover:bg-abyss/10 transition-colors" />
                {/* <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-display font-semibold text-white text-sm">
                    {item.title}
                  </h3>
                </div> */}
              </div>
              <span className="corner-accent" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
