import { Users, ShieldCheck, Wrench, Cog, Headset } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const FEATURES = [
  {
    icon: Users,
    title: "Experienced Diving Teams",
    desc: "Surface-supplied and SCUBA qualified personnel with field experience across regional marine works.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-Driven Operations",
    desc: "Risk assessment, dive planning and emergency preparedness built into every mobilisation.",
  },
  {
    icon: Wrench,
    title: "Specialized Equipment",
    desc: "Diving spreads, underwater tools, ROV support and marine plant configured to project scope.",
  },
  {
    icon: Cog,
    title: "Technical Marine Expertise",
    desc: "Engineered approach to inspection, construction, repair and subsea intervention challenges.",
  },
  {
    icon: Headset,
    title: "Responsive Project Support",
    desc: "Mobilisation, reporting and documentation aligned to client and contractor requirements.",
  },
];

export default function WhyOceanmak() {
  return (
    <section id="why" className="bg-abyss-2 section-rule">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel index="SECTION // 02" className="mb-6">
              Why Oceanmak
            </SectionLabel>
            <h2 className="font-display font-bold uppercase text-white text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em]">
              Built on capability, <span className="text-precision">not claims</span>
            </h2>
          </div>
          <p className="text-white/55 max-w-md text-[15px] leading-relaxed">
            A structured, engineering-led approach to commercial diving and marine
            contracting — focused on safe, repeatable execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 0.08}
              className={`group relative bg-abyss p-8 lg:p-9 hover:bg-abyss-2 transition-colors ${
                i >= 3 ? "lg:col-span-1" : ""
              }`}
            >
              <span className="label-mono text-faint/60">0{i + 1}</span>
              <f.icon className="mt-5 text-precision" size={30} strokeWidth={1.5} />
              <h3 className="mt-5 font-display font-semibold text-white text-lg leading-snug">
                {f.title}
              </h3>
              <p className="mt-3 text-white/55 text-sm leading-relaxed">{f.desc}</p>
              <span className="corner-accent" />
            </Reveal>
          ))}
          {/* filler cell to keep grid balanced */}
          <div className="hidden lg:flex bg-abyss p-8 items-end">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-mono uppercase tracking-[0.15em] text-xs text-precision hover:text-white transition-colors"
            >
              Discuss your scope →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}