import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { IMAGES } from "@/lib/oceanmakImages";

const SERVICES = [
  { key: "inspection", title: "Underwater Inspection & Survey", desc: "Underwater inspection services for jetties, piers, quay walls, intakes, outfalls and ship hulls. Our divers carry out visual, video and cathodic protection surveys and report condition against engineering specification, so owners can plan repairs before defects grow." },
  { key: "construction", title: "Underwater Construction", desc: "Underwater construction services including placement, alignment and assembly of submerged structures, underwater civil engineering and concrete repair. Work is planned and supervised to engineered specifications, from small structural elements to waterfront and coastal protection works." },
  { key: "maintenance", title: "Underwater Maintenance & Repair", desc: "Planned and reactive underwater maintenance and repair, from concrete and steel repair on jetties and piers to cleaning and servicing of submerged assets. Regular diver-led maintenance keeps marine structures in operation and extends their service life." },
  { key: "searchRecovery", title: "Search & Recovery", desc: "Search and recovery divers for lost equipment, materials and submerged objects. We use structured search patterns and the right lifting gear for underwater object recovery in harbours, channels, intakes and open water across the UAE and India." },
  { key: "salvage", title: "Salvage", desc: "Marine salvage services including vessel salvage and recovery, refloat support and removal of sunken equipment and debris. Divers survey the situation, rig the lift and work with cranes and marine plant to recover assets safely." },
  { key: "marineConstruction", title: "Marine Construction", desc: "Marine construction and installation for quayside, jetty and waterfront projects, with diving teams and marine plant working together. Services include quay wall works, geotextile and coastal protection support, and installation of marine structures." },
  { key: "pipeline", title: "Subsea / Pipeline Support", desc: "Subsea and pipeline support including underwater pipeline inspection, intervention and support for offshore infrastructure. Our offshore diving services cover inspection, cleaning, repair support and documentation of pipelines, risers and subsea structures." },
  { key: "pontoonMarina", title: "Pontoon & Marina Works", desc: "Installation, maintenance and repair of pontoons, floating docks and marina infrastructure. We handle underwater inspection, anchoring, chain and connection repairs, and lifting of pontoons and boats for marinas and waterfront developments." },
  { key: "mooring", title: "Mooring & Anchor Installation", desc: "Mooring and anchor installation, inspection and maintenance for vessels, buoys and marine facilities. Divers install and check anchors, chains and mooring lines, and confirm holding condition before and after seasonal or heavy use." },
  { key: "silt", title: "Silt Removal & Underwater Airlifting", desc: "Underwater silt removal and underwater airlifting for water intakes, channels, basins and marine structures. Airlift and dredging methods clear sediment without draining the system, restoring flow and capacity for intake and outfall operators." },
  { key: "welding", title: "Underwater Welding & Cutting", desc: "Underwater welding services and underwater cutting for structural repair, modification and demolition below the waterline. Qualified divers carry out wet welding and cutting on steel structures, piles and pipelines, supported by surface supervision and inspection." },
  { key: "buoy", title: "Buoy & Jellyfish Net Installation", desc: "Beach buoy installation, swimming zone buoys and jellyfish net installation for beaches and waterfront resorts. We deploy, anchor and maintain marker buoys and barrier nets that define safe swimming areas and keep jellyfish out." },
];

export default function Services() {
  return (
    <section id="services" className="bg-abyss section-rule">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel index="SECTION // 03" className="mb-6">
              Core Services
            </SectionLabel>
            <h2 className="font-display font-bold uppercase text-white text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em]">
              Our Core Services
            </h2>
          </div>
          <p className="text-white/55 max-w-md text-[15px] leading-relaxed">
            Twelve specialist service lines covering the full spectrum of commercial
            diving, underwater engineering and marine contracting work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.key}
              delay={(i % 3) * 0.06}
              className="group relative bg-abyss hover:bg-abyss-2 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={IMAGES.services[s.key]}
                  loading="lazy"
                  decoding="async"
                  alt={s.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-abyss/40 group-hover:bg-abyss/10 transition-colors" />
                <span className="absolute top-3 left-3 label-mono text-precision text-[10px]">
                  SVC // 0{i + 1 < 10 ? "0" + (i + 1) : i + 1}
                </span>
              </div>
              <div className="relative p-6 lg:p-7">
                <h3 className="font-display font-semibold text-white text-lg leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-white/55 text-sm leading-relaxed">{s.desc}</p>
                <span className="corner-accent" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}