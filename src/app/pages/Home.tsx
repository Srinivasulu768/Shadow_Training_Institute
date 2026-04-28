import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  BookOpen, Target, Brain, GraduationCap,
  Heart, Shield, Activity, Award, Users,
  CheckCircle, ArrowRight,
  Star, TrendingUp, Zap, ChevronLeft, ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { AnimatedCard, FadeUp, FadeIn, EASE_OUT } from "../components/AnimatedCard";

/* ── design tokens ── */
const NAVY      = "rgb(13, 27, 62)";
const NAVY_MID  = "rgb(18, 40, 90)";
const NAVY_CARD = "rgb(22, 48, 105)";
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
    img: "/images/sti4.jpg",
  },
  {
    icon: Shield,
    title: "Crisis Prevention",
    desc: "De-escalation and crisis intervention training",
    link: "/programs#cpi-crisis",
    img: "/images/sti6.jpg",
  },
  {
    icon: Target,
    title: "Tactical Training",
    desc: "Elite security and protection protocols",
    link: "/programs#tactical-training",
    img: "/images/sti8.jpg",
  },
  {
    icon: Activity,
    title: "Stop the Bleed",
    desc: "Critical hemorrhage control and emergency response",
    link: "/programs#stop-the-bleed",
    img: "/images/sti5.jpg",
  },
];

