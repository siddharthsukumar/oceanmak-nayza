import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { IMAGES } from "@/lib/oceanmakImages";

const SERVICES = [
  { key: "inspection", title: "Underwater Inspection & Survey", desc: "Condition, CP and structural inspection of submerged assets to engineering specification." },
  { key: "construction", title: "Underwater Construction", desc: "Placement, alignment and assembly of submerged structures and structural elements." },
  { key: "maintenance", title: "Underwater Maintenance & Repair", desc: "Planned and reactive maintenance keeping marine assets in operational condition." },
  { key: "searchRecovery", title: "Search & Recovery", desc: "Targeted underwater search and recovery of equipment, materials and assets." },
  { key: "salvage", title: "Salvage", desc: "Recovery and refloat support for vessels, equipment and submerged objects." },
  { key: "marineConstruction", title: "Marine Construction", desc: "Quayside, jetty and waterfront construction support with diving and marine plant." },
  { key: "pipeline", title: "Subsea / Pipeline Support", desc: "Inspection, support and intervention for subsea pipelines and offshore infrastructure." },
  { key: "pontoonMarina", title: "Pontoon & Marina Works", desc: "Installation, maintenance and repair of pontoons and marina infrastructure." },
  { key: "mooring", title: "Mooring & Anchor Installation", desc: "Mooring system installation, inspection and maintenance for vessels and facilities." },
  { key: "silt", title: "Silt Removal & Underwater Airlifting", desc: "Sediment and silt removal using airlift and dredging methods below the waterline." },
  { key: "welding", title: "Underwater Welding & Cutting", desc: "Wet welding and cutting for structural repair and modification underwater." },
  { key: "buoy", title: "Buoy & Jellyfish Net Installation", desc: "Deployment and maintenance of marine buoys and exclusion / barrier net systems." },
];

const goContact = (e) => {
  e.preventDefault();
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
};

export default function Services() {
  return (
    <section id="services" className="bg-abyss section-rule">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel index="SECTION // 03" className="mb-6">
              Core Services
            </SectionLabel>
            <h2 className="font-display font-bold uppercase text-white text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em]">
              Our Core Services
            </h2>
          </div>
          <p className="text-white/55 max-w-md text-[15px] leading-relaxed">
            Twelve specialist service lines covering the full spectrum of commercial
            diving, underwater engineering and marine contracting work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.key}
              delay={(i % 3) * 0.06}
              className="group relative bg-abyss hover:bg-abyss-2 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={IMAGES.services[s.key]}
                  alt={s.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-abyss/40 group-hover:bg-abyss/10 transition-colors" />
                <span className="absolute top-3 left-3 label-mono text-precision text-[10px]">
                  SVC // 0{i + 1 < 10 ? "0" + (i + 1) : i + 1}
                </span>
              </div>
              <div className="relative p-6 lg:p-7">
                <h3 className="font-display font-semibold text-white text-lg leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-white/55 text-sm leading-relaxed">{s.desc}</p>
                <a
                  href="#contact"
                  onClick={goContact}
                  className="mt-5 inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.15em] text-[11px] text-precision hover:text-white transition-colors"
                >
                  Learn More <ArrowUpRight size={13} />
                </a>
                <span className="corner-accent" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}