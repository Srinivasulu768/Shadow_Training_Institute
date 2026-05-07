import { Link } from "react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { WaveDivider, WaveSplitRow } from "../components/WaveDivider";
import {
  Heart, Activity, Shield, Siren, Target, Award,
  Clock, CheckCircle, Users, ArrowRight,
} from "lucide-react";

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

const programs = [
  { id: "cpr-aed",            icon: Heart,    title: "CPR / AED / First Aid",           image: "/images/sti4.jpg", description: "Comprehensive life-saving training covering cardiopulmonary resuscitation, AED use, and basic first aid. Learn to respond confidently to cardiac emergencies, choking, bleeding, and common injuries.", duration: "4–8 hours",    certification: "ALERRT Aligned", topics: ["Adult, Child, and Infant CPR", "AED operation and safety", "Choking response techniques", "Wound care and bandaging", "Basic medical emergency response"],          audience: "Healthcare workers, teachers, corporate staff, general public" },
  { id: "stop-the-bleed",     icon: Activity, title: "Stop the Bleed",                  image: "/images/sti5.jpg", description: "Critical hemorrhage control training developed by the Department of Homeland Security. Learn to identify life-threatening bleeding and apply proper control techniques.",                                                                                duration: "2 hours",       certification: "ALERRT Aligned", topics: ["Tourniquet application techniques", "Wound packing procedures", "Direct pressure application", "Hemorrhage assessment", "Scene safety protocols"],                    audience: "Security personnel, first responders, school staff, corporate teams" },
  { id: "cpi-crisis",         icon: Shield,   title: "CPI – Crisis Prevention",         image: "/images/sti6.jpg", description: "Evidence-based training in de-escalation techniques and crisis intervention. Learn to recognize behavioral triggers and employ verbal de-escalation strategies.",                                                                                    duration: "1–2 days",      certification: "ALERRT Aligned", topics: ["Verbal de-escalation strategies", "Behavioral assessment techniques", "Safe physical intervention methods", "Crisis development models", "Post-crisis support procedures"], audience: "Healthcare workers, social workers, educators, security staff" },
  { id: "active-shooter",     icon: Siren,    title: "Active Shooter Response",         image: "/images/sti7.jpg", description: "Advanced training aligned with ALERRT protocols. Prepare for active threat situations with run-hide-fight strategies, situational awareness, and emergency response coordination.",                                                                  duration: "4–8 hours",    certification: "ALERRT Aligned", topics: ["Run-Hide-Fight protocols", "Situational awareness techniques", "Emergency notification procedures", "Civilian response strategies", "Post-incident protocols"],          audience: "Corporate teams, educators, healthcare staff, security professionals" },
  { id: "tactical-training",  icon: Target,   title: "Tactical Training",               image: "/images/sti8.jpg", description: "Elite security and protection protocols for high-risk environments. Master tactical movement, threat assessment, protective formations, and advanced security procedures.",                                                                          duration: "Custom",        certification: "ALERRT Aligned", topics: ["Tactical movement and positioning", "Threat assessment and response", "Protective security formations", "Vehicle security operations", "Advanced situational awareness"],    audience: "Security professionals, executive protection teams, law enforcement" },
  { id: "continuing-education", icon: Award,  title: "Continuing Education",            image: "/images/sti9.jpg", description: "Advanced courses and recertification programs to maintain and enhance your professional credentials. Stay current with the latest protocols and industry standards.",                                                                               duration: "Varies",        certification: "ALERRT Aligned", topics: ["Advanced medical response", "Leadership in emergency situations", "Instructor development programs", "Specialized tactical techniques", "Recertification courses"],          audience: "Certified professionals seeking advancement or recertification" },
];

