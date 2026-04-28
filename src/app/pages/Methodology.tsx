import { Link } from "react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { WaveDivider, WaveSplitRow } from "../components/WaveDivider";
import {
  BookOpen, Target, Users, Brain, GraduationCap,
  CheckCircle, ArrowRight, Lightbulb, TrendingUp,
} from "lucide-react";

const BG      = "rgb(248, 250, 252)";
const SURFACE = "rgb(237, 242, 250)";
const CARD    = "#ffffff";
const BORDER  = "rgba(0,0,0,0.07)";
const BLUE    = "rgb(37, 99, 235)";
const BLUE_S  = "rgba(37,99,235,0.08)";
const NAVY    = "rgb(13, 27, 62)";
const TEXT    = "rgb(15, 23, 42)";
const BODY    = "rgb(71, 85, 105)";
const EASE    = [0.22, 1, 0.36, 1] as const;

const methodologies = [
  {
    id: "blended-learning",
    icon: BookOpen,
    title: "Blended Learning Approach",
    tagline: "Theory Meets Practice",
    description: "Our blended learning model seamlessly integrates online theoretical instruction with intensive hands-on practical application. This dual-modality approach ensures comprehensive understanding while maximizing training efficiency.",
    benefits: ["Flexible online modules — learn theory at your own pace", "In-person sessions focused entirely on skill development", "Reduced classroom time without sacrificing quality", "Accessible pre-course materials for better preparation", "Continuous reinforcement through digital resources"],
    application: "Students complete foundational knowledge online, then apply skills in realistic scenarios during in-person sessions.",
    image: "/images/sti10.jpg",
  },
  {
    id: "problem-based",
    icon: Target,
    title: "Problem-Based Learning",
    tagline: "Critical Thinking Under Pressure",
    description: "Problem-based learning places students at the center of realistic challenges requiring critical thinking, decision-making, and collaborative problem-solving.",
    benefits: ["Develops critical thinking and analytical skills", "Encourages active learning and engagement", "Builds confidence in decision-making", "Promotes collaborative problem-solving", "Prepares students for unpredictable real-world situations"],
    application: "Instructors present realistic problems without predetermined solutions, guiding students to analyze situations and develop effective responses.",
    image: "/images/sti11.jpg",
  },
  {
    id: "scenario-based",
    icon: Users,
    title: "Scenario-Based Training",
    tagline: "Immersive Real-World Simulation",
    description: "Scenario-based training immerses students in high-fidelity simulations that replicate actual emergency and tactical situations, building muscle memory and decision-making skills.",
    benefits: ["Safe practice of high-risk procedures", "Realistic stress exposure in controlled settings", "Immediate feedback and performance assessment", "Development of procedural memory and automatic responses", "Team coordination and communication practice"],
    application: "Students engage in realistic scenarios using professional equipment, responding to evolving situations while instructors observe and provide targeted feedback.",
    image: "/images/sti12.jpg",
  },
  {
    id: "stress-inoculation",
    icon: Brain,
    title: "Stress Inoculation Training",
    tagline: "Performance Under Pressure",
    description: "Stress inoculation training progressively exposes students to controlled stressors, building psychological resilience and maintaining performance effectiveness during high-pressure situations.",
    benefits: ["Improved performance under actual emergency conditions", "Reduced anxiety and increased confidence", "Enhanced stress management capabilities", "Better decision-making during crisis situations", "Reduced performance degradation under pressure"],
    application: "Training incrementally increases stress through time pressure, distractions, and scenario complexity — allowing students to develop coping mechanisms.",
    image: "/images/sti13.jpg",
  },
  {
    id: "adult-learning",
    icon: GraduationCap,
    title: "Adult Learning Principles",
    tagline: "Experience-Centered Education",
    description: "Our approach respects adult learners' experience and autonomy, creating a collaborative environment where students are active participants in their own development.",
    benefits: ["Leverages existing knowledge and experience", "Promotes self-directed learning", "Focuses on practical, immediately applicable skills", "Respects learner autonomy and professional context", "Creates collaborative peer learning opportunities"],
    application: "Instructors facilitate rather than lecture, encouraging students to share experiences and take ownership of their learning journey.",
    image: "/images/sti14.jpg",
  },
];

