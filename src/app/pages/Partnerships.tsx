import { useState } from "react";
import { Link } from "react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { WaveDivider, WaveSplitRow } from "../components/WaveDivider";
import { ArrowRight, CheckCircle, Handshake, GraduationCap, ChevronDown } from "lucide-react";

const BG      = "rgb(248, 250, 252)";
const SURFACE = "rgb(237, 242, 250)";
const CARD    = "#ffffff";
const BORDER  = "rgba(0,0,0,0.07)";
const BLUE    = "rgb(37, 99, 235)";
const BLUE_S  = "rgba(37,99,235,0.08)";
const NAVY    = "rgb(15, 35, 75)";
const TEXT    = "rgb(15, 23, 42)";
const BODY    = "rgb(71, 85, 105)";
const MUTED   = "rgb(148, 163, 184)";
const EASE    = [0.22, 1, 0.36, 1] as const;

const allPrograms = [
  { label: "CPR / AED / First Aid",   href: "/programs#cpr-aed" },
  { label: "Stop the Bleed",          href: "/programs#stop-the-bleed" },
  { label: "CPI – Crisis Prevention", href: "/programs#cpi-crisis" },
  { label: "Active Shooter Response", href: "/programs#active-shooter" },
  { label: "Tactical Training",       href: "/programs#tactical-training" },
  { label: "Continuing Education",    href: "/programs#continuing-education" },
];

export function Partnerships() {
  const [programsOpen, setProgramsOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const alerrtRef = useRef<HTMLDivElement>(null);
  const alerrtInView = useInView(alerrtRef, { once: true, margin: "-80px" });

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: BG }}>

      {/* ── Hero ── */}
      <section style={{ background: "linear-gradient(135deg, rgb(15, 35, 75) 0%, rgb(22, 52, 110) 100%)", paddingBottom: 0 }}>
        <WaveSplitRow
          imageLeft={false}
          bgColor={NAVY}
          imageSlot={
            <ImageWithFallback src="/images/sti12.jpg" alt="Partnership collaboration"
              className="w-full h-full object-cover"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          }
          textSlot={
            <motion.div ref={heroRef}
              initial={{ opacity: 0, x: -40 }} animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE }}>
              <span className="inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-5"
                style={{ backgroundColor: "rgba(37,99,235,0.20)", border: "1px solid rgba(37,99,235,0.35)", color: "rgb(147,197,253)" }}>
                Trusted Collaborations
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold mb-5" style={{ fontFamily: "'Open Sans', sans-serif", color: "#fff" }}>
                Strategic <span style={{ color: "rgb(147,197,253)" }}>Partnerships</span>
              </h1>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
                Shadow Training Institute aligns with nationally recognized programs and institutions to deliver training that meets the highest standards in the industry.
              </p>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.18, ease: EASE }}>
                <Link to="#alerrt" className="inline-flex items-center gap-2 px-7 py-3 font-bold rounded-lg text-sm"
                  style={{ backgroundColor: BLUE, color: "#fff", boxShadow: "0 4px 16px rgba(37,99,235,0.40)" }}>
                  View Partnership <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          }
        />
        <WaveDivider topGradient bottomColor={CARD} />
      </section>

      {/* ── ALERRT split section ── */}
      <section id="alerrt" className="scroll-mt-28" style={{ backgroundColor: CARD }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>
              Featured <span style={{ color: BLUE }}>Partnership</span>
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: BODY }}>
              Our training is aligned with the gold standard in active threat response education.
            </p>
          </motion.div>

          <div ref={alerrtRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — ALERRT info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={alerrtInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: BLUE, boxShadow: "0 4px 20px rgba(37,99,235,0.30)" }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
                  <GraduationCap className="w-8 h-8" style={{ color: "#fff" }} />
                </motion.div>
                <div>
                  <div className="text-2xl font-bold" style={{ fontFamily: "'Open Sans', sans-serif", color: BLUE }}>ALERRT</div>
                  <div className="text-sm" style={{ color: MUTED }}>Dallas College</div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>
                Advanced Law Enforcement Rapid Response Training
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: BODY }}>
                Our Active Shooter Response training is aligned with the nationally recognized ALERRT program developed at Dallas College — the gold standard for civilian and law enforcement active threat response.
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: MUTED }}>
                We are actively exploring a formal partnership with Dallas College to bring ALERRT-certified instruction directly to our students and corporate clients.
              </p>

              <ul className="space-y-2.5">
                {[
                  "Run-Hide-Fight civilian response protocols",
                  "Evidence-based active threat tactics",
                  "Coordinated emergency response procedures",
                  "Situational awareness training",
                ].map((point, i) => (
                  <motion.li
                    key={point}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={alerrtInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.3 + i * 0.08, ease: EASE }}
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: BLUE }} />
                    <span className="text-sm" style={{ color: BODY }}>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right — partnership card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={alerrtInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            >
              <div className="rounded-2xl p-7" style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}`, boxShadow: "0 8px 32px rgba(37,99,235,0.08)" }}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: BLUE }}>
                    <Handshake className="w-5 h-5" style={{ color: "#fff" }} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold mb-2" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>
                      Partnership Opportunity
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: BODY }}>
                      Dallas College's ALERRT program is the nation's largest active shooter response training program. A formal partnership would allow Shadow Training Institute to deliver ALERRT-certified courses directly to our clients.
                    </p>
                  </div>
                </div>

                <div className="pt-5">
                  <p className="text-xs mb-3 uppercase tracking-wider font-semibold" style={{ color: MUTED }}>Related Programs</p>
                  <button
                    onClick={() => setProgramsOpen((o) => !o)}
                    className="w-full flex items-center justify-between p-4 rounded-xl transition-all"
                    style={{ backgroundColor: CARD, border: `1px solid ${BORDER}`, color: TEXT }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(37,99,235,0.30)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER; }}
                  >
                    <span className="text-sm font-semibold">View All Programs</span>
                    <motion.span
                      animate={{ rotate: programsOpen ? 180 : 0 }}
                      transition={{ duration: 0.22, ease: EASE }}
                      style={{ display: "flex" }}
                    >
                      <ChevronDown className="w-4 h-4" style={{ color: BLUE }} />
                    </motion.span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: programsOpen ? "auto" : 0, opacity: programsOpen ? 1 : 0 }}
                    transition={{ duration: 0.28, ease: EASE }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="mt-1 rounded-xl overflow-hidden" style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}>
                      {allPrograms.map((p) => (
                        <Link
                          key={p.href}
                          to={p.href}
                          onClick={() => setProgramsOpen(false)}
                          className="flex items-center justify-between px-4 py-3 text-sm transition-colors"
                          style={{ color: BODY }}
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = SURFACE; e.currentTarget.style.color = BLUE; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = BODY; }}
                        >
                          {p.label}
                          <ArrowRight className="w-3.5 h-3.5" style={{ color: BLUE }} />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <WaveDivider topColor={CARD} bottomColor={NAVY} flip />
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "linear-gradient(135deg, rgb(15, 35, 75) 0%, rgb(22, 52, 110) 100%)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Open Sans', sans-serif", color: "#fff" }}>
              Interested in Partnering With Us?
            </h2>
            <p className="mb-8 leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              Whether you're an organization seeking training solutions or an institution looking to collaborate, we'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.18, ease: EASE }}>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl"
                  style={{ backgroundColor: BLUE, color: "#fff", boxShadow: "0 4px 20px rgba(37,99,235,0.40)" }}>
                  Contact Us <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.18, ease: EASE }}>
                <Link to="/programs" className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl"
                  style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff", backgroundColor: "transparent" }}>
                  View Programs
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
