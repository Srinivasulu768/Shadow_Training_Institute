import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, CheckCircle, Handshake, GraduationCap, ChevronDown } from "lucide-react";

const allPrograms = [
  { label: "CPR / AED / First Aid", href: "/programs#cpr-aed" },
  { label: "Stop the Bleed", href: "/programs#stop-the-bleed" },
  { label: "CPI – Crisis Prevention", href: "/programs#cpi-crisis" },
  { label: "Active Shooter Response", href: "/programs#active-shooter" },
  { label: "Tactical Training", href: "/programs#tactical-training" },
  { label: "Continuing Education", href: "/programs#continuing-education" },
];

export function Partnerships() {
  const [programsOpen, setProgramsOpen] = useState(false);
  return (
    <div style={{ fontFamily: "'Lato', sans-serif" }}>

      {/* Hero */}
      <section className="py-20 bg-[#1A1008]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-[#B8963E]/10 border border-[#B8963E]/25 rounded text-[#B8963E] text-xs font-bold uppercase tracking-widest mb-5">
              Trusted Collaborations
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-5"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Strategic <span className="text-[#B8963E]">Partnerships</span>
            </h1>
            <p className="text-[#CFCFCF] text-lg max-w-2xl mx-auto leading-relaxed">
              Shadow Training Institute aligns with nationally recognized programs and institutions to deliver training that meets the highest standards in the industry.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden border border-[#B8963E]/25 h-90">
            <ImageWithFallback
              src="/images/sti12.jpg"
              alt="Partnership collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ALERRT — Featured Partnership */}
      <section id="alerrt" className="py-20 bg-[#221510]/30 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Featured <span className="text-[#B8963E]">Partnership</span>
            </h2>
            <p className="text-[#CFCFCF] text-lg max-w-xl mx-auto">
              Our training is aligned with the gold standard in active threat response education.
            </p>
          </div>

          <div className="bg-[#1A1008] border border-[#B8963E]/15 rounded-lg overflow-hidden">
            <div className="h-px w-full bg-[#B8963E]/50" />
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#221510] border border-[#B8963E]/20 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-[#B8963E]" />
                    </div>
                    <div>
                      <div
                        className="text-2xl font-bold text-[#B8963E]"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        ALERRT
                      </div>
                      <div className="text-sm text-[#CFCFCF]/60">Dallas College</div>
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold text-white mb-4"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    Advanced Law Enforcement Rapid Response Training
                  </h3>
                  <p className="text-[#CFCFCF] text-sm leading-relaxed mb-4">
                    Our Active Shooter Response training is aligned with the nationally recognized ALERRT program developed at Dallas College — the gold standard for civilian and law enforcement active threat response. We incorporate evidence-based protocols including Run-Hide-Fight strategies, situational awareness, and coordinated emergency response procedures.
                  </p>
                  <p className="text-[#CFCFCF]/70 text-sm leading-relaxed mb-6">
                    We are actively exploring a formal partnership with Dallas College to bring ALERRT-certified instruction directly to our students and corporate clients.
                  </p>

                  <ul className="space-y-2.5">
                    {[
                      "Run-Hide-Fight civilian response protocols",
                      "Evidence-based active threat tactics",
                      "Coordinated emergency response procedures",
                      "Situational awareness training",
                    ].map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#B8963E] flex-shrink-0" />
                        <span className="text-[#CFCFCF] text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#221510] border border-[#B8963E]/10 rounded-lg p-7">
                  <div className="flex items-start gap-4 mb-6">
                    <Handshake className="w-6 h-6 text-[#B8963E] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4
                        className="text-base font-bold text-white mb-2"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        Partnership Opportunity
                      </h4>
                      <p className="text-[#CFCFCF] text-sm leading-relaxed">
                        Dallas College's ALERRT program is the nation's largest active shooter response training program. A formal partnership would allow Shadow Training Institute to deliver ALERRT-certified courses directly to our clients.
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-[#B8963E]/10 pt-5">
                    <p className="text-xs text-[#CFCFCF]/40 mb-3 uppercase tracking-wider font-semibold">Related Programs</p>
                    <div className="relative">
                      <button
                        onClick={() => setProgramsOpen((o) => !o)}
                        className="w-full flex items-center justify-between p-4 bg-[#1A1008] border border-[#B8963E]/15 rounded hover:border-[#B8963E]/40 transition-all group"
                      >
                        <span className="text-white text-sm font-semibold group-hover:text-[#B8963E] transition-colors">
                          View All Programs
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#B8963E] transition-transform duration-200 ${programsOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {programsOpen && (
                        <div className="mt-1 bg-[#1A1008] border border-[#B8963E]/15 rounded overflow-hidden">
                          {allPrograms.map((p) => (
                            <Link
                              key={p.href}
                              to={p.href}
                              onClick={() => setProgramsOpen(false)}
                              className="flex items-center justify-between px-4 py-3 hover:bg-[#221510] hover:text-[#B8963E] text-[#CFCFCF] text-sm transition-colors border-b border-[#B8963E]/10 last:border-0"
                            >
                              {p.label}
                              <ArrowRight className="w-3.5 h-3.5 text-[#B8963E]" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#221510]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Interested in Partnering With Us?
          </h2>
          <p className="text-[#CFCFCF] mb-8 leading-relaxed">
            Whether you're an organization seeking training solutions or an institution looking to collaborate, we'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B8963E] text-[#1A1008] font-bold rounded hover:bg-[#a07830] transition-all min-h-[48px]"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#B8963E]/50 text-[#B8963E] font-bold rounded hover:bg-[#1A1008] hover:border-[#B8963E] transition-all min-h-[48px]"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
