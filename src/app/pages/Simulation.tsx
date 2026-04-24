import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, CheckCircle, Activity, Siren, Target } from "lucide-react";

export function Simulation() {
  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: "#FFFFFF" }}>

      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C9A96E]/10 border border-[#C9A96E]/25 rounded mb-6">
                <div className="w-1.5 h-1.5 bg-[#C9A96E] rounded-full" />
                <span className="text-[#C9A96E] text-xs font-bold tracking-widest uppercase">Premium Facilities</span>
              </div>
              <h1
                className="text-4xl sm:text-5xl font-bold text-[#1F2937] mb-5 leading-tight"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                <span className="text-[#C9A96E]">Simulation</span> Training
              </h1>
              <p className="text-[#6B7280] text-base leading-relaxed mb-5">
                Shadow Training Institute is developing state-of-the-art simulation facilities to replicate real-world conditions. Train under pressure, build confidence, and master critical skills in controlled environments.
              </p>
              <p className="text-[#9CA3AF] text-sm leading-relaxed mb-8">
                Our simulation program is currently in development. We are building immersive, high-fidelity training environments designed to complement our existing certification programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C9A96E] text-white font-bold rounded hover:bg-[#B8965D] transition-all min-h-[48px]"
                >
                  Get Notified
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#C9A96E]/50 text-[#C9A96E] font-bold rounded hover:bg-[#C9A96E]/5 hover:border-[#C9A96E] transition-all min-h-[48px]"
                >
                  View Current Programs
                </Link>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-[#E5E7EB] h-[360px]">
              <ImageWithFallback
                src="/images/sti1.jpg"
                alt="Tactical simulation training"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              What to <span className="text-[#C9A96E]">Expect</span>
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Our simulation program will directly support and enhance our existing training curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Activity,
                title: "CPR / AED Simulation",
                description: "High-fidelity mannequins and medical equipment to practice life-saving techniques in realistic emergency scenarios.",
                link: "/programs#cpr-aed",
              },
              {
                icon: Siren,
                title: "Active Shooter Simulation",
                description: "Immersive environments aligned with ALERRT protocols to practice Run-Hide-Fight strategies and coordinated response.",
                link: "/programs#active-shooter",
              },
              {
                icon: Target,
                title: "Tactical Training Simulation",
                description: "Realistic structural environments for practicing tactical movement, threat assessment, and protective formations.",
                link: "/programs#tactical-training",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#E5E7EB] rounded-lg p-7 hover:border-[#C9A96E]/40 hover:shadow-[0_4px_20px_rgba(201,169,110,0.10)] transition-all group"
              >
                <div className="w-11 h-11 bg-[#F5F7FA] border border-[#E5E7EB] rounded flex items-center justify-center mb-5 group-hover:bg-[#C9A96E] group-hover:border-[#C9A96E] transition-all duration-300">
                  <item.icon className="w-5 h-5 text-[#C9A96E] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3
                  className="text-lg font-bold text-[#1F2937] mb-2"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{item.description}</p>
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#C9A96E] hover:gap-2.5 transition-all"
                >
                  View Program <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why simulation matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-5"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Why <span className="text-[#C9A96E]">Simulation Matters</span>
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed mb-7">
                Research consistently shows that simulation-based training produces significantly better outcomes than traditional classroom instruction alone. It's a core part of our methodology.
              </p>
              <ul className="space-y-3">
                {[
                  "Higher skill retention through hands-on repetition",
                  "Safe environment to make and learn from mistakes",
                  "Stress inoculation — building performance under pressure",
                  "Immediate feedback from certified instructors",
                  "Directly aligned with our ALERRT-based curriculum",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#C9A96E] flex-shrink-0 mt-0.5" />
                    <span className="text-[#374151] text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden border border-[#E5E7EB] h-[360px]">
              <ImageWithFallback
                src="/images/sti5.jpg"
                alt="Training in action"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-[#1F2937] mb-4"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Interested in Simulation Training?
          </h2>
          <p className="text-[#6B7280] mb-8 leading-relaxed">
            Contact us to learn more about our upcoming simulation program or to be notified when it becomes available.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] text-white font-bold rounded hover:bg-[#B8965D] transition-all min-h-[48px]"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
