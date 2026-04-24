import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Heart, Activity, Shield, Siren, Target, Award,
  Clock, CheckCircle, Users, ArrowRight,
} from "lucide-react";

const programs = [
  {
    id: "cpr-aed",
    icon: Heart,
    title: "CPR / AED / First Aid",
    image: "/images/sti4.jpg",
    description: "Comprehensive life-saving training covering cardiopulmonary resuscitation, AED use, and basic first aid. Learn to respond confidently to cardiac emergencies, choking, bleeding, and common injuries.",
    duration: "4–8 hours",
    certification: "ALERRT Aligned",
    topics: [
      "Adult, Child, and Infant CPR",
      "AED operation and safety",
      "Choking response techniques",
      "Wound care and bandaging",
      "Basic medical emergency response",
    ],
    audience: "Healthcare workers, teachers, corporate staff, general public",
  },
  {
    id: "stop-the-bleed",
    icon: Activity,
    title: "Stop the Bleed",
    image: "/images/sti5.jpg",
    description: "Critical hemorrhage control training developed by the Department of Homeland Security. Learn to identify life-threatening bleeding and apply proper control techniques using tourniquets, wound packing, and pressure application.",
    duration: "2 hours",
    certification: "ALERRT Aligned",
    topics: [
      "Tourniquet application techniques",
      "Wound packing procedures",
      "Direct pressure application",
      "Hemorrhage assessment",
      "Scene safety protocols",
    ],
    audience: "Security personnel, first responders, school staff, corporate teams",
  },
  {
    id: "cpi-crisis",
    icon: Shield,
    title: "CPI – Crisis Prevention Intervention",
    image: "/images/sti6.jpg",
    description: "Evidence-based training in de-escalation techniques and crisis intervention. Learn to recognize behavioral triggers, employ verbal de-escalation strategies, and utilize safe physical intervention techniques when necessary.",
    duration: "1–2 days",
    certification: "ALERRT Aligned",
    topics: [
      "Verbal de-escalation strategies",
      "Behavioral assessment techniques",
      "Safe physical intervention methods",
      "Crisis development models",
      "Post-crisis support procedures",
    ],
    audience: "Healthcare workers, social workers, educators, security staff",
  },
  {
    id: "active-shooter",
    icon: Siren,
    title: "Active Shooter Response",
    image: "/images/sti7.jpg",
    description: "Advanced training aligned with ALERRT protocols. Prepare for active threat situations with run-hide-fight strategies, situational awareness, and emergency response coordination.",
    duration: "4–8 hours",
    certification: "ALERRT Aligned",
    topics: [
      "Run-Hide-Fight protocols",
      "Situational awareness techniques",
      "Emergency notification procedures",
      "Civilian response strategies",
      "Post-incident protocols",
    ],
    audience: "Corporate teams, educators, healthcare staff, security professionals",
  },
  {
    id: "tactical-training",
    icon: Target,
    title: "Tactical Training",
    image: "/images/sti8.jpg",
    description: "Elite security and protection protocols for high-risk environments. Master tactical movement, threat assessment, protective formations, and advanced security procedures used by professional security teams.",
    duration: "Custom programs",
    certification: "ALERRT Aligned",
    topics: [
      "Tactical movement and positioning",
      "Threat assessment and response",
      "Protective security formations",
      "Vehicle security operations",
      "Advanced situational awareness",
    ],
    audience: "Security professionals, executive protection teams, law enforcement",
  },
  {
    id: "continuing-education",
    icon: Award,
    title: "Continuing Education",
    image: "/images/sti9.jpg",
    description: "Advanced courses and recertification programs to maintain and enhance your professional credentials. Stay current with the latest protocols, techniques, and industry standards through our comprehensive CEU programs.",
    duration: "Varies by course",
    certification: "ALERRT Aligned",
    topics: [
      "Advanced medical response",
      "Leadership in emergency situations",
      "Instructor development programs",
      "Specialized tactical techniques",
      "Recertification courses",
    ],
    audience: "Certified professionals seeking advancement or recertification",
  },
];

export function Programs() {
  return (
    <div style={{ fontFamily: "'Lato', sans-serif" }}>
      <section className="py-20 bg-[#1A1008]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 bg-[#B8963E]/10 border border-[#B8963E]/25 rounded text-[#B8963E] text-xs font-bold uppercase tracking-widest mb-5">
              Professional Training Programs
            </span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-5"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Elite <span className="text-[#B8963E]">Training Programs</span>
            </h1>
            <p className="text-[#CFCFCF] text-lg max-w-2xl mx-auto leading-relaxed">
              Nationally certified programs designed for real-world application. Choose from our range of specialized programs tailored to your profession.
            </p>
          </div>

          {/* Program cards */}
          <div className="space-y-8">
            {programs.map((program, index) => (
              <div
                key={program.id}
                id={program.id}
                className="bg-[#221510] border border-[#B8963E]/10 rounded-lg overflow-hidden hover:border-[#B8963E]/30 transition-all group scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Image */}
                  <div className="relative h-56 lg:h-auto min-h-[240px] overflow-hidden">
                    <ImageWithFallback
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-7">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-11 h-11 bg-[#1A1008] border border-[#B8963E]/20 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-[#B8963E] group-hover:border-[#B8963E] transition-all duration-300">
                        <program.icon className="w-5 h-5 text-[#B8963E] group-hover:text-[#1A1008] transition-colors duration-300" />
                      </div>
                      <div className="flex-1">
                        <h2
                          className="text-2xl font-bold text-white mb-2"
                          style={{ fontFamily: "'Open Sans', sans-serif" }}
                        >
                          {program.title}
                        </h2>
                        <div className="flex flex-wrap gap-4 text-sm text-[#CFCFCF]">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#B8963E]" />
                            <span>{program.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-[#B8963E]" />
                            <span>{program.certification}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-[#B8963E]" />
                            <span>Group & Individual</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-[#CFCFCF] text-sm leading-relaxed mb-5">{program.description}</p>

                    <div className="mb-5">
                      <h3
                        className="text-xs font-bold text-[#B8963E] uppercase tracking-wider mb-3"
                        style={{ fontFamily: "'Open Sans', sans-serif" }}
                      >
                        Course Topics
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {program.topics.map((topic, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#B8963E] flex-shrink-0 mt-0.5" />
                            <span className="text-[#CFCFCF] text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#B8963E]/10">
                      <p className="text-xs text-[#CFCFCF]/60">
                        <span className="font-semibold text-[#CFCFCF]/80">Audience:</span> {program.audience}
                      </p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#B8963E] text-[#1A1008] text-sm font-bold rounded hover:bg-[#a07830] transition-all flex-shrink-0 ml-4"
                      >
                        Enroll Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 bg-[#221510] border border-[#B8963E]/15 rounded-lg p-10 text-center">
            <h2
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Need Custom Training Solutions?
            </h2>
            <p className="text-[#CFCFCF] mb-7 max-w-xl mx-auto text-sm leading-relaxed">
              We design tailored training programs for corporate teams, organizations, and specialized groups. Contact us to discuss your specific requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8963E] text-[#1A1008] font-bold rounded hover:bg-[#a07830] transition-all min-h-[48px]"
            >
              Request Custom Training
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
