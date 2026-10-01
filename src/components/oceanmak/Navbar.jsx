import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../../assests/images/Logo.png";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Commercial Diving", href: "#services" },
  { label: "Marine Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "HSEQ", href: "#hseq" },
  { label: "Careers", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-abyss/95 backdrop-blur border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => go(e, "#top")}
            className="flex items-center select-none h-10"
          >
            <img
              src={logo}
              alt="Oceanmak logo"
              className="h-full w-auto object-contain"
              draggable="false"
            />
          </a>
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => go(e, item.href)}
                className="text-[13px] font-medium text-white/75 hover:text-precision transition-colors tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => go(e, "#contact")}
              className="inline-flex items-center gap-2 bg-precision text-abyss font-mono uppercase tracking-[0.15em] text-xs font-semibold px-5 py-3 hover:bg-white transition-colors"
            >
              Request a Quote
            </a>
          </div>
          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* scanning line */}
        <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-precision to-transparent animate-scanline" />
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-abyss-2 border-b border-line">
          <nav className="px-5 py-4 flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => go(e, item.href)}
                className="py-3 text-sm text-white/80 hover:text-precision border-b border-line/60"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => go(e, "#contact")}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-precision text-abyss font-mono uppercase tracking-[0.15em] text-xs font-semibold px-5 py-3"
            >
              <Phone size={14} /> Request a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
