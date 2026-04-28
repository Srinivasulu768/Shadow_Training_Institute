import { Link } from "react-router";
import { FileText, ArrowRight } from "lucide-react";

const BG      = "rgb(248, 250, 252)";
const SURFACE = "rgb(241, 245, 249)";
const CARD    = "#ffffff";
const BORDER  = "rgba(0,0,0,0.07)";
const GOLD    = "rgb(37, 99, 235)";
const GOLD_S  = "rgba(37,99,235,0.08)";
const TEXT    = "rgb(15, 23, 42)";
const BODY    = "rgb(71, 85, 105)";
const MUTED   = "rgb(148, 163, 184)";

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the Shadow Training Institute website or enrolling in any of our training programs, you agree to be bound by these Terms of Service.",
      "If you do not agree to these terms, please do not use our website or services. We reserve the right to update these terms at any time, and continued use constitutes acceptance.",
    ],
  },
  {
    title: "Training Services",
    content: [
      "Shadow Training Institute provides professional emergency response, tactical, and safety training programs. All programs are delivered by certified instructors with real-world operational experience.",
      "Program availability, scheduling, and content are subject to change. We will make reasonable efforts to notify enrolled participants of any material changes.",
      "Completion of a training program does not guarantee employment, licensure, or any specific outcome beyond the certification or credential described for that program.",
    ],
  },
  {
    title: "Enrollment & Payment",
    content: [
      "Enrollment in a training program is confirmed upon receipt of full payment or an approved payment arrangement. Pricing is provided at the time of inquiry and is subject to change.",
      "Corporate and group enrollments are governed by a separate service agreement. Contact us to discuss custom pricing and scheduling.",
    ],
  },
  {
    title: "Cancellation & Refunds",
    content: [
      "Cancellations made more than 7 business days before a scheduled training session are eligible for a full refund or credit toward a future session.",
      "Cancellations within 7 business days of the session may be subject to a cancellation fee. No-shows are non-refundable.",
      "Shadow Training Institute reserves the right to cancel or reschedule sessions due to insufficient enrollment, instructor availability, or circumstances beyond our control. Full refunds will be issued in such cases.",
    ],
  },
  {
    title: "Participant Conduct & Safety",
    content: [
      "All participants are expected to conduct themselves professionally and follow all safety instructions provided by instructors.",
      "Shadow Training Institute reserves the right to remove any participant from a training session for disruptive, unsafe, or inappropriate behavior without refund.",
      "Participants with medical conditions that may affect their ability to safely participate in physical training activities should consult a physician prior to enrollment and disclose relevant conditions to their instructor.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All training materials, curricula, course content, and website content are the intellectual property of Shadow Training Institute and are protected by applicable copyright and trademark laws.",
      "You may not reproduce, distribute, or create derivative works from our materials without prior written consent.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "Shadow Training Institute provides training for educational purposes. We are not liable for any injury, loss, or damage arising from the application of skills learned in our programs in real-world situations.",
      "Our total liability for any claim arising from our services shall not exceed the amount paid for the specific training program in question.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms of Service are governed by the laws of the State of Texas. Any disputes shall be resolved in the courts of Dallas County, Texas.",
    ],
  },
];

export function TermsOfService() {
  return (
    <div style={{ fontFamily: "'Lato', sans-serif", backgroundColor: BG }}>
      <section className="py-20" style={{ backgroundColor: BG }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-12">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded mb-6"
              style={{ backgroundColor: GOLD_S, border: "1px solid rgba(37,99,235,0.20)" }}
            >
              <FileText className="w-3.5 h-3.5" style={{ color: GOLD }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: GOLD }}>
                Legal
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}
            >
              Terms of Service
            </h1>
            <p className="text-sm" style={{ color: MUTED }}>
              Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated: January 1, 2025
            </p>
            <p className="mt-4 text-base leading-relaxed" style={{ color: BODY }}>
              Please read these Terms of Service carefully before using our website or enrolling in any Shadow Training Institute program. These terms govern your relationship with us and outline the rights and responsibilities of both parties.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((s, i) => (
              <div
                key={s.title}
                className="rounded-lg p-7"
                style={{ backgroundColor: CARD, border: `1px solid ${BORDER}` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded"
                    style={{ backgroundColor: GOLD_S, color: GOLD, border: "1px solid rgba(37,99,235,0.15)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className="text-lg font-bold"
                    style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}
                  >
                    {s.title}
                  </h2>
                </div>
                <div className="space-y-3">
                  {s.content.map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed" style={{ color: BODY }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div
            className="mt-10 rounded-lg p-7"
            style={{ backgroundColor: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <h2
              className="text-lg font-bold mb-3"
              style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}
            >
              Questions About These Terms?
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: BODY }}>
              If you have any questions about these Terms of Service, please contact us before enrolling or using our services.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded transition-all"
              style={{ backgroundColor: GOLD, color: "#ffffff" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgb(29,78,216)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
