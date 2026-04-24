import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import {
  Menu, X, ChevronDown,
  Heart, Activity, Shield, Siren, Target, Award,
  BookOpen, Brain, Users, GraduationCap,
  Phone, Home,
} from "lucide-react";

type MegaMenuColumn = {
  heading: string;
  items: { label: string; description: string; path: string; icon: React.ElementType }[];
};

type NavItem = {
  label: string;
  path?: string;
  mega?: MegaMenuColumn[];
};

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "Programs",
    mega: [
      {
        heading: "Medical & Safety",
        items: [
          { label: "CPR / AED / First Aid", description: "ALERRT Aligned certified life-saving skills", path: "/programs#cpr-aed", icon: Heart },
          { label: "Stop the Bleed", description: "DHS hemorrhage control training", path: "/programs#stop-the-bleed", icon: Activity },
          { label: "Continuing Education", description: "CEU credits & recertification programs", path: "/programs#continuing-education", icon: Award },
        ],
      },
      {
        heading: "Crisis & Security",
        items: [
          { label: "CPI – Crisis Prevention", description: "De-escalation & intervention techniques", path: "/programs#cpi-crisis", icon: Shield },
          { label: "Active Shooter Response", description: "ALERRT-aligned threat response", path: "/programs#active-shooter", icon: Siren },
          { label: "Tactical Training", description: "Elite security & protection protocols", path: "/programs#tactical-training", icon: Target },
        ],
      },
    ],
  },
  {
    label: "Methodology",
    mega: [
      {
        heading: "Learning Approaches",
        items: [
          { label: "Blended Learning", description: "Online theory + hands-on practice", path: "/methodology#blended-learning", icon: BookOpen },
          { label: "Problem-Based Learning", description: "Critical thinking under pressure", path: "/methodology#problem-based", icon: Brain },
          { label: "Scenario-Based Training", description: "Immersive real-world simulation", path: "/methodology#scenario-based", icon: Users },
          { label: "Stress Inoculation", description: "Performance under pressure", path: "/methodology#stress-inoculation", icon: Target },
          { label: "Adult Learning Principles", description: "Experience-centered education", path: "/methodology#adult-learning", icon: GraduationCap },
        ],
      },
    ],
  },
  {
    label: "Simulation",
    mega: [
      {
        heading: "Simulation",
        items: [
          { label: "CPR / AED Simulation", description: "High-fidelity life-saving practice", path: "/simulation", icon: Activity },
          { label: "Active Shooter Simulation", description: "ALERRT-aligned immersive scenarios", path: "/simulation", icon: Siren },
          { label: "Tactical Training Simulation", description: "Realistic structural environments", path: "/simulation", icon: Target },
        ],
      },
    ],
  },
  {
    label: "Partnerships",
    mega: [
      {
        heading: "Certifications",
        items: [
          { label: "ALERRT Aligned", description: "Active shooter response standard", path: "/partnerships#alerrt", icon: Target },
        ],
      },
    ],
  },
  { label: "Contact", path: "/contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path?: string) => {
    if (!path) return false;
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-xl border-b border-[#E5E7EB] shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
          : "bg-white border-b border-[#E5E7EB]"
      }`}
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <img
              src="/images/shadow-logo.png"
              alt="Shadow Training Institute"
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <div className="font-bold text-base text-[#1F2937] tracking-tight leading-tight">
                Shadow Training Institute
              </div>
              <div className="text-[11px] text-[#C9A96E] font-light tracking-wide">
                Disciplina Quasi Modus Vivendi
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.mega ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded transition-all duration-200 ${
                      activeMenu === item.label
                        ? "text-[#C9A96E] bg-[#C9A96E]/8"
                        : "text-[#374151] hover:text-[#C9A96E] hover:bg-[#C9A96E]/5"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {activeMenu === item.label && (
                    <div
                      className="absolute top-full mt-1 bg-white border border-[#E5E7EB] rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.10)] overflow-hidden"
                      style={{
                        width: `${item.mega.length * 280}px`,
                        maxWidth: "min(600px, calc(100vw - 32px))",
                        left: item.mega.length === 1 ? "0" : "50%",
                        transform: item.mega.length === 1 ? "none" : "translateX(-50%)",
                      }}
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="h-px w-full bg-[#C9A96E]" />
                      <div
                        className="grid divide-x divide-[#E5E7EB]"
                        style={{ gridTemplateColumns: `repeat(${item.mega.length}, 1fr)` }}
                      >
                        {item.mega.map((col) => (
                          <div key={col.heading} className="p-4">
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C9A96E] mb-3">
                              {col.heading}
                            </p>
                            <ul className="space-y-0.5">
                              {col.items.map((link) => (
                                <li key={link.label}>
                                  <Link
                                    to={link.path}
                                    onClick={() => setActiveMenu(null)}
                                    className="flex items-center gap-3 px-2 py-2 rounded group/item hover:bg-[#F5F7FA] transition-all duration-150"
                                  >
                                    <div className="w-7 h-7 rounded bg-[#F3F4F6] flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#C9A96E] transition-colors duration-150">
                                      <link.icon className="w-3.5 h-3.5 text-[#C9A96E] group-hover/item:text-white transition-colors duration-150" />
                                    </div>
                                    <div>
                                      <div className="text-sm font-semibold text-[#1F2937] group-hover/item:text-[#C9A96E] transition-colors leading-tight">
                                        {link.label}
                                      </div>
                                      <div className="text-xs text-[#9CA3AF] mt-0.5">
                                        {link.description}
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-[#E5E7EB] bg-[#F5F7FA] px-4 py-2.5 flex items-center justify-between">
                        <span className="text-xs text-[#9CA3AF]">Need a custom solution?</span>
                        <Link
                          to="/contact"
                          onClick={() => setActiveMenu(null)}
                          className="text-xs font-bold text-[#C9A96E] hover:underline"
                        >
                          Contact us →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path!}
                  className={`px-4 py-2 text-sm font-semibold rounded transition-all duration-200 ${
                    isActive(item.path)
                      ? "text-[#C9A96E] bg-[#C9A96E]/8"
                      : "text-[#374151] hover:text-[#C9A96E] hover:bg-[#C9A96E]/5"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              to="/contact"
              className="ml-3 px-6 py-2.5 bg-[#C9A96E] text-white text-sm font-bold rounded hover:bg-[#B8965D] transition-all duration-200 hover:shadow-[0_4px_16px_rgba(201,169,110,0.30)]"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#C9A96E] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB] max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.mega ? (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenMobile(openMobile === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between py-3 px-4 rounded text-[#374151] font-semibold hover:bg-[#F5F7FA] hover:text-[#C9A96E] transition-all"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openMobile === item.label ? "rotate-180 text-[#C9A96E]" : ""
                      }`}
                    />
                  </button>

                  {openMobile === item.label && (
                    <div className="ml-4 mt-1 mb-2 border-l-2 border-[#E5E7EB] pl-4 space-y-3">
                      {item.mega.map((col) => (
                        <div key={col.heading}>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#C9A96E] mb-2">
                            {col.heading}
                          </p>
                          <ul className="space-y-1">
                            {col.items.map((link) => (
                              <li key={link.label}>
                                <Link
                                  to={link.path}
                                  onClick={() => { setIsOpen(false); setOpenMobile(null); }}
                                  className="flex items-center gap-3 py-2 px-2 rounded text-sm text-[#374151] hover:text-[#C9A96E] hover:bg-[#F5F7FA] transition-all"
                                >
                                  <link.icon className="w-4 h-4 text-[#C9A96E] flex-shrink-0" />
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path!}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 py-3 px-4 rounded font-semibold transition-all ${
                    isActive(item.path)
                      ? "bg-[#F5F7FA] text-[#C9A96E]"
                      : "text-[#374151] hover:bg-[#F5F7FA] hover:text-[#C9A96E]"
                  }`}
                >
                  {item.label === "Home" && <Home className="w-4 h-4" />}
                  {item.label === "Contact" && <Phone className="w-4 h-4" />}
                  {item.label}
                </Link>
              )
            )}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-3 py-4 px-5 bg-[#C9A96E] text-white font-bold rounded text-center hover:bg-[#B8965D] transition-all"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
