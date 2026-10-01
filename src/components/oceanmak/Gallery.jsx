import { useState } from "react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const CATEGORIES = [
  "All",
  "Commercial Diving",
  "Underwater Inspection",
  "Marine Construction",
  "Industrial Projects",
  "Aquatic Facilities",
];

const GALLERY_IMAGES = import.meta.glob(
  "../../assests/images/gallery/*.{avif,gif,jpg,jpeg,png,webp}",
  { eager: true, import: "default", query: "?url" },
);

const ITEMS = Object.entries(GALLERY_IMAGES).map(([path, img]) => {
  const filename = path
    .split("/")
    .pop()
    .replace(/\.[^.]+$/, "");
  const normalizedFilename = filename.toLowerCase().replace(/[-_]+/g, " ");
  const cat = CATEGORIES.slice(1).find((category) =>
    normalizedFilename.includes(category.toLowerCase()),
  );

  return {
    img,
    cat,
    title: filename
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase()),
    ratio: "aspect-[4/3]",
  };
});

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? ITEMS : ITEMS.filter((i) => i.cat === active);

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

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-line pb-5">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`label-mono px-4 py-2 border transition-colors ${
                active === c
                  ? "bg-precision text-abyss border-precision"
                  : "text-white/60 border-line hover:text-precision hover:border-precision/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
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
                <span className="absolute top-3 left-3 label-mono text-precision text-[10px] bg-abyss/60 px-2 py-1">
                  {item.cat}
                </span>
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
