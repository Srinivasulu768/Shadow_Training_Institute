import { Link } from "react-router";
import { motion, useInView } from "framer-motion";
import { useRef, useState as useFlipState } from "react";
import {
  BookOpen, Target, Brain, GraduationCap,
  Heart, Shield, Activity, Award, Users,
  CheckCircle, ArrowRight,
  Star, TrendingUp, Zap, ChevronLeft, ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { FadeUp, FadeIn, EASE_OUT, AnimatedCard } from "../components/AnimatedCard";
import { WaveDivider } from "../components/WaveDivider";

/* ── design tokens ── */
const NAVY      = "rgb(15, 35, 75)";
const NAVY_MID  = "rgb(22, 52, 110)";
const NAVY_CARD = "rgb(22, 52, 110)";
const BLUE      = "rgb(37, 99, 235)";
const BLUE_SOFT = "rgba(37, 99, 235, 0.10)";
const WHITE     = "#ffffff";
const BG_LIGHT  = "rgb(243, 246, 251)";
const TEXT      = "rgb(15, 23, 42)";
const TEXT_BODY = "rgb(71, 85, 105)";
const TEXT_MUT  = "rgb(148, 163, 184)";
const BORDER    = "rgba(0,0,0,0.07)";
const GOLD      = "rgb(198, 169, 74)";

const methodologies = [
  { icon: BookOpen,      title: "Blended Learning",         desc: "Online theory + hands-on practice" },
  { icon: Brain,         title: "Problem-Based Learning",   desc: "Real-world critical thinking scenarios" },
  { icon: Target,        title: "Scenario-Based Training",  desc: "Immersive emergency simulations" },
  { icon: Zap,           title: "Stress Inoculation",       desc: "Performance under pressure training" },
  { icon: GraduationCap, title: "Adult Learning",           desc: "Experience-centered education" },
];

const heroSlides = [
  {
    icon: Heart,
    title: "Safety Programs",
    desc: "Life-saving skills including CPR, First Aid, and more",
    link: "/programs#cpr-aed",
    img: "/images/sti12.jpg",
  },
  {
    icon: Shield,
    title: "Crisis Prevention",
    desc: "De-escalation and crisis intervention training",
    link: "/programs#cpi-crisis",
    img: "/images/sti2.jpg",
  },
  {
    icon: Target,
    title: "Tactical Training",
    desc: "Elite security and protection protocols",
    link: "/programs#tactical-training",
    img: "/images/sti1.jpg",
  },
  {
    icon: Activity,
    title: "Stop the Bleed",
    desc: "Critical hemorrhage control and emergency response",
    link: "/programs#stop-the-bleed",
    img: "/images/sti7.jpg",
  },
];

const whyItems = [
  {
    icon: Award,
    title: "Certified Instructors",
    desc: "All instructors hold active certifications and real-world operational experience.",
    back: "Every instructor brings field-tested expertise — from law enforcement to healthcare — ensuring training that reflects real emergencies, not just theory.",
    link: "/methodology",
  },
  {
    icon: Target,
    title: "Expert Instructors",
    desc: "Industry veterans with hands-on field experience across multiple disciplines.",
    back: "Our team includes former military, security professionals, and medical responders who have operated in high-stakes environments worldwide.",
    link: "/methodology",
  },
  {
    icon: TrendingUp,
    title: "Effective Focus",
    desc: "Evidence-based curriculum designed for maximum skill retention and application.",
    back: "We use blended learning, scenario-based training, and stress inoculation — proven methods that build skills that stick under pressure.",
    link: "/methodology",
  },
  {
    icon: Zap,
    title: "Proven Results",
    desc: "High certification rate with professionals trained across every sector.",
    back: "From corporate teams to healthcare staff and security professionals — our graduates leave prepared to respond confidently in any critical situation.",
    link: "/programs",
  },
];


const testimonials = [
  {
    quote: "The training programs at Shadow Training Institute transformed the way our team responds to emergencies. Our staff now feels confident and prepared for any situation.",
    name: "Michael Rodriguez",
    title: "Security Director, Fortune 500",
  },
  {
    quote: "Exceptional instructors with real-world experience. The scenario-based training was incredibly realistic and directly applicable to our daily operations.",
    name: "Sarah Chen",
    title: "Healthcare Administrator",
  },
  {
    quote: "Best investment we've made in our team's safety. The ALERRT-aligned curriculum gave our staff the tools they need to respond effectively under pressure.",
    name: "James Thompson",
    title: "Corporate Safety Manager",
  },
];

/* ─────────────────────────────────────────────
   FlipCard — 3D flip on hover, front → back
───────────────────────────────────────────── */
interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  height?: number;
  delay?: number;
}

