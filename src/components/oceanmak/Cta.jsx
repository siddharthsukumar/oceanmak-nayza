import { ArrowRight, Mail } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/oceanmakImages";

const scrollTo = (href) => (e) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Cta() {
  return (
    <section id="cta" className="relative bg-abyss-2 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.cta}
          alt="Underwater perspective of marine infrastructure"
          className="w-full h-full object-cover"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-abyss/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss via-abyss/70 to-abyss/30" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-28 lg:py-40">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-precision" />
            <span className="label-mono text-precision">ENQUIRE</span>
          </div>
          <h2 className="font-display font-bold uppercase text-white text-3xl sm:text-4xl lg:text-6xl leading-[0.98] tracking-[-0.02em]">
            Have an underwater <br className="hidden sm:block" /> or marine project?
          </h2>
          <p className="mt-6 text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed">
            Tell us about your requirement and our technical team will assess the scope
            and recommend a suitable marine solution.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={scrollTo("#contact")}
              className="inline-flex items-center gap-2 bg-precision text-abyss font-mono uppercase tracking-[0.15em] text-xs font-semibold px-7 py-4 hover:bg-white transition-colors"
            >
              Request a Quote <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              onClick={scrollTo("#contact")}
              className="inline-flex items-center gap-2 border border-white/40 text-white font-mono uppercase tracking-[0.15em] text-xs font-semibold px-7 py-4 hover:border-precision hover:text-precision transition-colors"
            >
              <Mail size={14} /> Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}