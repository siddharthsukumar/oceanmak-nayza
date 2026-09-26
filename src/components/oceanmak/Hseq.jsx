import { ClipboardCheck, Compass, LifeBuoy, Leaf, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const POINTS = [
  { icon: ClipboardCheck, title: "Risk Assessment", desc: "Methodical hazard identification and mitigation before mobilisation." },
  { icon: Compass, title: "Dive Planning", desc: "Detailed dive plans, gas management and surface support protocols." },
  { icon: LifeBuoy, title: "Emergency Preparedness", desc: "Standby divers, rescue procedures and first-aid readiness on site." },
  { icon: Leaf, title: "Environmental Responsibility", desc: "Controls to protect the marine environment throughout operations." },
];

const goContact = (e) => {
  e.preventDefault();
  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
};

export default function Hseq() {
  return (
    <section id="hseq" className="relative bg-[hsl(222,52%,6%)] section-rule overflow-hidden">
      <div className="grid-lines absolute inset-0 opacity-[0.12] pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel index="SECTION // 06" className="mb-6">
              HSEQ
            </SectionLabel>
            <Reveal>
              <h2 className="font-display font-bold uppercase text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.02em]">
                Safety is part of <span className="text-precision">every dive</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-white/65 leading-relaxed text-[15px] max-w-md">
                Oceanmak integrates health, safety, environmental and quality
                considerations into every stage of marine and diving operations — from
                planning and risk assessment through execution and demobilisation.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href="#contact"
                onClick={goContact}
                className="mt-8 inline-flex items-center gap-2 border border-precision text-precision font-mono uppercase tracking-[0.15em] text-xs font-semibold px-6 py-4 hover:bg-precision hover:text-abyss transition-colors"
              >
                View Our HSEQ <ArrowRight size={14} />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-line border border-line">
            {POINTS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={(i % 2) * 0.08}
                className="bg-[hsl(222,52%,6%)] p-7 lg:p-8 hover:bg-abyss transition-colors"
              >
                <p.icon className="text-precision" size={28} strokeWidth={1.5} />
                <h3 className="mt-5 font-display font-semibold text-white text-lg">{p.title}</h3>
                <p className="mt-2 text-white/55 text-sm leading-relaxed">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}