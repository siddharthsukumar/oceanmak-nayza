import { Anchor, Flame, Building2, Zap, Factory, Droplets, Hotel, Waves } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const INDUSTRIES = [
  { icon: Anchor, name: "Marine & Ports" },
  { icon: Flame, name: "Oil & Gas" },
  { icon: Building2, name: "Infrastructure" },
  { icon: Zap, name: "Power & Utilities" },
  { icon: Factory, name: "Steel & Heavy Industry" },
  { icon: Droplets, name: "Water & Wastewater" },
  { icon: Hotel, name: "Hospitality & Resorts" },
  { icon: Waves, name: "Aquatic & Entertainment Facilities" },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-abyss-2 section-rule">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-28">
        <div className="mb-14">
          <SectionLabel index="SECTION // 04" className="mb-6">
            Industries
          </SectionLabel>
          <h2 className="font-display font-bold uppercase text-white text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em]">
            Industries We Serve
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {INDUSTRIES.map((ind, i) => (
            <Reveal
              key={ind.name}
              delay={(i % 4) * 0.06}
              className="group relative bg-abyss p-7 lg:p-8 hover:bg-abyss-2 transition-colors min-h-[160px] flex flex-col justify-between"
            >
              <ind.icon className="text-precision group-hover:scale-110 transition-transform" size={28} strokeWidth={1.5} />
              <h3 className="mt-6 font-display font-semibold text-white text-[15px] leading-snug">
                {ind.name}
              </h3>
              <span className="label-mono text-faint/50 absolute top-4 right-4">0{i + 1 < 10 ? "0" + (i + 1) : i + 1}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}