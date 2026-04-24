import { Link } from "react-router";
import {
  BookOpen, Target, Users, Brain, GraduationCap,
  Heart, Shield, Siren, Activity, Award,
  CheckCircle, ArrowRight, Building2, User, Stethoscope,
  Star, Clock, BadgeCheck,
} from "lucide-react";
import { EagleWatermark } from "../components/EagleWatermark";

const audiences = [
  {
    icon: User,
    title: "Individuals",
    description: "Gain life-saving skills and personal protection training to respond confidently in emergencies.",
    link: "/programs",
  },
  {
    icon: Building2,
    title: "Corporates",
    description: "Comprehensive safety and emergency response training for teams, customized to your organization.",
    link: "/partnerships",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Advanced medical emergency training for healthcare professionals in high-stress clinical environments.",
    link: "/programs",
  },
  {
    icon: Shield,
    title: "Security Teams",
    description: "Elite tactical training and active threat response for security professionals and first responders.",
    link: "/simulation",
  },
];

const methodologies = [
  {
    icon: BookOpen,
    title: "Blended Learning",
    description: "Online theory combined with hands-on practical application for maximum retention.",
    link: "/methodology#blended-learning",
  },
  {
    icon: Target,
    title: "Problem-Based Learning",
    description: "Real-world scenarios that challenge critical thinking and decision-making under pressure.",
    link: "/methodology#problem-based",
  },
  {
    icon: Users,
    title: "Scenario-Based Training",
    description: "Immersive environments that replicate actual emergency and tactical situations.",
    link: "/methodology#scenario-based",
  },
  {
    icon: Brain,
    title: "Stress Inoculation",
    description: "Progressive exposure to high-pressure situations to build psychological resilience.",
    link: "/methodology#stress-inoculation",
  },
  {
    icon: GraduationCap,
    title: "Adult Learning Principles",
    description: "Building on existing knowledge and professional experience for accelerated growth.",
    link: "/methodology#adult-learning",
  },
];

const programs = [
  {
    icon: Heart,
    title: "CPR / AED / First Aid",
    description: "Life-saving techniques for cardiac emergencies and basic first aid response.",
    bullets: ["Adult, Child & Infant CPR", "AED operation & safety", "Wound care & bandaging"],
    duration: "4–8 hrs",
    cert: "ALERRT Aligned",
    link: "/programs#cpr-aed",
  },
  {
    icon: Activity,
    title: "Stop the Bleed",
    description: "Critical hemorrhage control training developed by the Department of Homeland Security.",
    bullets: ["Tourniquet application", "Wound packing procedures", "Hemorrhage assessment"],
    duration: "2 hrs",
    cert: "ALERRT Aligned",
    link: "/programs#stop-the-bleed",
  },
  {
    icon: Shield,
    title: "CPI – Crisis Prevention",
    description: "Evidence-based de-escalation and crisis intervention for high-stress environments.",
    bullets: ["Verbal de-escalation", "Behavioral assessment", "Safe physical intervention"],
    duration: "1–2 days",
    cert: "ALERRT Aligned",
    link: "/programs#cpi-crisis",
  },
  {
    icon: Siren,
    title: "Active Shooter Response",
    description: "Advanced training aligned with ALERRT protocols for active threat situations.",
    bullets: ["Run-Hide-Fight protocols", "Situational awareness", "Emergency coordination"],
    duration: "4–8 hrs",
    cert: "ALERRT Aligned",
    link: "/programs#active-shooter",
  },
  {
    icon: Target,
    title: "Tactical Training",
    description: "Elite security and protection protocols for high-risk professional environments.",
    bullets: ["Threat assessment", "Protective operations", "Team tactics"],
    duration: "Custom",
    cert: "ALERRT Aligned",
    link: "/programs#tactical-training",
  },
  {
    icon: Award,
    title: "Continuing Education",
    description: "Advanced courses and recertification programs for ongoing professional development.",
    bullets: ["CEU credit programs", "Recertification courses", "Specialty modules"],
    duration: "Varies",
    cert: "ALERRT Aligned",
    link: "/programs#continuing-education",
  },
];

