import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  BookOpen, Target, Users, Brain, GraduationCap,
  CheckCircle, ArrowRight, Lightbulb, TrendingUp,
} from "lucide-react";

const methodologies = [
  {
    id: "blended-learning",
    icon: BookOpen,
    title: "Blended Learning Approach",
    tagline: "Theory Meets Practice",
    description: "Our blended learning model seamlessly integrates online theoretical instruction with intensive hands-on practical application. This dual-modality approach ensures comprehensive understanding while maximizing training efficiency.",
    benefits: [
      "Flexible online modules — learn theory at your own pace",
      "In-person sessions focused entirely on skill development",
      "Reduced classroom time without sacrificing quality",
      "Accessible pre-course materials for better preparation",
      "Continuous reinforcement through digital resources",
    ],
    application: "Students complete foundational knowledge online, then apply skills in realistic scenarios during in-person sessions — ensuring both theoretical understanding and practical competence.",
    image: "/images/sti10.jpg",
  },
  {
    id: "problem-based",
    icon: Target,
    title: "Problem-Based Learning",
    tagline: "Critical Thinking Under Pressure",
    description: "Problem-based learning places students at the center of realistic challenges requiring critical thinking, decision-making, and collaborative problem-solving. Students actively engage with complex scenarios rather than passively absorbing information.",
    benefits: [
      "Develops critical thinking and analytical skills",
      "Encourages active learning and engagement",
      "Builds confidence in decision-making",
      "Promotes collaborative problem-solving",
      "Prepares students for unpredictable real-world situations",
    ],
    application: "Instructors present realistic problems without predetermined solutions, guiding students to analyze situations, identify priorities, and develop effective responses through facilitated discussion.",
    image: "/images/sti11.jpg",
  },
  {
    id: "scenario-based",
    icon: Users,
    title: "Scenario-Based Training",
    tagline: "Immersive Real-World Simulation",
    description: "Scenario-based training immerses students in high-fidelity simulations that replicate actual emergency and tactical situations. This experiential methodology builds muscle memory and decision-making skills in controlled environments.",
    benefits: [
      "Safe practice of high-risk procedures",
      "Realistic stress exposure in controlled settings",
      "Immediate feedback and performance assessment",
      "Development of procedural memory and automatic responses",
      "Team coordination and communication practice",
    ],
    application: "Students engage in realistic scenarios using professional equipment, responding to evolving situations while instructors observe, assess, and provide targeted feedback.",
    image: "/images/sti12.jpg",
  },
  {
    id: "stress-inoculation",
    icon: Brain,
    title: "Stress Inoculation Training",
    tagline: "Performance Under Pressure",
    description: "Stress inoculation training progressively exposes students to controlled stressors, building psychological resilience and maintaining performance effectiveness during high-pressure situations — critical for emergency response roles.",
    benefits: [
      "Improved performance under actual emergency conditions",
      "Reduced anxiety and increased confidence",
      "Enhanced stress management capabilities",
      "Better decision-making during crisis situations",
      "Reduced performance degradation under pressure",
    ],
    application: "Training incrementally increases stress through time pressure, distractions, and scenario complexity — allowing students to develop coping mechanisms and maintain skill proficiency.",
    image: "/images/sti13.jpg",
  },
  {
    id: "adult-learning",
    icon: GraduationCap,
    title: "Adult Learning Principles",
    tagline: "Experience-Centered Education",
    description: "Our approach respects adult learners' experience and autonomy, creating a collaborative environment where students are active participants. Adults learn best when training is immediately relevant and practically applicable.",
    benefits: [
      "Leverages existing knowledge and experience",
      "Promotes self-directed learning",
      "Focuses on practical, immediately applicable skills",
      "Respects learner autonomy and professional context",
      "Creates collaborative peer learning opportunities",
    ],
    application: "Instructors facilitate rather than lecture, encouraging students to share experiences, relate training to their professional contexts, and take ownership of their learning journey.",
    image: "/images/sti14.jpg",
  },
];

export function Methodology() {
  return (
    <div style={{ fontFamily: "'Lato', sans-serif" }}>

      {/* Hero */}
      <section className="py-20 bg-[#1A1008]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-[#B8963E]/10 border border-[#B8963E]/25 rounded text-[#B8963E] text-xs font-bold uppercase tracking-widest mb-5">
              Evidence-Based Training
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-5"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Learning <span className="text-[#B8963E]">Methodology</span>
            </h1>
            <p className="text-[#CFCFCF] text-lg max-w-2xl mx-auto leading-relaxed">
              Our training approach combines proven educational methodologies designed to maximize retention, build competence, and ensure real-world application.
            </p>
          </div>

          {/* 3 pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Lightbulb, title: "Evidence-Based", text: "Grounded in cognitive science and educational research" },
              { icon: Target, title: "Practical Focus", text: "Designed for immediate real-world application" },
              { icon: TrendingUp, title: "Proven Results", text: "Higher retention and performance outcomes" },
            ].map((p) => (
              <div key={p.title} className="bg-[#221510] border border-[#B8963E]/10 rounded-lg p-7 text-center">
                <div className="w-12 h-12 bg-[#1A1008] border border-[#B8963E]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-6 h-6 text-[#B8963E]" />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-[#CFCFCF] text-sm">{p.text}</p>
              </div>
            ))}
          </div>

          {/* Methodology sections */}
          <div className="space-y-20">
            {methodologies.map((method, index) => (
              <div
                key={method.id}
                id={method.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-28"
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                  <div className="rounded-lg overflow-hidden h-[360px] border border-[#B8963E]/15">
                    <ImageWithFallback
                      src={method.image}
                      alt={method.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 bg-[#221510] border border-[#B8963E]/20 rounded flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-[#B8963E]" />
                    </div>
                    <div>
                      <h2
                        className="text-2xl font-bold text-white leading-tight"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        {method.title}
                      </h2>
                      <p className="text-[#B8963E] text-sm font-semibold">{method.tagline}</p>
                    </div>
                  </div>

                  <p className="text-[#CFCFCF] text-base mb-5 leading-relaxed">{method.description}</p>

                  <div className="mb-5">
                    <h3
                      className="text-sm font-bold text-white mb-3 uppercase tracking-wide"
                      style={{ fontFamily: "'Open Sans', sans-serif" }}
                    >
                      Key Benefits
                    </h3>
                    <ul className="space-y-2">
                      {method.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#B8963E] flex-shrink-0 mt-0.5" />
                          <span className="text-[#CFCFCF] text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#221510] border border-[#B8963E]/15 rounded-lg p-4">
                    <h3 className="text-xs font-bold text-[#B8963E] uppercase tracking-wider mb-2">In Practice</h3>
                    <p className="text-[#CFCFCF] text-sm leading-relaxed">{method.application}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 bg-[#221510] border border-[#B8963E]/15 rounded-lg p-12 text-center">
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Experience Our Methodology in Action
            </h2>
            <p className="text-[#CFCFCF] mb-8 max-w-xl mx-auto leading-relaxed">
              Our comprehensive approach ensures you don't just learn — you master skills that can save lives and protect others.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B8963E] text-[#1A1008] font-bold rounded hover:bg-[#a07830] transition-all min-h-[48px]"
              >
                View Training Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#B8963E]/50 text-[#B8963E] font-bold rounded hover:bg-[#1A1008] hover:border-[#B8963E] transition-all min-h-[48px]"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