function ProgramRow({ program, index }: { program: typeof programs[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const imageLeft = index % 2 === 0;
  const rowBg = index % 2 === 0 ? CARD : SURFACE;

  const imageSlot = (
    <ImageWithFallback
      src={program.image}
      alt={program.title}
      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
  );

  const textSlot = (
    <motion.div
      initial={{ opacity: 0, x: imageLeft ? 40 : -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
    >
      {/* icon + title */}
      <div className="flex items-center gap-4 mb-5">
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: BLUE, boxShadow: "0 4px 16px rgba(37,99,235,0.30)" }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: EASE }}
        >
          <program.icon className="w-6 h-6" style={{ color: "#fff" }} />
        </motion.div>
        <div>
          <h2 className="text-2xl font-bold leading-tight" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>
            {program.title}
          </h2>
          <div className="flex flex-wrap gap-4 mt-1 text-xs" style={{ color: MUTED }}>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" style={{ color: BLUE }} />{program.duration}</span>
            <span className="flex items-center gap-1"><Award className="w-3 h-3" style={{ color: BLUE }} />{program.certification}</span>
            <span className="flex items-center gap-1"><Users className="w-3 h-3" style={{ color: BLUE }} />Group & Individual</span>
          </div>
        </div>
      </div>

      <p className="text-sm leading-relaxed mb-5" style={{ color: BODY }}>{program.description}</p>

      <div className="mb-5">
        <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: BLUE }}>Course Topics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {program.topics.map((topic, i) => (
            <motion.div key={i} className="flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.25 + i * 0.07, ease: EASE }}
            >
              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: BLUE }} />
              <span className="text-sm" style={{ color: BODY }}>{topic}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4">
        <p className="text-xs" style={{ color: MUTED }}>
          <span className="font-semibold" style={{ color: BODY }}>Audience:</span> {program.audience}
        </p>
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.18, ease: EASE }}>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg ml-4"
            style={{ backgroundColor: BLUE, color: "#fff", boxShadow: "0 4px 12px rgba(37,99,235,0.30)", transition: "box-shadow 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 20px rgba(37,99,235,0.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 12px rgba(37,99,235,0.30)"; }}
          >
            Enroll Now <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      ref={ref}
      id={program.id}
      className="scroll-mt-28"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: EASE }}
    >
      <WaveSplitRow
        imageSlot={imageSlot}
        textSlot={textSlot}
        imageLeft={imageLeft}
        bgColor={rowBg}
      />
      <WaveDivider topColor={rowBg} bottomColor={index % 2 === 0 ? SURFACE : CARD} />
    </motion.div>
  );
}

export function Programs() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: BG }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, rgb(15, 35, 75) 0%, rgb(22, 52, 110) 100%)", paddingBottom: 0, marginTop: "-140px", paddingTop: "140px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          <motion.div ref={headerRef} className="text-center"
            initial={{ opacity: 0, y: 24 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}>
            <span className="inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-5"
              style={{ backgroundColor: "rgba(37,99,235,0.20)", border: "1px solid rgba(37,99,235,0.35)", color: "rgb(147,197,253)" }}>
              Professional Training Programs
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-5" style={{ fontFamily: "'Open Sans', sans-serif", color: "#fff" }}>
              Elite <span style={{ color: "rgb(147,197,253)" }}>Training Programs</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Nationally certified programs designed for real-world application.
            </p>
          </motion.div>
        </div>
        <WaveDivider topGradient bottomColor={CARD} />
      </section>

      {/* Program rows */}
      {programs.map((program, index) => (
        <ProgramRow key={program.id} program={program} index={index} />
      ))}

      {/* CTA */}
      <section style={{ backgroundColor: CARD }}>
        <WaveDivider topColor={CARD} bottomColor={NAVY} flip />
        <div style={{ background: "linear-gradient(135deg, rgb(15, 35, 75) 0%, rgb(22, 52, 110) 100%)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, ease: EASE }}>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Open Sans', sans-serif", color: "#fff" }}>
                Need Custom Training Solutions?
              </h2>
              <p className="mb-8 max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                We design tailored training programs for corporate teams, organizations, and specialized groups.
              </p>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.18, ease: EASE }} style={{ display: "inline-block" }}>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl"
                  style={{ backgroundColor: BLUE, color: "#fff", boxShadow: "0 4px 20px rgba(37,99,235,0.40)" }}>
                  Request Custom Training <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
