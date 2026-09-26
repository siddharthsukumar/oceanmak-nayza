import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const SERVICES_LINKS = [
  "Underwater Inspection & Survey",
  "Underwater Construction",
  "Underwater Maintenance & Repair",
  "Marine Construction",
  "Subsea / Pipeline Support",
  "Underwater Welding & Cutting",
];

const QUICK = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "HSEQ", href: "#hseq" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const go = (href) => (e) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-abyss-2 border-t border-line">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 bg-precision" />
              <span className="font-display font-bold tracking-[0.3em] text-white text-lg">OCEANMAK</span>
            </div>
            <p className="mt-5 text-white/55 text-sm leading-relaxed max-w-xs">
              Commercial diving and marine engineering contractor. Underwater inspection,
              construction, maintenance and marine contracting across the UAE and the
              wider Middle East.
            </p>
            <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-faint/60">
              OCEANMAK MARINE SERVICES LLC
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="label-mono text-precision mb-5">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={go("#services")}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="label-mono text-precision mb-5">Navigate</h4>
            <ul className="space-y-2.5">
              {QUICK.map((q) => (
                <li key={q.label}>
                  <a
                    href={q.href}
                    onClick={go(q.href)}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + radar */}
          <div className="lg:col-span-3">
            <h4 className="label-mono text-precision mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+971525401615" className="flex items-center gap-2 text-white/60 hover:text-precision transition-colors">
                  <Phone size={14} /> +971 52 540 1615
                </a>
              </li>
              <li>
                <a href="mailto:support@oceanmak.com" className="flex items-center gap-2 text-white/60 hover:text-precision transition-colors">
                  <Mail size={14} /> support@oceanmak.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <MapPin size={14} /> Ajman, UAE
              </li>
            </ul>

            {/* Regional radar */}
            <div className="mt-6 border border-line p-4">
              <div className="label-mono text-faint/60 mb-3">Regional Presence</div>
              <div className="relative h-20 flex items-center justify-center">
                <div className="absolute h-16 w-16 rounded-full border border-precision/30" />
                <div className="absolute h-10 w-10 rounded-full border border-precision/40" />
                <div className="absolute h-4 w-4 rounded-full border border-precision/60" />
                <span className="h-1.5 w-1.5 bg-precision animate-pulse-soft" />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-faint/50">
                <span>AUH</span><span>DXB</span><span>AJMAN</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-14 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint/50">
            © {new Date().getFullYear()} OCEANMAK MARINE SERVICES LLC — ALL RIGHTS RESERVED
          </p>
          <a
            href="#contact"
            onClick={go("#contact")}
            className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.15em] text-[11px] text-precision hover:text-white transition-colors"
          >
            Request a Quote <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}