function MethodRow({ method, index }: { method: typeof methodologies[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const imageLeft = index % 2 === 0;
  const rowBg = index % 2 === 0 ? CARD : SURFACE;

  const imageSlot = (
    <ImageWithFallback
      src={method.image}
      alt={method.title}
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
      <div className="flex items-center gap-4 mb-5">
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: BLUE, boxShadow: "0 4px 16px rgba(37,99,235,0.30)" }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: EASE }}
        >
          <method.icon className="w-6 h-6" style={{ color: "#fff" }} />
        </motion.div>
        <div>
          <h2 className="text-2xl font-bold leading-tight" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>
            {method.title}
          </h2>
          <p className="text-sm font-semibold mt-0.5" style={{ color: BLUE }}>{method.tagline}</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed mb-5" style={{ color: BODY }}>{method.description}</p>

      <div className="mb-5">
        <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: TEXT }}>Key Benefits</h3>
        <ul className="space-y-2">
          {method.benefits.map((b, i) => (
            <motion.li key={i} className="flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.25 + i * 0.07, ease: EASE }}
            >
              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: BLUE }} />
              <span className="text-sm" style={{ color: BODY }}>{b}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl p-4" style={{ backgroundColor: index % 2 === 0 ? SURFACE : CARD, border: `1px solid ${BORDER}` }}>
        <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: BLUE }}>In Practice</h3>
        <p className="text-sm leading-relaxed" style={{ color: BODY }}>{method.application}</p>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      ref={ref}
      id={method.id}
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

export function Methodology() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: BG }}>

      {/* Hero */}
      <section style={{ backgroundColor: NAVY, paddingBottom: 0 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          <motion.div
            ref={headerRef}
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span
              className="inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-5"
              style={{ backgroundColor: "rgba(37,99,235,0.20)", border: "1px solid rgba(37,99,235,0.35)", color: "rgb(147,197,253)" }}
            >
              Evidence-Based Training
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-5" style={{ fontFamily: "'Open Sans', sans-serif", color: "#fff" }}>
              Learning <span style={{ color: "rgb(147,197,253)" }}>Methodology</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Proven educational methodologies designed to maximize retention, build competence, and ensure real-world application.
            </p>
          </motion.div>
        </div>
        <WaveDivider topColor={NAVY} bottomColor={CARD} />
      </section>

      {/* 3 pillars */}
      <section style={{ backgroundColor: CARD }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Lightbulb,  title: "Evidence-Based", text: "Grounded in cognitive science and educational research" },
              { icon: Target,     title: "Practical Focus", text: "Designed for immediate real-world application" },
              { icon: TrendingUp, title: "Proven Results",  text: "Higher retention and performance outcomes" },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                className="rounded-xl p-7 text-center"
                style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(37,99,235,0.12)" }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: BLUE }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
                  <p.icon className="w-6 h-6" style={{ color: "#fff" }} />
                </motion.div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>{p.title}</h3>
                <p className="text-sm" style={{ color: BODY }}>{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <WaveDivider topColor={CARD} bottomColor={SURFACE} />
      </section>

      {/* Methodology rows */}
      {methodologies.map((method, index) => (
        <MethodRow key={method.id} method={method} index={index} />
      ))}

      {/* CTA */}
      <section style={{ backgroundColor: CARD }}>
        <WaveDivider topColor={CARD} bottomColor={NAVY} flip />
        <div style={{ backgroundColor: NAVY }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Open Sans', sans-serif", color: "#fff" }}>
                Experience Our Methodology in Action
              </h2>
              <p className="mb-8 max-w-xl mx-auto leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                Our comprehensive approach ensures you don't just learn — you master skills that can save lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.18, ease: EASE }}>
                  <Link to="/programs" className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl"
                    style={{ backgroundColor: BLUE, color: "#fff", boxShadow: "0 4px 20px rgba(37,99,235,0.40)" }}>
                    View Training Programs <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.18, ease: EASE }}>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-xl"
                    style={{ border: "1px solid rgba(255,255,255,0.25)", color: "#fff", backgroundColor: "transparent" }}>
                    Schedule a Consultation
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
