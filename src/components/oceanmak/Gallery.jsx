import { useState } from "react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { IMAGES } from "@/lib/oceanmakImages";

const CATEGORIES = [
  "All",
  "Commercial Diving",
  "Underwater Inspection",
  "Marine Construction",
  "Industrial Projects",
  "Aquatic Facilities",
];

const ITEMS = [
  { img: IMAGES.services.welding, cat: "Commercial Diving", title: "Underwater Welding", ratio: "aspect-[4/5]" },
  { img: IMAGES.services.inspection, cat: "Underwater Inspection", title: "Harbour Pylon Inspection", ratio: "aspect-[4/3]" },
  { img: IMAGES.services.marineConstruction, cat: "Marine Construction", title: "Waterfront Works", ratio: "aspect-[3/4]" },
  { img: IMAGES.projects.emiratesSteel, cat: "Industrial Projects", title: "Emirates Steel", ratio: "aspect-[4/3]" },
  { img: IMAGES.projects.seaworld, cat: "Aquatic Facilities", title: "SeaWorld Abu Dhabi", ratio: "aspect-[4/5]" },
  { img: IMAGES.services.construction, cat: "Commercial Diving", title: "Submerged Construction", ratio: "aspect-[4/3]" },
  { img: IMAGES.services.maintenance, cat: "Commercial Diving", title: "Underwater Maintenance", ratio: "aspect-[3/4]" },
  { img: IMAGES.services.pipeline, cat: "Underwater Inspection", title: "Subsea Pipeline Survey", ratio: "aspect-[4/3]" },
  { img: IMAGES.services.salvage, cat: "Marine Construction", title: "Salvage Operation", ratio: "aspect-[4/5]" },
  { img: IMAGES.projects.dubaiMetro, cat: "Industrial Projects", title: "Dubai Metro Blue Line", ratio: "aspect-[4/3]" },
  { img: IMAGES.services.pontoonMarina, cat: "Marine Construction", title: "Pontoon & Marina", ratio: "aspect-[3/4]" },
  { img: IMAGES.services.buoy, cat: "Aquatic Facilities", title: "Barrier Net Installation", ratio: "aspect-[4/3]" },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? ITEMS : ITEMS.filter((i) => i.cat === active);

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
            A visual record of commercial diving, underwater and marine construction
            work across the region.
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

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {filtered.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 0.05}
              className="group relative mb-4 break-inside-avoid overflow-hidden border border-line"
            >
              <div className={`relative ${item.ratio}`}>
                <Image
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-abyss/40 group-hover:bg-abyss/10 transition-colors" />
                <span className="absolute top-3 left-3 label-mono text-precision text-[10px] bg-abyss/60 px-2 py-1">
                  {item.cat}
                </span>
                <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-display font-semibold text-white text-sm">{item.title}</h3>
                </div>
              </div>
              <span className="corner-accent" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}