import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "instant" });

export function Footer() {
  return (
    <footer
      className="bg-[#F5F7FA] border-t border-[#E5E7EB]"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 mb-5 w-fit group">
              <img
                src="/images/shadow-logo.png"
                alt="Shadow Training Institute"
                className="h-11 w-11 object-contain"
              />
              <div>
                <div
                  className="font-bold text-base text-[#1F2937] leading-tight"
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                  Shadow Training Institute
                </div>
                <div className="text-[11px] text-[#C9A96E] font-light tracking-wide">
                  Disciplina Quasi Modus Vivendi
                </div>
              </div>
            </Link>

            <p className="text-[#6B7280] text-base leading-relaxed max-w-sm mb-6">
              Elite training for security professionals, corporate teams, healthcare staff, and emergency responders. Real-world scenarios, certified instructors, proven results.
            </p>

            <div className="space-y-3 text-base text-[#6B7280]">
              <a
                href="https://maps.google.com/?q=3427+E+Trinity+Mills+Road+Dallas+Texas+75287"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[#C9A96E] transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#C9A96E] flex-shrink-0 mt-0.5" />
                <span>3427 E Trinity Mills Road, Dallas, Texas 75287</span>
              </a>
              <a href="tel:+12146132588" className="flex items-center gap-3 hover:text-[#C9A96E] transition-colors">
                <Phone className="w-4 h-4 text-[#C9A96E] flex-shrink-0" />
                <span>Office: +1 (214) 613-2588</span>
              </a>
              <a href="tel:+19722002955" className="flex items-center gap-3 hover:text-[#C9A96E] transition-colors">
                <Phone className="w-4 h-4 text-[#C9A96E] flex-shrink-0" />
                <span>Dispatch: +1 (972) 200-2955</span>
              </a>
              <a href="mailto:info@shadowtraininginstitute.com" className="flex items-center gap-3 hover:text-[#C9A96E] transition-colors">
                <Mail className="w-4 h-4 text-[#C9A96E] flex-shrink-0" />
                <span>info@shadowtraininginstitute.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-[#1F2937] mb-5"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-base text-[#6B7280]">
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
                    className="hover:text-[#C9A96E] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-widest text-[#1F2937] mb-5"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
            >
              Programs
            </h3>
            <ul className="space-y-2.5 text-base text-[#6B7280]">
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
                    className="hover:text-[#C9A96E] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#E5E7EB] pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#9CA3AF]">
            &copy; {new Date().getFullYear()} Shadow Training Institute. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm text-[#9CA3AF]">
            <a href="#" className="hover:text-[#C9A96E] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C9A96E] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#C9A96E] transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
