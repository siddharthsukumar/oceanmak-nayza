import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const STATS = [
  { value: "UAE", label: "Regional Base" },
  { value: "12+", label: "Core Service Lines" },
  { value: "24/7", label: "Project Response" },
  { value: "IMCA", label: "Aligned Practice" },
];

export default function Introduction() {
  return (
    <section id="intro" className="relative bg-abyss section-rule">
      <div className="grid-lines absolute inset-0 opacity-[0.15] pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionLabel index="SECTION // 01" className="mb-7">
              Introduction
            </SectionLabel>
            <Reveal>
              <h2 className="font-display font-bold uppercase text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.02em]">
                Engineered for the challenges <br className="hidden lg:block" />
                below the waterline
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-2">
            <Reveal delay={0.1}>
              <p className="text-white/70 leading-relaxed text-[15px]">
                Oceanmak delivers commercial diving and marine contracting solutions
                for infrastructure, industrial, marine, aquatic and waterfront projects.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed text-[15px]">
                From underwater inspection and construction to maintenance, salvage and
                subsea support — our teams work to engineered specifications across the
                UAE and the wider Middle East.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Stat ledger */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 border border-line">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`p-6 lg:p-8 ${i < STATS.length - 1 ? "border-r border-line" : ""} ${
                i < 2 ? "border-b lg:border-b-0 border-line" : ""
              }`}
            >
              <div className="font-display font-bold text-3xl lg:text-4xl text-precision">
                {s.value}
              </div>
              <div className="mt-2 label-mono text-faint">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}