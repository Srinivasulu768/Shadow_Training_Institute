import { Link } from "react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { WaveDivider, WaveSplitRow } from "../components/WaveDivider";
import { ArrowRight, CheckCircle, Activity, Siren, Target } from "lucide-react";

const BG      = "rgb(248, 250, 252)";
const SURFACE = "rgb(237, 242, 250)";
const CARD    = "#ffffff";
const BORDER  = "rgba(0,0,0,0.07)";
const BLUE    = "rgb(37, 99, 235)";
const BLUE_S  = "rgba(37,99,235,0.08)";
const NAVY    = "rgb(13, 27, 62)";
const TEXT    = "rgb(15, 23, 42)";
const BODY    = "rgb(71, 85, 105)";
const MUTED   = "rgb(148, 163, 184)";
const EASE    = [0.22, 1, 0.36, 1] as const;

export function Simulation() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const whyRef = useRef<HTMLDivElement>(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: BG }}>

      {/* ── Hero ── */}
      <section style={{ backgroundColor: NAVY, paddingBottom: 0 }}>
        <WaveSplitRow
          imageLeft={false}
          bgColor={NAVY}
          imageSlot={
            <ImageWithFallback src="/images/sti1.jpg" alt="Tactical simulation training"
              className="w-full h-full object-cover"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          }
          textSlot={
            <motion.div ref={heroRef}
              initial={{ opacity: 0, x: -40 }} animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded mb-6"
                style={{ backgroundColor: "rgba(37,99,235,0.20)", border: "1px solid rgba(37,99,235,0.35)" }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "rgb(147,197,253)" }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgb(147,197,253)" }}>Premium Facilities</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: "'Open Sans', sans-serif", color: "#fff" }}>
                <span style={{ color: "rgb(147,197,253)" }}>Simulation</span> Training
              </h1>
              <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.70)" }}>
                Shadow Training Institute is developing state-of-the-art simulation facilities to replicate real-world conditions. Train under pressure, build confidence, and master critical skills.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                Our simulation program is currently in development — building immersive, high-fidelity training environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.18, ease: EASE }}>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 font-bold rounded-lg text-sm"
                    style={{ backgroundColor: BLUE, color: "#fff", boxShadow: "0 4px 16px rgba(37,99,235,0.40)" }}>
                    Get Notified <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.18, ease: EASE }}>
                  <Link to="/programs" className="inline-flex items-center justify-center gap-2 px-8 py-3 font-bold rounded-lg text-sm"
                    style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff", backgroundColor: "transparent" }}>
                    View Current Programs
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          }
        />
        <WaveDivider topColor={NAVY} bottomColor={CARD} />
      </section>

      {/* ── What to expect ── */}
      <section style={{ backgroundColor: CARD }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>
              What to <span style={{ color: BLUE }}>Expect</span>
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: BODY }}>
              Our simulation program will directly support and enhance our existing training curriculum.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Activity, title: "CPR / AED Simulation",         description: "High-fidelity mannequins and medical equipment to practice life-saving techniques in realistic emergency scenarios.", link: "/programs#cpr-aed" },
              { icon: Siren,    title: "Active Shooter Simulation",     description: "Immersive environments aligned with ALERRT protocols to practice Run-Hide-Fight strategies and coordinated response.", link: "/programs#active-shooter" },
              { icon: Target,   title: "Tactical Training Simulation",  description: "Realistic structural environments for practicing tactical movement, threat assessment, and protective formations.", link: "/programs#tactical-training" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-xl p-7"
                style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(37,99,235,0.12)" }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: BLUE }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
                  <item.icon className="w-6 h-6" style={{ color: "#fff" }} />
                </motion.div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>{item.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: BODY }}>{item.description}</p>
                <Link to={item.link} className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: BLUE }}>
                  View Program <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <WaveDivider topColor={CARD} bottomColor={SURFACE} />
      </section>

      {/* ── Why simulation matters ── */}
      <section ref={whyRef} style={{ backgroundColor: SURFACE, overflow: "hidden" }}>
        <WaveSplitRow
          imageLeft={false}
          bgColor={SURFACE}
          imageSlot={
            <ImageWithFallback src="/images/sti5.jpg" alt="Training in action"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          }
          textSlot={
            <motion.div
              initial={{ opacity: 0, x: -50 }} animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE }}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>
                Why <span style={{ color: BLUE }}>Simulation Matters</span>
              </h2>
              <p className="text-base leading-relaxed mb-7" style={{ color: BODY }}>
                Research consistently shows that simulation-based training produces significantly better outcomes than traditional classroom instruction alone.
              </p>
              <ul className="space-y-3">
                {[
                  "Higher skill retention through hands-on repetition",
                  "Safe environment to make and learn from mistakes",
                  "Stress inoculation — building performance under pressure",
                  "Immediate feedback from certified instructors",
                  "Directly aligned with our ALERRT-based curriculum",
                ].map((point, i) => (
                  <motion.li key={point} className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -12 }} animate={whyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.2 + i * 0.08, ease: EASE }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: BLUE }} />
                    <span className="text-sm" style={{ color: BODY }}>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          }
        />
        <WaveDivider topColor={SURFACE} bottomColor={NAVY} flip />
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: NAVY }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Open Sans', sans-serif", color: "#fff" }}>
              Interested in Simulation Training?
            </h2>
            <p className="mb-8 leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              Contact us to learn more about our upcoming simulation program or to be notified when it becomes available.
            </p>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.18, ease: EASE }} style={{ display: "inline-block" }}>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl"
                style={{ backgroundColor: BLUE, color: "#fff", boxShadow: "0 4px 20px rgba(37,99,235,0.40)" }}>
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