const whyItems = [
  { icon: Award,      title: "Certified Instructors",   desc: "All instructors hold active certifications and real-world operational experience." },
  { icon: Target,     title: "Expert Instructors",      desc: "Industry veterans with hands-on field experience across multiple disciplines." },
  { icon: TrendingUp, title: "Effective Focus",         desc: "Evidence-based curriculum designed for maximum skill retention and application." },
  { icon: Zap,        title: "Proven Results",          desc: "98% certification rate with thousands of professionals trained nationwide." },
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

export function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => setActiveSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setActiveSlide((s) => (s + 1) % heroSlides.length);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: WHITE }}>

      {/* ══ HERO ══ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 100%)`,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
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
              {/* label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5" style={{ backgroundColor: GOLD }} />
                <span className="text-xs font-bold tracking-[0.20em] uppercase" style={{ color: GOLD }}>
                  Enterprise Training
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.08]"
                style={{ fontFamily: "'Open Sans', sans-serif", color: WHITE }}
              >
                Transform Your<br />
                Workforce with<br />
                Enterprise-Grade<br />
                Training
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

              {/* Stats */}
              <div className="flex gap-8">
                {[
                  { value: "500+",  label: "Organizations" },
                  { value: "10k+",  label: "Trained" },
                  { value: "95%",   label: "Satisfaction" },
                ].map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: EASE_OUT }}
                  >
                    <div className="text-2xl font-extrabold" style={{ color: WHITE, fontFamily: "'Open Sans', sans-serif" }}>
                      {s.value}
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
                  </motion.div>
                ))}
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

        {/* ── Infinite marquee track ── */}
        <div
          className="relative"
          style={{ overflow: "hidden" }}
          /* pause on hover */
          onMouseEnter={(e) => {
            const track = e.currentTarget.querySelector<HTMLDivElement>(".marquee-track");
            if (track) track.style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            const track = e.currentTarget.querySelector<HTMLDivElement>(".marquee-track");
            if (track) track.style.animationPlayState = "running";
          }}
        >
          {/* fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #ffffff, transparent)" }} />

          <div
            className="marquee-track flex gap-5"
            style={{
              width: "max-content",
              animation: "marquee-scroll 28s linear infinite",
              willChange: "transform",
            }}
          >
            {/* duplicate the list twice for seamless loop */}
            {[...methodologies, ...methodologies].map((m, i) => (
              <motion.div
                key={`${m.title}-${i}`}
                className="rounded-2xl p-6 cursor-default overflow-hidden relative flex-shrink-0"
                style={{
                  backgroundColor: BG_LIGHT,
                  border: `1px solid ${BORDER}`,
                  width: "200px",
                }}
                whileHover={{
                  y: -7,
                  scale: 1.03,
                  boxShadow: "0 16px 40px rgba(37,99,235,0.14)",
                  borderColor: "rgba(37,99,235,0.25)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: EASE_OUT }}
              >
                {/* shimmer on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background: "linear-gradient(110deg, transparent 30%, rgba(37,99,235,0.07) 50%, transparent 70%)",
                    backgroundSize: "200% 100%",
                    backgroundPosition: "200% 0",
                  }}
                  whileHover={{ backgroundPosition: "-200% 0" }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                />
                {/* icon */}
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: BLUE }}
                  whileHover={{ scale: 1.1, rotate: 4 }}
                  transition={{ duration: 0.22, ease: EASE_OUT }}
                >
                  <m.icon className="w-6 h-6" style={{ color: WHITE }} />
                </motion.div>
                <h3 className="text-sm font-bold leading-snug mb-1" style={{ color: TEXT }}>{m.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: TEXT_BODY }}>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* keyframe injected inline */}
        <style>{`
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ══ TRAINING PROGRAMS ══ */}
      <section className="py-20 overflow-hidden" style={{ backgroundColor: BG_LIGHT }}>
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
        </div>

        {/* Reverse marquee */}
        <div
          className="relative mb-8"
          style={{ overflow: "hidden" }}
          onMouseEnter={(e) => { const t = e.currentTarget.querySelector<HTMLDivElement>(".marquee-rev"); if (t) t.style.animationPlayState = "paused"; }}
          onMouseLeave={(e) => { const t = e.currentTarget.querySelector<HTMLDivElement>(".marquee-rev"); if (t) t.style.animationPlayState = "running"; }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to right, ${BG_LIGHT}, transparent)` }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to left, ${BG_LIGHT}, transparent)` }} />

          <div
            className="marquee-rev flex gap-5"
            style={{
              width: "max-content",
              animation: "marquee-scroll-rev 32s linear infinite",
              willChange: "transform",
            }}
          >
            {[...([
              { icon: Heart,    title: "CPR / AED / First Aid",   duration: "4–8 hrs",  link: "/programs#cpr-aed" },
              { icon: Activity, title: "Stop the Bleed",           duration: "2 hrs",    link: "/programs#stop-the-bleed" },
              { icon: Shield,   title: "Active Shooter Response",  duration: "4–8 hrs",  link: "/programs#active-shooter" },
              { icon: Target,   title: "Tactical Training",        duration: "Custom",   link: "/programs#tactical-training" },
              { icon: Award,    title: "Continuing Education",     duration: "Varies",   link: "/programs#continuing-education" },
            ]), ...([
              { icon: Heart,    title: "CPR / AED / First Aid",   duration: "4–8 hrs",  link: "/programs#cpr-aed" },
              { icon: Activity, title: "Stop the Bleed",           duration: "2 hrs",    link: "/programs#stop-the-bleed" },
              { icon: Shield,   title: "Active Shooter Response",  duration: "4–8 hrs",  link: "/programs#active-shooter" },
              { icon: Target,   title: "Tactical Training",        duration: "Custom",   link: "/programs#tactical-training" },
              { icon: Award,    title: "Continuing Education",     duration: "Varies",   link: "/programs#continuing-education" },
            ])].map((p, i) => (
              <Link
                key={`prog-${i}`}
                to={p.link}
                style={{ textDecoration: "none", flexShrink: 0 }}
              >
                <motion.div
                  className="rounded-2xl p-6 overflow-hidden relative"
                  style={{
                    backgroundColor: WHITE,
                    border: `1px solid ${BORDER}`,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                    width: "220px",
                  }}
                  whileHover={{
                    y: -7,
                    scale: 1.03,
                    boxShadow: "0 16px 40px rgba(37,99,235,0.14)",
                    borderColor: "rgba(37,99,235,0.25)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.25, ease: EASE_OUT }}
                >
                  <motion.div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: BLUE }}
                    whileHover={{ scale: 1.1, rotate: 4 }}
                    transition={{ duration: 0.22, ease: EASE_OUT }}
                  >
                    <p.icon className="w-5 h-5" style={{ color: WHITE }} />
                  </motion.div>
                  <h3 className="text-sm font-bold mb-1" style={{ color: TEXT }}>{p.title}</h3>
                  <p className="text-xs mb-3" style={{ color: TEXT_MUT }}>{p.duration}</p>
                  <div className="flex items-center gap-1 text-xs font-bold" style={{ color: BLUE }}>
                    Learn More <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        <FadeUp delay={0.3} className="text-center">
          <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: EASE_OUT }} style={{ display: "inline-block" }}>
            <Link to="/programs" className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold rounded-lg"
              style={{ background: NAVY, color: WHITE, boxShadow: "0 4px 12px rgba(13,27,62,0.20)", transition: "box-shadow 0.25s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 20px rgba(13,27,62,0.30)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 12px rgba(13,27,62,0.20)"; }}>
              View All Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </FadeUp>

        <style>{`
          @keyframes marquee-scroll-rev {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </section>

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
              <AnimatedCard
                key={item.title}
                delay={i * 0.09}
                className="rounded-xl p-6 text-center"
                style={{
                  backgroundColor: WHITE,
                  border: `1px solid ${BORDER}`,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: BLUE_SOFT }}
                  whileHover={{ scale: 1.1, backgroundColor: BLUE }}
                  transition={{ duration: 0.22, ease: EASE_OUT }}
                >
                  <item.icon className="w-6 h-6" style={{ color: BLUE }} />
                </motion.div>
                <h3 className="text-sm font-bold mb-2" style={{ color: TEXT }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: TEXT_BODY }}>{item.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

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
                style={{ background: NAVY, color: WHITE, boxShadow: "0 4px 12px rgba(13,27,62,0.20)", transition: "box-shadow 0.25s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 20px rgba(13,27,62,0.30)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 12px rgba(13,27,62,0.20)"; }}
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
