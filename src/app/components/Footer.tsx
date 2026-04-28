import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { WaveDivider } from "./WaveDivider";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "instant" });

const NAVY      = "rgb(15, 35, 75)";
const NAVY_MID  = "rgb(22, 52, 110)";
const BLUE      = "rgb(37, 99, 235)";
const BORDER    = "rgba(255,255,255,0.12)";
const WHITE     = "#ffffff";
const TEXT_SOFT = "rgba(255,255,255,0.65)";
const TEXT_MUT  = "rgba(255,255,255,0.40)";

export function Footer() {
  return (
    <>
      {/* Wave — gradient background matches footer exactly, no color gap */}
      <div style={{ background: "linear-gradient(135deg, rgb(15, 35, 75) 0%, rgb(22, 52, 110) 100%)", lineHeight: 0, marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "90px" }}>
          <defs>
            <linearGradient id="footer-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor="rgb(15, 35, 75)" />
              <stop offset="100%" stopColor="rgb(22, 52, 110)" />
            </linearGradient>
          </defs>
          <path d="M0,40 C240,90 480,0 720,45 C960,90 1200,10 1440,50 L1440,90 L0,90 Z" fill="url(#footer-wave-grad)" />
        </svg>
      </div>

      <footer
        style={{
          fontFamily: "'Lato', sans-serif",
          background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 100%)`,
          color: WHITE,
        }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 mb-5 w-fit group">
              <img
                src="/images/shadow-logo.png"
                alt="Shadow Training Institute"
                className="h-14 w-14 object-contain opacity-90"
              />
              <div>
                <div className="font-bold text-base leading-tight" style={{ fontFamily: "'Open Sans', sans-serif", color: WHITE }}>
                  Shadow Training Institute
                </div>
                <div className="text-xs font-medium tracking-wide mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Disciplina Quasi Modus Vivendi
                </div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed max-w-sm mb-6" style={{ color: TEXT_SOFT }}>
              Elite training for security professionals, corporate teams, healthcare staff, and emergency responders. Real-world scenarios, certified instructors, proven results.
            </p>

            <div className="space-y-3 text-sm" style={{ color: TEXT_SOFT }}>
              <a
                href="https://maps.google.com/?q=3427+E+Trinity+Mills+Road+Dallas+Texas+75287"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-opacity hover:opacity-100"
                style={{ opacity: 0.7 }}
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }} />
                <span>3427 E Trinity Mills Road, Dallas, Texas 75287</span>
              </a>
              <a href="tel:+12146132588" className="flex items-center gap-3 transition-opacity hover:opacity-100" style={{ opacity: 0.7 }}>
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "rgba(255,255,255,0.6)" }} />
                <span>Office: +1 (214) 613-2588</span>
              </a>
              <a href="tel:+19722002955" className="flex items-center gap-3 transition-opacity hover:opacity-100" style={{ opacity: 0.7 }}>
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "rgba(255,255,255,0.6)" }} />
                <span>Dispatch: +1 (972) 200-2955</span>
              </a>
              <a href="mailto:info@shadowtraininginstitute.com" className="flex items-center gap-3 transition-opacity hover:opacity-100" style={{ opacity: 0.7 }}>
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "rgba(255,255,255,0.6)" }} />
                <span>info@shadowtraininginstitute.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: WHITE }}>
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/programs", label: "Programs" },
                { to: "/methodology", label: "Methodology" },
                { to: "/simulation", label: "Simulation" },
                { to: "/partnerships", label: "Partnerships" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    onClick={scrollToTop}
                    className="transition-opacity hover:opacity-100"
                    style={{ color: TEXT_SOFT, opacity: 0.7 }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: WHITE }}>
              Programs
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/programs#cpr-aed", label: "CPR / AED / First Aid" },
                { to: "/programs#stop-the-bleed", label: "Stop the Bleed" },
                { to: "/programs#active-shooter", label: "Active Shooter Response" },
                { to: "/programs#tactical-training", label: "Tactical Training" },
                { to: "/programs#cpi-crisis", label: "CPI – Crisis Prevention" },
                { to: "/programs#continuing-education", label: "Continuing Education" },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="transition-opacity"
                    style={{ color: TEXT_SOFT, opacity: 0.7 }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs" style={{ color: TEXT_MUT }}>
            &copy; {new Date().getFullYear()} Shadow Training Institute. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs">
            {[
              { label: "Privacy Policy", to: "/privacy-policy" },
              { label: "Terms of Service", to: "/terms-of-service" },
            ].map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                onClick={scrollToTop}
                className="transition-opacity"
                style={{ color: TEXT_MUT, opacity: 0.7 }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
