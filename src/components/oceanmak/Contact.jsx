import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const CONTACT = [
{ icon: Phone, label: "Phone", value: "+971 52 540 1615\xA0 | + 971 67 161 721\xA0 \xA0", href: "tel:+971525401615" },
{ icon: Mail, label: "Email", value: "support@oceanmak.com", href: "mailto:support@oceanmak.com" },
{ icon: MapPin, label: "Location", value: "Ajman, UAE", href: "https://maps.google.com/?q=Ajman,UAE" }];


const INITIAL = { name: "", company: "", email: "", phone: "", project: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please complete name, email and message.");
      return;
    }
    setError("");
    // B2B enquiry — open a pre-filled email to the Oceanmak team.
    const subject = encodeURIComponent(`Project Enquiry — ${form.project || "General"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject / Requirement: ${form.project}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:support@oceanmak.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
  "w-full bg-abyss-2 border border-line px-4 py-3 text-white text-sm placeholder:text-faint/50 focus:border-precision focus:outline-none transition-colors";

  return (
    <section id="contact" className="bg-abyss section-rule">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Info */}
          <div className="lg:col-span-5">
            <SectionLabel index="SECTION // 10" className="mb-6">
              Contact
            </SectionLabel>
            <h2 className="font-display font-bold uppercase text-white text-3xl sm:text-4xl lg:text-5xl tracking-[-0.02em]">
              Request a <span className="text-precision">quote</span>
            </h2>
            <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-md">
              Share your requirement and our technical team will assess the scope and
              recommend a suitable marine solution.
            </p>

            <div className="mt-10 space-y-px bg-line border border-line">
              {CONTACT.map((c) =>
              <a
                key={c.label}
                href={c.href}
                className="group flex items-center gap-4 bg-abyss p-5 hover:bg-abyss-2 transition-colors">
                
                  <span className="flex items-center justify-center h-11 w-11 border border-line text-precision group-hover:border-precision transition-colors">
                    <c.icon size={18} strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="label-mono text-faint">{c.label}</div>
                    <div className="text-white text-sm mt-0.5">{c.value}</div>
                  </div>
                </a>
              )}
            </div>

            <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-faint/50">
              // Serving Abu Dhabi, Dubai, Ajman & the wider Middle East
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="border border-line bg-abyss-2 p-7 lg:p-10 relative">
                <span className="absolute top-3 left-3 label-mono text-precision/70">FORM // ENQUIRY</span>
                {sent ?
                <div className="min-h-[360px] flex flex-col items-center justify-center text-center">
                    <CheckCircle2 size={48} className="text-precision" />
                    <h3 className="mt-5 font-display font-semibold text-white text-2xl">
                      Enquiry ready to send
                    </h3>
                    <p className="mt-3 text-white/60 max-w-md">
                      Your email client should now be open with the details pre-filled. If
                      not, email us directly at{" "}
                      <a href="mailto:support@oceanmak.com" className="text-precision">
                        support@oceanmak.com
                      </a>
                      .
                    </p>
                    <button
                    onClick={() => {
                      setSent(false);
                      setForm(INITIAL);
                    }}
                    className="mt-6 font-mono uppercase tracking-[0.15em] text-xs text-white border border-line px-5 py-3 hover:border-precision hover:text-precision transition-colors">
                    
                      Send another enquiry
                    </button>
                  </div> :

                <form onSubmit={submit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="label-mono text-faint">Name *</label>
                      <input className={`${inputClass} mt-2`} value={form.name} onChange={set("name")} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="label-mono text-faint">Company</label>
                      <input className={`${inputClass} mt-2`} value={form.company} onChange={set("company")} placeholder="Company name" />
                    </div>
                    <div>
                      <label className="label-mono text-faint">Email *</label>
                      <input type="email" className={`${inputClass} mt-2`} value={form.email} onChange={set("email")} placeholder="you@company.com" />
                    </div>
                    <div>
                      <label className="label-mono text-faint">Phone</label>
                      <input className={`${inputClass} mt-2`} value={form.phone} onChange={set("phone")} placeholder="+971 ..." />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="label-mono text-faint">Project / Requirement</label>
                      <input className={`${inputClass} mt-2`} value={form.project} onChange={set("project")} placeholder="e.g. Underwater inspection of quay wall" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="label-mono text-faint">Message *</label>
                      <textarea rows={5} className={`${inputClass} mt-2 resize-none`} value={form.message} onChange={set("message")} placeholder="Describe your project and scope..." />
                    </div>
                    {error &&
                  <p className="sm:col-span-2 text-precision text-xs font-mono">{error}</p>
                  }
                    <div className="sm:col-span-2">
                      <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-precision text-abyss font-mono uppercase tracking-[0.15em] text-xs font-semibold px-7 py-4 hover:bg-white transition-colors">
                      
                        Submit Enquiry <Send size={14} />
                      </button>
                    </div>
                  </form>
                }
                <span className="corner-accent" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}