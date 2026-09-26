import { ArrowUpRight, MapPin } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { IMAGES } from "@/lib/oceanmakImages";

const PROJECTS = [
  {
    key: "seaworld",
    name: "SeaWorld Abu Dhabi",
    location: "Abu Dhabi, UAE",
    category: "Aquatic Facility",
    desc: "Commercial diving and underwater works supporting the marine and aquatic infrastructure of the development.",
  },
  {
    key: "emiratesSteel",
    name: "Emirates Steel Abu Dhabi",
    location: "Abu Dhabi, UAE",
    category: "Heavy Industry",
    desc: "Underwater inspection, maintenance and marine support for the coastal industrial facility.",
  },
  {
    key: "dubaiMetro",
    name: "Dubai Metro Blue Line",
    location: "Dubai, UAE",
    category: "Infrastructure",
    desc: "Marine and diving support for waterway crossings and infrastructure interfaces.",
  },
  {
    key: "emaar",
    name: "Emaar Projects",
    location: "Dubai, UAE",
    category: "Waterfront Development",
    desc: "Underwater inspection, maintenance and marine works across Emaar waterfront developments.",
  },
];

const goContact = (e) => {
  e.preventDefault();
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
};

export default function Projects() {
  return (
    <section id="projects" className="bg-abyss section-rule">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel index="SECTION // 05" className="mb-6">
              Project Experience
            </SectionLabel>
            <h2 className="font-display font-bold uppercase text-white text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em]">
              Selected Project <span className="text-precision">Experience</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-md text-[15px] leading-relaxed">
            A record of regional delivery on landmark marine, industrial and
            infrastructure projects across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-line border border-line">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.key}
              delay={(i % 2) * 0.1}
              className="group relative bg-abyss hover:bg-abyss-2 transition-colors flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={IMAGES.projects[p.key]}
                  alt={p.name}
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-500"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss/90 to-transparent" />
                <span className="absolute top-4 left-4 bg-precision text-abyss label-mono px-2.5 py-1">
                  {p.category}
                </span>
                <span className="absolute top-4 right-4 label-mono text-white/70">
                  PRJ // 0{i + 1}
                </span>
              </div>
              <div className="p-7 lg:p-8 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-white text-xl lg:text-2xl leading-snug">
                  {p.name}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-precision text-sm">
                  <MapPin size={14} /> {p.location}
                </div>
                <p className="mt-4 text-white/60 text-sm leading-relaxed flex-1">{p.desc}</p>
                <a
                  href="#contact"
                  onClick={goContact}
                  className="mt-6 inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.15em] text-[11px] text-white border border-line px-4 py-2.5 hover:border-precision hover:text-precision transition-colors w-fit"
                >
                  View Mission Specs <ArrowUpRight size={13} />
                </a>
                <span className="corner-accent" />
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-faint/60">
          // Project details presented for reference only. Specific scope, values and
          contract terms available on request.
        </p>
      </div>
    </section>
  );
}