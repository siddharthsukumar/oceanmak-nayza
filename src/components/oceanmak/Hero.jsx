import { ArrowRight, ChevronDown } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/oceanmakImages";

const scrollTo = (href) => (e) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end overflow-hidden bg-abyss-2">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Commercial diver helmet reflecting a subsea welding arc"
          className="w-full h-full object-cover"
          fittingType="fill" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/80 to-abyss/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss/90 via-abyss/20 to-transparent" />
      </div>

      {/* HUD coordinates */}
      <div className="pointer-events-none absolute top-24 right-6 hidden lg:block text-right font-mono text-precision/70 text-[11px] leading-relaxed">
        <div>LAT  25°24′N</div>
        <div>LON  55°26′E</div>
        <div className="mt-2 text-white/40">DEPTH GAUGE</div>
        <div className="mt-1 text-precision">-00.0m ▼</div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 lg:px-10 pb-20 pt-32">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-precision" />
            <span className="label-mono text-precision">UAE/INDIA  //  MARINE CONTRACTING</span>
          </div>

          <h1 className="font-display font-bold uppercase text-white text-4xl sm:text-5xl lg:text-7xl leading-[0.95] tracking-[-0.02em]">
            Commercial Diving <br className="hidden sm:block" />
            <span className="text-precision">& Marine Engineering</span> Solutions
          </h1>

          <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
            Professional underwater inspection, construction, maintenance and marine
            contracting services across the UAE and the wider Middle East.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={scrollTo("#contact")}
              className="inline-flex items-center gap-2 bg-precision text-abyss font-mono uppercase tracking-[0.15em] text-xs font-semibold px-7 py-4 hover:bg-white transition-colors">
              
              Request a Quote <ArrowRight size={14} />
            </a>
            <a
              href="#services"
              onClick={scrollTo("#services")}
              className="inline-flex items-center gap-2 border border-white/40 text-white font-mono uppercase tracking-[0.15em] text-xs font-semibold px-7 py-4 hover:border-precision hover:text-precision transition-colors">
              
              Our Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
            <span>Commercial Diving</span>
            <span className="text-precision/60">/</span>
            <span>Marine Construction</span>
            <span className="text-precision/60">/</span>
            <span>Underwater Inspection</span>
            <span className="text-precision/60">/</span>
            <span>Marine Maintenance</span>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#intro"
        onClick={scrollTo("#intro")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-precision flex flex-col items-center gap-1">
        
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>);

}