function FlipCard({ front, back, height = 200, delay = 0 }: FlipCardProps) {
  const [flipped, setFlipped] = useFlipState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: EASE_OUT }}
      style={{ perspective: "1000px", height: `${height}px`, cursor: "pointer" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Front */}
        <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
          {front}
        </div>
        {/* Back */}
        <div style={{ position: "absolute", inset: 0, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
          {back}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => setActiveSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setActiveSlide((s) => (s + 1) % heroSlides.length);

  /* auto-advance carousel every 3 seconds */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((s) => (s + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: WHITE }}>

      {/* ══ HERO ══ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 100%)`,
          minHeight: "calc(100vh - 140px)",
          display: "flex",
          alignItems: "center",
          paddingTop: "0",
        }}
      >
        {/* subtle dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: EASE_OUT }}
            >
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.08]"
                style={{ fontFamily: "'Open Sans', sans-serif", color: WHITE }}
              >
                Transform Your<br />
                Workforce with<br />
                <span style={{ color: "rgb(147,197,253)" }}>Elite Training</span>
              </h1>

              <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: "rgba(255,255,255,0.65)" }}>
                Delivering world-class training programs that elevate safety, performance, and readiness across organizations of all sizes.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-10">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: EASE_OUT }}>
                  <Link
                    to="/programs"
                    className="inline-flex items-center justify-center px-7 py-3 text-sm font-bold rounded-md"
                    style={{ background: BLUE, color: WHITE, boxShadow: "0 4px 16px rgba(37,99,235,0.40)", transition: "box-shadow 0.25s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,99,235,0.55)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,99,235,0.40)"; }}
                  >
                    Explore Programs
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: EASE_OUT }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-7 py-3 text-sm font-bold rounded-md transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.30)", color: WHITE, background: "transparent" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  >
                    Book Consultation
                  </Link>
                </motion.div>
              </div>

            </motion.div>

            {/* RIGHT — card carousel */}
            <motion.div
              className="relative flex flex-col items-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
            >
              {/* Card */}
              <Link
                to={heroSlides[activeSlide].link}
                className="relative w-full max-w-sm rounded-2xl overflow-hidden block"
                style={{
                  background: NAVY_CARD,
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.40)",
                  minHeight: "380px",
                  textDecoration: "none",
                }}
              >
                {/* image fills top */}
                <div className="w-full" style={{ height: "240px", overflow: "hidden" }}>
                  <img
                    src={heroSlides[activeSlide].img}
                    alt={heroSlides[activeSlide].title}
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{ opacity: 0.75 }}
                  />
                </div>
                {/* text at bottom */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: WHITE, fontFamily: "'Open Sans', sans-serif" }}>
                    {heroSlides[activeSlide].title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
                    {heroSlides[activeSlide].desc}
                  </p>
                </div>
              </Link>

              {/* Controls row */}
              <div className="flex items-center justify-between w-full max-w-sm mt-4">
                {/* dots */}
                <div className="flex items-center gap-2">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className="rounded-full transition-all"
                      style={{
                        width: i === activeSlide ? "28px" : "8px",
                        height: "8px",
                        backgroundColor: i === activeSlide ? GOLD : "rgba(255,255,255,0.25)",
                      }}
                    />
                  ))}
                </div>
                {/* arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.20)", color: WHITE, background: "transparent" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.10)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                    style={{ border: "1px solid rgba(255,255,255,0.20)", color: WHITE, background: "transparent" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.10)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* wave: hero gradient → WHITE — background matches hero gradient end color */}
      <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 100%)`, lineHeight: 0, marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "90px" }}>
          <path d="M0,40 C240,90 480,0 720,45 C960,90 1200,10 1440,50 L1440,90 L0,90 Z" fill={WHITE} />
        </svg>
      </div>

      {/* ══ LEARNING METHODOLOGIES ══ */}
      <section className="py-20 overflow-hidden" style={{ backgroundColor: WHITE }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>
              Learning Methodologies
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: TEXT_BODY }}>
              Evidence-based approaches that drive measurable results
            </p>
          </FadeIn>
        </div>

        {/* ── Static grid ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {methodologies.map((m, i) => (
              <AnimatedCard
                key={m.title}
                delay={i * 0.08}
                className="rounded-2xl p-5 cursor-default"
                style={{ backgroundColor: BG_LIGHT, border: `1px solid ${BORDER}` }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: BLUE }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                >
                  <m.icon className="w-6 h-6" style={{ color: WHITE }} />
                </motion.div>
                <h3 className="text-sm font-bold leading-snug mb-1" style={{ color: TEXT }}>{m.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: TEXT_BODY }}>{m.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* wave: WHITE → BG_LIGHT */}
      <WaveDivider topColor={WHITE} bottomColor={BG_LIGHT} />

      {/* ══ TRAINING PROGRAMS ══ */}
      <section className="py-20" style={{ backgroundColor: BG_LIGHT }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>
              Training Programs
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: TEXT_BODY }}>
              Comprehensive programs designed for every professional need
            </p>
            <div className="w-12 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: BLUE }} />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { icon: Heart,    title: "CPR / AED / First Aid",   duration: "4–8 hrs",  link: "/programs#cpr-aed",             back: "Learn adult, child & infant CPR, AED operation, wound care, and emergency response techniques." },
              { icon: Activity, title: "Stop the Bleed",           duration: "2 hrs",    link: "/programs#stop-the-bleed",       back: "DHS-developed hemorrhage control training — tourniquet application, wound packing, and pressure techniques." },
              { icon: Shield,   title: "Active Shooter Response",  duration: "4–8 hrs",  link: "/programs#active-shooter",       back: "ALERRT-aligned Run-Hide-Fight protocols, situational awareness, and coordinated emergency response." },
              { icon: Target,   title: "Tactical Training",        duration: "Custom",   link: "/programs#tactical-training",    back: "Elite security protocols — tactical movement, threat assessment, protective formations, and vehicle operations." },
              { icon: Award,    title: "Continuing Education",     duration: "Varies",   link: "/programs#continuing-education", back: "CEU credits, recertification courses, and advanced specialty modules for certified professionals." },
              { icon: Brain,    title: "CPI – Crisis Prevention",  duration: "1–2 days", link: "/programs#cpi-crisis",           back: "Evidence-based de-escalation, behavioral assessment, and safe physical intervention for high-stress environments." },
            ].map((p, i) => (
              <FlipCard
                key={p.title}
                delay={i * 0.08}
                height={220}
                front={
                  <div
                    className="rounded-2xl p-6 h-full flex flex-col"
                    style={{
                      backgroundColor: BG_LIGHT,
                      border: `1px solid ${BORDER}`,
                      boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: BLUE }}
                    >
                      <p.icon className="w-5 h-5" style={{ color: WHITE }} />
                    </div>
                    <h3 className="text-base font-bold mb-1" style={{ color: TEXT }}>{p.title}</h3>
                    <p className="text-xs mb-3" style={{ color: TEXT_MUT }}>{p.duration}</p>
                    <div className="flex items-center gap-1 text-xs font-bold mt-auto" style={{ color: BLUE }}>
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                }
                back={
                  <Link
                    to={p.link}
                    className="rounded-2xl p-6 h-full flex flex-col justify-between"
                    style={{
                      backgroundColor: NAVY,
                      textDecoration: "none",
                      boxShadow: "0 8px 32px rgba(15,35,75,0.25)",
                    }}
                  >
                    <div>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                        style={{ backgroundColor: "rgba(37,99,235,0.35)" }}
                      >
                        <p.icon className="w-5 h-5" style={{ color: "rgb(147,197,253)" }} />
                      </div>
                      <h3 className="text-sm font-bold mb-2" style={{ color: WHITE }}>{p.title}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>
                        {p.back}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold mt-4" style={{ color: "rgb(147,197,253)" }}>
                      Enroll Now <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                }
              />
            ))}
          </div>

          <FadeUp delay={0.3} className="text-center">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: EASE_OUT }} style={{ display: "inline-block" }}>
              <Link to="/programs"
                className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold rounded-lg"
                style={{ background: NAVY, color: WHITE, boxShadow: "0 4px 12px rgba(15,35,75,0.20)", transition: "box-shadow 0.25s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 20px rgba(15,35,75,0.30)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 12px rgba(15,35,75,0.20)"; }}>
                View All Programs <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* wave: BG_LIGHT → WHITE */}
      <WaveDivider topColor={BG_LIGHT} bottomColor={WHITE} />

      {/* ══ FEATURED PARTNERSHIP + SIMULATION ══ */}
      <section className="py-20" style={{ backgroundColor: WHITE }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* ALERRT */}
            <AnimatedCard
              delay={0}
              className="rounded-xl p-7"
              style={{ backgroundColor: WHITE, border: `1px solid ${BORDER}`, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: BLUE_SOFT }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                >
                  <Award className="w-5 h-5" style={{ color: BLUE }} />
                </motion.div>
                <h3 className="text-lg font-bold" style={{ color: TEXT }}>ALERRT Program</h3>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: TEXT_BODY }}>
                Our Active Shooter Response training is aligned with the nationally recognized ALERRT program developed at Dallas College — the gold standard for civilian and law enforcement active threat response.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "Run-Hide-Fight civilian response protocols",
                  "Evidence-based active threat tactics",
                  "Coordinated emergency response procedures",
                  "Situational awareness training",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm" style={{ color: TEXT_BODY }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: BLUE }} />
                    {point}
                  </li>
                ))}
              </ul>
              <Link to="/partnerships" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: BLUE }}>
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedCard>

            {/* Simulation */}
            <AnimatedCard
              delay={0.12}
              className="rounded-xl p-7"
              style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 100%)` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                >
                  <Target className="w-5 h-5" style={{ color: "rgb(147,197,253)" }} />
                </motion.div>
                <h3 className="text-lg font-bold" style={{ color: WHITE }}>Simulation-Based Training</h3>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.70)" }}>
                Shadow Training Institute is developing state-of-the-art simulation facilities to replicate real-world conditions. Train under pressure, build confidence, and master critical skills.
              </p>
              <ul className="space-y-2 mb-5">
                {[
                  "High-fidelity scenario environments",
                  "Stress inoculation protocols",
                  "Immediate instructor feedback",
                  "Directly aligned with ALERRT curriculum",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm" style={{ color: "rgba(255,255,255,0.70)" }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "rgb(147,197,253)" }} />
                    {point}
                  </li>
                ))}
              </ul>
              <Link to="/simulation" className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: "rgb(147,197,253)" }}>
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* wave: WHITE → BG_LIGHT */}
      <WaveDivider topColor={WHITE} bottomColor={BG_LIGHT} flip />

      {/* ══ WHY CHOOSE SHADOW ══ */}
      <section className="py-20" style={{ backgroundColor: BG_LIGHT }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>
              Why Choose Shadow
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: TEXT_BODY }}>
              Trusted by professionals across every sector
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {whyItems.map((item, i) => (
              <FlipCard
                key={item.title}
                delay={i * 0.09}
                height={210}
                front={
                  <div
                    className="rounded-2xl p-6 text-center h-full flex flex-col items-center justify-center"
                    style={{
                      backgroundColor: BG_LIGHT,
                      border: `1px solid ${BORDER}`,
                      boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: BLUE }}
                    >
                      <item.icon className="w-6 h-6" style={{ color: WHITE }} />
                    </div>
                    <h3 className="text-sm font-bold mb-2" style={{ color: TEXT }}>{item.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: TEXT_BODY }}>{item.desc}</p>
                  </div>
                }
                back={
                  <Link
                    to={item.link}
                    className="rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center"
                    style={{
                      backgroundColor: NAVY,
                      textDecoration: "none",
                      boxShadow: "0 8px 32px rgba(15,35,75,0.25)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                      style={{ backgroundColor: "rgba(37,99,235,0.35)" }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: "rgb(147,197,253)" }} />
                    </div>
                    <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {item.back}
                    </p>
                    <div className="flex items-center gap-1 text-xs font-bold" style={{ color: "rgb(147,197,253)" }}>
                      Learn More <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* wave: BG_LIGHT → navy gradient */}
      <div style={{ background: BG_LIGHT, lineHeight: 0, marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "90px" }}>
          <defs>
            <linearGradient id="wave-to-navy" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor={NAVY} />
              <stop offset="100%" stopColor={NAVY_MID} />
            </linearGradient>
          </defs>
          <path d="M0,40 C240,90 480,0 720,45 C960,90 1200,10 1440,50 L1440,90 L0,90 Z" fill="url(#wave-to-navy)" />
        </svg>
      </div>

      {/* ══ ENTERPRISE TRAINING SOLUTIONS ══ */}
      <section
        className="py-20"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 100%)` }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left — text */}
            <FadeUp delay={0}>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                style={{ background: "rgba(37,99,235,0.20)", border: "1px solid rgba(37,99,235,0.35)" }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "rgb(147,197,253)" }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgb(147,197,253)" }}>
                  For Organizations
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Open Sans', sans-serif", color: WHITE }}>
                Enterprise Training Solutions
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                Shadow Training Institute delivers customized training programs for organizations of all sizes. We tailor every program to your specific needs, schedule, and industry requirements.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "On-site training at your facility",
                  "Custom curriculum development",
                  "Flexible scheduling and group rates",
                  "Dedicated account management",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.80)" }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "rgb(147,197,253)" }} />
                    {point}
                  </li>
                ))}
              </ul>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: EASE_OUT }}
                style={{ display: "inline-block" }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold rounded-lg"
                  style={{ background: BLUE, color: WHITE, boxShadow: "0 4px 16px rgba(37,99,235,0.35)", transition: "box-shadow 0.25s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,99,235,0.50)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,99,235,0.35)"; }}
                >
                  Request a Proposal <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </FadeUp>

            {/* Right — offering cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Shield,
                  title: "Safety Certified",
                  desc: "All programs are ALERRT-aligned and nationally recognized",
                },
                {
                  icon: Users,
                  title: "Any Team Size",
                  desc: "From individual staff to organization-wide deployments",
                },
                {
                  icon: Target,
                  title: "Custom Programs",
                  desc: "Curriculum tailored to your industry and specific risks",
                },
                {
                  icon: Award,
                  title: "Certified Instructors",
                  desc: "Real-world operational experience in every session",
                },
              ].map((card, i) => (
                <AnimatedCard
                  key={card.title}
                  delay={0.1 + i * 0.09}
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: "rgba(37,99,235,0.35)", border: "1px solid rgba(37,99,235,0.40)" }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2, ease: EASE_OUT }}
                  >
                    <card.icon className="w-5 h-5" style={{ color: "rgb(147,197,253)" }} />
                  </motion.div>
                  <h3 className="text-sm font-bold mb-1.5" style={{ color: WHITE }}>{card.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{card.desc}</p>
                </AnimatedCard>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* wave: enterprise gradient → WHITE */}
      <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 100%)`, lineHeight: 0, marginBottom: "-1px", transform: "scaleX(-1)" }}>
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "90px" }}>
          <path d="M0,40 C240,90 480,0 720,45 C960,90 1200,10 1440,50 L1440,90 L0,90 Z" fill={WHITE} />
        </svg>
      </div>

      {/* ══ TESTIMONIALS ══ */}
      <section className="py-20" style={{ backgroundColor: WHITE }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>
              What Our Clients Say
            </h2>
          </FadeIn>

          <FadeUp delay={0.1}>
            <motion.div
              className="rounded-2xl p-10 text-center relative overflow-hidden"
              style={{ backgroundColor: BG_LIGHT, border: `1px solid ${BORDER}` }}
              whileHover={{ boxShadow: "0 12px 40px rgba(37,99,235,0.08)" }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: BLUE }} />
                ))}
              </div>

              <motion.p
                key={activeTestimonial}
                className="text-base leading-relaxed mb-8 max-w-2xl mx-auto"
                style={{ color: TEXT_BODY }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
              >
                "{testimonials[activeTestimonial].quote}"
              </motion.p>

              <motion.div
                key={`name-${activeTestimonial}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="font-bold text-sm" style={{ color: TEXT }}>{testimonials[activeTestimonial].name}</div>
                <div className="text-xs mt-0.5" style={{ color: TEXT_MUT }}>{testimonials[activeTestimonial].title}</div>
              </motion.div>

              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className="rounded-full"
                    animate={{
                      width: i === activeTestimonial ? 24 : 8,
                      backgroundColor: i === activeTestimonial ? BLUE : TEXT_MUT,
                    }}
                    transition={{ duration: 0.3, ease: EASE_OUT }}
                    style={{ height: "8px" }}
                  />
                ))}
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* wave: WHITE → BG_LIGHT */}
      <WaveDivider topColor={WHITE} bottomColor={BG_LIGHT} />

      {/* ══ FINAL CTA ══ */}
      <section className="py-20" style={{ backgroundColor: BG_LIGHT }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}>
              Ready to Transform Your Training?
            </h2>
            <p className="text-base mb-8 leading-relaxed" style={{ color: TEXT_BODY }}>
              Join thousands of professionals who have elevated their skills through our elite training programs. Get started today with a free consultation.
            </p>
          </FadeIn>
          <FadeUp delay={0.15} className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: EASE_OUT }}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold rounded-lg"
                style={{ background: NAVY, color: WHITE, boxShadow: "0 4px 12px rgba(15,35,75,0.20)", transition: "box-shadow 0.25s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 20px rgba(15,35,75,0.30)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 12px rgba(15,35,75,0.20)"; }}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: EASE_OUT }}>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold rounded-lg transition-colors"
                style={{ border: `1px solid ${BORDER}`, color: TEXT, background: WHITE }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(37,99,235,0.30)"; e.currentTarget.style.color = BLUE; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = TEXT; }}
              >
                View Programs
              </Link>
            </motion.div>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="text-xs" style={{ color: TEXT_MUT }}>
              No commitment required &nbsp;·&nbsp; Call +1 (214) 613-2588
            </p>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