const whyUs = [
  { icon: BadgeCheck, title: "Nationally Certified", text: "All programs meet or exceed national certification standards." },
  { icon: Users, title: "Expert Instructors", text: "Certified professionals with real-world operational experience." },
  { icon: Target, title: "Scenario-Based", text: "Training built around realistic, high-fidelity simulations." },
  { icon: Star, title: "Proven Results", text: "98% satisfaction rate across 1,000+ trained professionals." },
  { icon: Clock, title: "Flexible Scheduling", text: "On-site, off-site, and custom scheduling to fit your team." },
  { icon: Building2, title: "Corporate Solutions", text: "Tailored programs for organizations of any size or sector." },
];


export function Home() {
  return (
    /* ── Single crest background for the whole page ── */
    <div
      style={{
        fontFamily: "'Lato', sans-serif",
        backgroundColor: "#1A1008",
      }}
    >
      {/* Cinematic eagle watermark — fixed, z-index 2 */}
      <EagleWatermark />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ zIndex: 10 }}>
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-[#1A1008]/42" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            
            {/* ── LEFT SIDE: TRUST INDICATORS ── */}
            <div className="hidden lg:flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                {[
                  { icon: BadgeCheck, label: "Nationally Certified", desc: "ALERRT Aligned" },
                  { icon: Users, label: "Expert Instructors", desc: "Real-world experience" },
                  { icon: Target, label: "Scenario-Based", desc: "High-fidelity training" },
                  { icon: Shield, label: "Enterprise Ready", desc: "Corporate solutions" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 opacity-75 hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded flex items-center justify-center bg-[#B8963E]/10 border border-[#B8963E]/20 flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-[#B8963E]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wide">{item.label}</div>
                      <div className="text-xs text-[#CFCFCF]/60">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── CENTER: MAIN HERO CONTENT ── */}
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#221510]/80 border border-[#B8963E]/30 rounded-full mb-8 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 bg-[#B8963E] rounded-full" />
                <span className="text-[#B8963E] text-xs font-bold tracking-widest uppercase">
                  Elite Professional Training
                </span>
              </div>

              <h2
                className="text-6xl sm:text-6xl md:text-6xl font-bold text-[#F5F5F5] mb-6 leading-[1.15] tracking-tight"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Train for Reality.
                <br />
                <span className="text-[#B8963E]">Not Theory.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#CFCFCF] mb-6 max-w-xl leading-relaxed">
                Real-world emergency and tactical training for professionals who need to perform when it matters most.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 w-full">
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center gap-2 px-4 py-4 bg-[#B8963E] text-[#1A1008] text-base font-bold rounded hover:bg-[#a07830] transition-all hover:shadow-[0_0_24px_rgba(184,150,62,0.25)] min-h-[40px]"
                >
                  View Programs
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-4 border border-[#B8963E]/60 text-[#B8963E] text-base font-bold rounded hover:bg-[#221510]/80 hover:border-[#B8963E] transition-all min-h-[48px] backdrop-blur-sm"
                >
                  Request Training
                </Link>
              </div>

               
            </div>

            {/* ── RIGHT SIDE: KEY STATISTICS ── */}
            <div className="hidden lg:flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                {[
                  { stat: "1,000+", label: "Professionals Trained", icon: Users },
                  { stat: "98%", label: "Satisfaction Rate", icon: Star },
                  { stat: "15+", label: "Years Experience", icon: Award },
                  { stat: "6", label: "Certification Programs", icon: GraduationCap },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 opacity-75 hover:opacity-100 transition-opacity text-right">
                    <div className="flex-1">
                      <div className="text-lg font-bold text-[#B8963E]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                        {item.stat}
                      </div>
                      <div className="text-xs text-[#CFCFCF]/60">{item.label}</div>
                    </div>
                    <div className="w-8 h-8 rounded flex items-center justify-center bg-[#B8963E]/10 border border-[#B8963E]/20 flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-[#B8963E]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE TRAIN ─────────────────────────────────────── */}
      <section className="relative py-20" style={{ zIndex: 10 }}>
        <div className="absolute inset-0 bg-[#1A1008]/48" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Who We <span className="text-[#B8963E]">Train</span>
            </h2>
            <p className="text-[#CFCFCF] text-lg max-w-2xl mx-auto">
              Specialized programs tailored to your profession and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((a) => (
              <Link
                key={a.title}
                to={a.link}
                className="group bg-[#221510]/80 backdrop-blur-sm border border-[#B8963E]/15 rounded-lg p-7 hover:border-[#B8963E]/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#1A1008] border border-[#B8963E]/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#B8963E] group-hover:border-[#B8963E] transition-all duration-300">
                  <a.icon className="w-6 h-6 text-[#B8963E] group-hover:text-[#1A1008] transition-colors duration-300" />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-2 group-hover:text-[#B8963E] transition-colors"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {a.title}
                </h3>
                <p className="text-[#CFCFCF] text-sm leading-relaxed">{a.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAINING METHODOLOGY ─────────────────────────────── */}
      <section className="relative py-20" style={{ zIndex: 10 }}>
        <div className="absolute inset-0 bg-[#221510]/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-[#B8963E]/10 border border-[#B8963E]/25 rounded text-[#B8963E] text-xs font-bold uppercase tracking-widest mb-4">
              Our Approach
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Training <span className="text-[#B8963E]">Methodology</span>
            </h2>
            <p className="text-[#CFCFCF] text-lg max-w-2xl mx-auto">
              Evidence-based methods proven to maximize retention and real-world performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
            {methodologies.map((m, i) => (
              <div
                key={m.title}
                className="bg-[#1A1008]/42 backdrop-blur-sm border border-[#B8963E]/10 rounded-lg p-6 hover:border-[#B8963E]/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#221510] border border-[#B8963E]/20 rounded flex items-center justify-center mb-4 group-hover:bg-[#B8963E] group-hover:border-[#B8963E] transition-all duration-300">
                  <m.icon className="w-5 h-5 text-[#B8963E] group-hover:text-[#1A1008] transition-colors duration-300" />
                </div>
                <div className="text-[#B8963E]/40 text-xs font-bold mb-1">0{i + 1}</div>
                <h3
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {m.title}
                </h3>
                <p className="text-[#CFCFCF] text-sm leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/methodology"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#B8963E]/40 text-[#B8963E] text-sm font-bold rounded hover:bg-[#221510] hover:border-[#B8963E] transition-all"
            >
              Explore Our Methodology
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRAINING PROGRAMS ────────────────────────────────── */}
      <section className="relative py-20" style={{ zIndex: 10 }}>
        <div className="absolute inset-0 bg-[#1A1008]/48" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-[#B8963E]/10 border border-[#B8963E]/25 rounded text-[#B8963E] text-xs font-bold uppercase tracking-widest mb-4">
              Certification Programs
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Training <span className="text-[#B8963E]">Programs</span>
            </h2>
            <p className="text-[#CFCFCF] text-lg max-w-2xl mx-auto">
              Nationally certified programs designed for real-world application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {programs.map((p) => (
              <div
                key={p.title}
                className="bg-[#221510]/80 backdrop-blur-sm border border-[#B8963E]/10 rounded-lg p-7 flex flex-col hover:border-[#B8963E]/40 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-[#1A1008] border border-[#B8963E]/20 rounded flex items-center justify-center group-hover:bg-[#B8963E] group-hover:border-[#B8963E] transition-all duration-300">
                    <p.icon className="w-5 h-5 text-[#B8963E] group-hover:text-[#1A1008] transition-colors duration-300" />
                  </div>
                  <span className="text-xs text-[#B8963E] bg-[#B8963E]/10 border border-[#B8963E]/20 px-2 py-1 rounded font-semibold">
                    {p.duration}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-[#CFCFCF] text-sm leading-relaxed mb-4">{p.description}</p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-[#CFCFCF]">
                      <div className="w-1 h-1 bg-[#B8963E] rounded-full flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-[#B8963E]/10">
                  <span className="text-xs text-[#CFCFCF]/60">{p.cert}</span>
                  <Link
                    to={p.link}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#B8963E] hover:gap-2.5 transition-all"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8963E] text-[#1A1008] font-bold rounded hover:bg-[#a07830] transition-all hover:shadow-[0_0_24px_rgba(184,150,62,0.18)] min-h-[48px]"
            >
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SIMULATION TRAINING ──────────────────────────────── */}
      <section className="relative py-20" style={{ zIndex: 10 }}>
        <div className="absolute inset-0 bg-[#221510]/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-[#B8963E]/10 border border-[#B8963E]/25 rounded text-[#B8963E] text-xs font-bold uppercase tracking-widest mb-5">
                Premium Facilities
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Simulation <span className="text-[#B8963E]">Training</span>
              </h2>
              <p className="text-[#CFCFCF] text-base leading-relaxed mb-7">
                State-of-the-art facilities that replicate real-world conditions. Train under pressure, build muscle memory, and develop the confidence to perform when it matters most.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  ["High-Fidelity Environments", "Tactical settings that replicate real-world conditions"],
                  ["Professional Equipment", "Industry-standard gear and simulation technology"],
                  ["Real-Time Feedback", "Immediate performance assessment and expert coaching"],
                ].map(([title, desc]) => (
                  <li key={title} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#B8963E]/10 border border-[#B8963E]/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[#B8963E]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{title}</div>
                      <div className="text-[#CFCFCF] text-sm">{desc}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                to="/simulation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8963E] text-[#1A1008] font-bold rounded hover:bg-[#a07830] transition-all hover:shadow-[0_0_24px_rgba(184,150,62,0.18)] min-h-[48px]"
              >
                Explore Simulation Training
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Visual card */}
            <div className="bg-[#1A1008]/42 backdrop-blur-sm border border-[#B8963E]/20 rounded-lg p-10 flex flex-col items-center justify-center min-h-[320px] text-center">
              <div className="w-20 h-20 bg-[#221510] border border-[#B8963E]/20 rounded-full flex items-center justify-center mb-5">
                <img
                  src="/images/shadow-logo.png"
                  alt="Shadow Training Institute"
                  className="w-12 h-12 object-contain opacity-70"
                />
              </div>
              <div className="text-[#B8963E] font-bold text-sm uppercase tracking-widest mb-1">
                Simulation Training
              </div>
              
              <div className="mt-6 w-full max-w-xs space-y-2">
                {["CPR / AED Simulation", "Active Shooter Simulation", "Tactical Training Simulation"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#CFCFCF]/70 bg-[#221510]/60 rounded px-3 py-2">
                    <div className="w-1.5 h-1.5 bg-[#B8963E]/50 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="relative py-20" style={{ zIndex: 10 }}>
        <div className="absolute inset-0 bg-[#1A1008]/48" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Why Choose <span className="text-[#B8963E]">Shadow Training</span>
            </h2>
            <p className="text-[#CFCFCF] text-lg max-w-2xl mx-auto">
              Elite training that prepares you for reality, not just certification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((w) => (
              <div
                key={w.title}
                className="bg-[#221510]/80 backdrop-blur-sm border border-[#B8963E]/10 rounded-lg p-6 flex items-start gap-4 hover:border-[#B8963E]/35 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#1A1008] border border-[#B8963E]/20 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#B8963E] group-hover:border-[#B8963E] transition-all duration-300">
                  <w.icon className="w-5 h-5 text-[#B8963E] group-hover:text-[#1A1008] transition-colors duration-300" />
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-white mb-1"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {w.title}
                  </h3>
                  <p className="text-[#CFCFCF] text-sm leading-relaxed">{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — plain background, no crest ───────────── */}
      <section className="py-24 bg-[#221510]" style={{ position: "relative", zIndex: 10 }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Ready to <span className="text-[#B8963E]">Begin?</span>
          </h2>
          <p className="text-[#CFCFCF] text-lg mb-10 leading-relaxed">
            Join thousands of professionals who have elevated their skills through our elite training programs. Real training. Real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B8963E] text-[#1A1008] font-bold rounded hover:bg-[#a07830] transition-all hover:shadow-[0_0_24px_rgba(184,150,62,0.20)] min-h-[48px]"
            >
              Request Training
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#B8963E]/50 text-[#B8963E] font-bold rounded hover:bg-[#1A1008] hover:border-[#B8963E] transition-all min-h-[48px]"
            >
              Browse Programs
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto">
            {[["1,000+", "Professionals Trained"], ["98%", "Satisfaction Rate"], ["15+", "Years Experience"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-[#B8963E]" style={{ fontFamily: "'Open Sans', sans-serif" }}>{num}</div>
                <div className="text-[#CFCFCF] text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
