import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight, CheckCircle, Activity, Siren, Target } from "lucide-react";

export function Simulation() {
  return (
    <div style={{ fontFamily: "'Lato', sans-serif" }}>

      {/* Hero */}
      <section className="py-20 bg-[#1A1008]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#221510] border border-[#B8963E]/30 rounded mb-6">
                <div className="w-1.5 h-1.5 bg-[#B8963E] rounded-full" />
              </div>
              <h1
                className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                <span className="text-[#B8963E]">Simulation</span> Training
              </h1>
              <p className="text-[#CFCFCF] text-base leading-relaxed mb-5">
                Shadow Training Institute is developing state-of-the-art simulation facilities to replicate real-world conditions. Train under pressure, build confidence, and master critical skills in controlled environments.
              </p>
              <p className="text-[#CFCFCF]/70 text-sm leading-relaxed mb-8">
                Our simulation program is currently in development. We are building immersive, high-fidelity training environments designed to complement our existing certification programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#B8963E] text-[#1A1008] font-bold rounded hover:bg-[#a07830] transition-all min-h-[48px]"
                >
                  Get Notified
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/programs"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#B8963E]/50 text-[#B8963E] font-bold rounded hover:bg-[#221510] hover:border-[#B8963E] transition-all min-h-[48px]"
                >
                  View Current Programs
                </Link>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-[#B8963E]/15 h-[360px]">
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
      <section className="py-20 bg-[#221510]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              What to <span className="text-[#B8963E]">Expect</span>
            </h2>
            <p className="text-[#CFCFCF] text-lg max-w-2xl mx-auto">
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
                className="bg-[#1A1008] border border-[#B8963E]/10 rounded-lg p-7 hover:border-[#B8963E]/30 transition-all group"
              >
                <div className="w-11 h-11 bg-[#221510] border border-[#B8963E]/20 rounded flex items-center justify-center mb-5 group-hover:bg-[#B8963E] group-hover:border-[#B8963E] transition-all duration-300">
                  <item.icon className="w-5 h-5 text-[#B8963E] group-hover:text-[#1A1008] transition-colors duration-300" />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#CFCFCF] text-sm leading-relaxed mb-4">{item.description}</p>
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#B8963E] hover:gap-2.5 transition-all"
                >
                  View Program <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why simulation matters */}
      <section className="py-20 bg-[#1A1008]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-5"
                style={{ fontFamily: "'Open Sans', sans-serif" }}
              >
                Why <span className="text-[#B8963E]">Simulation Matters</span>
              </h2>
              <p className="text-[#CFCFCF] text-base leading-relaxed mb-7">
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
                    <CheckCircle className="w-4 h-4 text-[#B8963E] flex-shrink-0 mt-0.5" />
                    <span className="text-[#CFCFCF] text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden border border-[#B8963E]/15 h-[360px]">
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
      <section className="py-20 bg-[#221510]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            Interested in Simulation Training?
          </h2>
          <p className="text-[#CFCFCF] mb-8 leading-relaxed">
            Contact us to learn more about our upcoming simulation program or to be notified when it becomes available.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8963E] text-[#1A1008] font-bold rounded hover:bg-[#a07830] transition-all min-h-[48px]"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
