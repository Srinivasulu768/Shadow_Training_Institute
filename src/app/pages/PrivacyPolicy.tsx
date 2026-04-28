import { Link } from "react-router";
import { Shield, ArrowRight } from "lucide-react";

const BG     = "rgb(248, 250, 252)";
const SURFACE = "rgb(241, 245, 249)";
const CARD   = "#ffffff";
const BORDER = "rgba(0,0,0,0.07)";
const GOLD   = "rgb(37, 99, 235)";
const GOLD_S = "rgba(37,99,235,0.08)";
const TEXT   = "rgb(15, 23, 42)";
const BODY   = "rgb(71, 85, 105)";
const MUTED  = "rgb(148, 163, 184)";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When you submit a training inquiry or contact form, we collect your name, email address, phone number, organization name, and any details you provide about your training needs.",
      "We may also collect basic usage data such as pages visited and browser type to improve our website experience. We do not use tracking cookies for advertising purposes.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "Your information is used solely to respond to your training inquiries, schedule consultations, and deliver the services you request.",
      "We may send you relevant updates about our programs, certifications, or scheduling changes. You may opt out of communications at any time by contacting us directly.",
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "Shadow Training Institute does not sell, rent, or trade your personal information to third parties.",
      "We may share information with trusted service providers who assist in operating our website or delivering training services, under strict confidentiality agreements.",
      "We may disclose information if required by law or to protect the rights and safety of our staff, clients, or the public.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, or misuse.",
      "While we take data security seriously, no method of transmission over the internet is 100% secure. We encourage you to contact us directly for sensitive matters.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by applicable law.",
      "You may request deletion of your personal data at any time by contacting us at info@shadowtraininginstitute.com.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to access, correct, or request deletion of your personal information held by us.",
      "To exercise any of these rights, please contact us at info@shadowtraininginstitute.com or call +1 (214) 613-2588.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The effective date at the top of this page will be updated accordingly.",
      "Continued use of our website after changes are posted constitutes your acceptance of the updated policy.",
    ],
  },
];

export function PrivacyPolicy() {
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
              <Shield className="w-3.5 h-3.5" style={{ color: GOLD }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: GOLD }}>
                Legal
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: "'Open Sans', sans-serif", color: TEXT }}
            >
              Privacy Policy
            </h1>
            <p className="text-sm" style={{ color: MUTED }}>
              Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated: January 1, 2025
            </p>
            <p className="mt-4 text-base leading-relaxed" style={{ color: BODY }}>
              Shadow Training Institute ("we," "us," or "our") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you visit our website or engage with our training services.
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
              Contact Us About Privacy
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: BODY }}>
              If you have questions or concerns about this Privacy Policy or how your data is handled, please reach out to us directly.
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
