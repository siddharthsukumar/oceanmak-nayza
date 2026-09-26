import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { IMAGES } from "@/lib/oceanmakImages";

const CAPABILITIES = [
  { img: IMAGES.services.welding, title: "Commercial Diving Equipment", tag: "DIV // 01" },
  { img: IMAGES.services.inspection, title: "Diving Control & Spread", tag: "DIV // 02" },
  { img: IMAGES.services.searchRecovery, title: "ROV / Underwater Inspection", tag: "ROV // 03" },
  { img: IMAGES.services.salvage, title: "Marine Boats & Work Platforms", tag: "MAR // 04" },
  { img: IMAGES.services.maintenance, title: "Underwater Tools & Hydraulics", tag: "TL // 05" },
  { img: IMAGES.services.pipeline, title: "Subsea Intervention Systems", tag: "SUB // 06" },
];

export default function Capability() {
  return (
    <section id="capability" className="bg-abyss section-rule">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel index="SECTION // 07" className="mb-6">
              Equipment & Capability
            </SectionLabel>
            <h2 className="font-display font-bold uppercase text-white text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em]">
              Capability to execute <br className="hidden lg:block" />
              <span className="text-precision">complex marine works</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-md text-[15px] leading-relaxed">
            Representative equipment and technical capabilities mobilised for project
            scope. Specific plant configured to each requirement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {CAPABILITIES.map((c, i) => (
            <Reveal
              key={c.title}
              delay={(i % 3) * 0.06}
              className="group relative bg-abyss hover:bg-abyss-2 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-abyss/45 group-hover:bg-abyss/15 transition-colors" />
                <span className="absolute top-3 left-3 label-mono text-precision text-[10px]">
                  {c.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-white text-base">{c.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-faint/60">
          // Equipment presented as representative capability. Confirmation of ownership
          and certification available on request.
        </p>
      </div>
    </section>
  );
}