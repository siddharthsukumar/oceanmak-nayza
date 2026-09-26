import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { IMAGES } from "@/lib/oceanmakImages";

const POINTS = [
  "Commercial diving and marine contracting capability built for regional projects.",
  "Experienced personnel and safety-led mobilisation across the UAE and Middle East.",
  "Engineered approach to inspection, construction, repair and subsea intervention.",
  "Commitment to reliable execution, reporting and documentation.",
];

export default function About() {
  return (
    <section id="about" className="bg-abyss section-rule">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <SectionLabel index="SECTION // 09" className="mb-6">
              About Oceanmak
            </SectionLabel>
            <Reveal>
              <h2 className="font-display font-bold uppercase text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.02] tracking-[-0.02em]">
                Your partner below <span className="text-precision">the waterline</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-white/65 leading-relaxed text-[15px] max-w-xl">
                Oceanmak Marine Services LLC is a UAE-based commercial diving and marine
                engineering contractor. We deliver underwater inspection, construction,
                maintenance and marine contracting services for infrastructure, industrial,
                marine and waterfront projects.
              </p>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {POINTS.map((p, i) => (
                <Reveal
                  key={i}
                  delay={0.15 + i * 0.05}
                  className="flex gap-3 items-start border-l border-precision/60 pl-4"
                >
                  <span className="label-mono text-precision pt-1">0{i + 1}</span>
                  <p className="text-white/70 text-sm leading-relaxed">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal delay={0.1} className="relative">
              <div className="relative border border-line overflow-hidden">
                <div className="aspect-[4/3]">
                  <Image
                    src={IMAGES.about}
                    alt="Oceanmak commercial diving team"
                    className="w-full h-full object-cover"
                    fittingType="fill"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-abyss/60 to-transparent" />
                <span className="absolute top-4 left-4 label-mono text-precision">CREW // MOBILISATION</span>
              </div>
              <div className="absolute -bottom-4 -left-4 hidden lg:block border border-precision/40 p-4 bg-abyss-2">
                <div className="font-display font-bold text-precision text-2xl">UAE</div>
                <div className="label-mono text-faint mt-1">Regional Operations</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}