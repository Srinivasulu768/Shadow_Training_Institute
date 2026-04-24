import { Link } from "react-router";
import {
  BookOpen, Target, Users, Brain, GraduationCap,
  Heart, Shield, Siren, Activity, Award,
  CheckCircle, ArrowRight, Building2, User, Stethoscope,
  Star, Clock, BadgeCheck,
} from "lucide-react";
import { EagleWatermark } from "../components/EagleWatermark";
import { HeroEaglePanel } from "../components/HeroEaglePanel";

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
    <div
      style={{
        fontFamily: "'Lato', sans-serif",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Cinematic eagle watermark — fixed, z-index 2 */}
      <EagleWatermark />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-stretch overflow-hidden bg-white" style={{ zIndex: 10 }}>
        {/* ── LEFT: HERO CONTENT ── */}
        <div className="relative z-10 flex items-center w-full lg:w-1/2 px-8 sm:px-12 lg:px-16 xl:px-24 py-24">
          <div className="w-full max-w-xl">

            {/* Hero headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1F2937] mb-6 leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Train for Reality.
              <br />
              <span className="text-[#C9A96E]">Not Theory.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#6B7280] mb-8 max-w-lg leading-relaxed">
              Real-world emergency and tactical training for professionals who need to perform when it matters most.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A96E] text-white text-base font-bold rounded hover:bg-[#B8965D] transition-all hover:shadow-[0_4px_20px_rgba(201,169,110,0.30)] min-h-[48px]"
              >
                View Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#D1D5DB] text-[#374151] text-base font-bold rounded hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all min-h-[48px]"
              >
                Request Training
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: BadgeCheck, label: "Nationally Certified", desc: "ALERRT Aligned" },
                { icon: Users, label: "Expert Instructors", desc: "Real-world experience" },
                { icon: Target, label: "Scenario-Based", desc: "High-fidelity training" },
                { icon: Shield, label: "Enterprise Ready", desc: "Corporate solutions" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded flex items-center justify-center bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-[#C9A96E]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1F2937] uppercase tracking-wide">{item.label}</div>
                    <div className="text-xs text-[#9CA3AF]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: ANIMATED EAGLE PANEL ── */}
        <div className="hidden lg:block lg:w-1/2 flex-shrink-0 relative" style={{ minHeight: "100vh" }}>
          <HeroEaglePanel />
        </div>

        {/* placeholder to keep old grid structure removed — replaced above */}
        <div className="hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          </div>
        </div>
      </section>

      {/* ── WHO WE TRAIN ─────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F7FA]" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Who We <span className="text-[#C9A96E]">Train</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Specialized programs tailored to your profession and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((a) => (
              <Link
                key={a.title}
                to={a.link}
                className="group bg-white border border-[#E5E7EB] rounded-lg p-7 hover:border-[#C9A96E]/50 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              >
                <div className="w-12 h-12 bg-[#F3F4F6] border border-[#E5E7EB] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#C9A96E] group-hover:border-[#C9A96E] transition-all duration-300">
                  <a.icon className="w-6 h-6 text-[#C9A96E] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3
                  className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#C9A96E] transition-colors"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {a.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{a.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAINING METHODOLOGY ─────────────────────────────── */}
      <section className="py-20 bg-white" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-[#C9A96E]/10 border border-[#C9A96E]/25 rounded text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-4">
              Our Approach
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Training <span className="text-[#C9A96E]">Methodology</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Evidence-based methods proven to maximize retention and real-world performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
            {methodologies.map((m, i) => (
              <div
                key={m.title}
                className="bg-[#F5F7FA] border border-[#E5E7EB] rounded-lg p-6 hover:border-[#C9A96E]/40 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-white border border-[#E5E7EB] rounded flex items-center justify-center mb-4 group-hover:bg-[#C9A96E] group-hover:border-[#C9A96E] transition-all duration-300">
                  <m.icon className="w-5 h-5 text-[#C9A96E] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-[#C9A96E]/60 text-xs font-bold mb-1">0{i + 1}</div>
                <h3
                  className="text-base font-bold text-[#1F2937] mb-2"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {m.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/methodology"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#D1D5DB] text-[#374151] text-sm font-bold rounded hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all"
            >
              Explore Our Methodology
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRAINING PROGRAMS ────────────────────────────────── */}
      <section className="py-20 bg-[#F5F7FA]" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-[#C9A96E]/10 border border-[#C9A96E]/25 rounded text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-4">
              Certification Programs
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Training <span className="text-[#C9A96E]">Programs</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Nationally certified programs designed for real-world application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {programs.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-[#E5E7EB] rounded-lg p-7 flex flex-col hover:border-[#C9A96E]/40 hover:shadow-[0_4px_16px_rgba(201,169,110,0.08)] transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 bg-[#F5F7FA] border border-[#E5E7EB] rounded flex items-center justify-center group-hover:bg-[#C9A96E] group-hover:border-[#C9A96E] transition-all duration-300">
                    <p.icon className="w-5 h-5 text-[#C9A96E] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-xs text-[#C9A96E] bg-[#C9A96E]/10 border border-[#C9A96E]/20 px-2 py-1 rounded font-semibold">
                    {p.duration}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold text-[#1F2937] mb-2"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{p.description}</p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-[#374151]">
                      <div className="w-1 h-1 bg-[#C9A96E] rounded-full flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
                  <span className="text-xs text-[#9CA3AF]">{p.cert}</span>
                  <Link
                    to={p.link}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C9A96E] hover:gap-2.5 transition-all"
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-white font-bold rounded hover:bg-[#B8965D] transition-all min-h-[48px]"
            >
              View All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SIMULATION TRAINING ──────────────────────────────── */}
      <section className="py-20 bg-white" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-[#C9A96E]/10 border border-[#C9A96E]/25 rounded text-[#C9A96E] text-xs font-bold uppercase tracking-widest mb-5">
                Premium Facilities
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-5 leading-tight"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Simulation <span className="text-[#C9A96E]">Training</span>
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed mb-7">
                State-of-the-art facilities that replicate real-world conditions. Train under pressure, build muscle memory, and develop the confidence to perform when it matters most.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  ["High-Fidelity Environments", "Tactical settings that replicate real-world conditions"],
                  ["Professional Equipment", "Industry-standard gear and simulation technology"],
                  ["Real-Time Feedback", "Immediate performance assessment and expert coaching"],
                ].map(([title, desc]) => (
                  <li key={title} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[#C9A96E]" />
                    </div>
                    <div>
                      <div className="text-[#1F2937] font-semibold text-sm">{title}</div>
                      <div className="text-[#6B7280] text-sm">{desc}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                to="/simulation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-white font-bold rounded hover:bg-[#B8965D] transition-all min-h-[48px]"
              >
                Explore Simulation Training
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Visual card */}
            <div className="bg-[#F5F7FA] border border-[#E5E7EB] rounded-lg p-10 flex flex-col items-center justify-center min-h-[320px] text-center">
              <div className="w-20 h-20 bg-white border border-[#E5E7EB] rounded-full flex items-center justify-center mb-5 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                <img
                  src="/images/shadow-logo.png"
                  alt="Shadow Training Institute"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="text-[#C9A96E] font-bold text-sm uppercase tracking-widest mb-1">
                Simulation Training
              </div>
              <div className="mt-6 w-full max-w-xs space-y-2">
                {["CPR / AED Simulation", "Active Shooter Simulation", "Tactical Training Simulation"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#6B7280] bg-white border border-[#E5E7EB] rounded px-3 py-2">
                    <div className="w-1.5 h-1.5 bg-[#C9A96E]/60 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F7FA]" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Why Choose <span className="text-[#C9A96E]">Shadow Training</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Elite training that prepares you for reality, not just certification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((w) => (
              <div
                key={w.title}
                className="bg-white border border-[#E5E7EB] rounded-lg p-6 flex items-start gap-4 hover:border-[#C9A96E]/40 hover:shadow-[0_4px_12px_rgba(201,169,110,0.08)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#F5F7FA] border border-[#E5E7EB] rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A96E] group-hover:border-[#C9A96E] transition-all duration-300">
                  <w.icon className="w-5 h-5 text-[#C9A96E] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-[#1F2937] mb-1"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                  >
                    {w.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────── */}
      <section className="py-24 bg-white" style={{ position: "relative", zIndex: 10 }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1F2937] mb-5"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Ready to <span className="text-[#C9A96E]">Begin?</span>
          </h2>
          <p className="text-[#6B7280] text-lg mb-10 leading-relaxed">
            Join thousands of professionals who have elevated their skills through our elite training programs. Real training. Real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A96E] text-white font-bold rounded hover:bg-[#B8965D] transition-all min-h-[48px]"
            >
              Request Training
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#C9A96E]/50 text-[#C9A96E] font-bold rounded hover:bg-[#C9A96E]/5 hover:border-[#C9A96E] transition-all min-h-[48px]"
            >
              Browse Programs
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto">
            {[["1,000+", "Professionals Trained"], ["98%", "Satisfaction Rate"], ["15+", "Years Experience"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-[#C9A96E]" style={{ fontFamily: "'Open Sans', sans-serif" }}>{num}</div>
                <div className="text-[#6B7280] text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
