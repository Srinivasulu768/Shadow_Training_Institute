import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown, ChevronRight,
  Heart, Activity, Shield, Siren, Target, Award,
  BookOpen, Brain, Users, GraduationCap,
  Phone, Mail, MapPin,
} from "lucide-react";

/* ── nav data ── */
const navItems = [
  { label: "Home",         path: "/",            icon: null,         sub: null },
  {
    label: "Programs", path: "/programs", icon: null,
    sub: [
      { label: "CPR / AED / First Aid",   path: "/programs#cpr-aed",            icon: Heart,        desc: "Life-saving cardiac & first aid" },
      { label: "Stop the Bleed",          path: "/programs#stop-the-bleed",      icon: Activity,     desc: "Hemorrhage control training" },
      { label: "CPI – Crisis Prevention", path: "/programs#cpi-crisis",          icon: Shield,       desc: "De-escalation & intervention" },
      { label: "Active Shooter Response", path: "/programs#active-shooter",      icon: Siren,        desc: "ALERRT-aligned threat response" },
      { label: "Tactical Training",       path: "/programs#tactical-training",   icon: Target,       desc: "Elite security protocols" },
      { label: "Continuing Education",    path: "/programs#continuing-education", icon: Award,       desc: "CEU & recertification" },
    ],
  },
  {
    label: "Methodology", path: "/methodology", icon: null,
    sub: [
      { label: "Blended Learning",          path: "/methodology#blended-learning",   icon: BookOpen,     desc: "Online + hands-on practice" },
      { label: "Problem-Based Learning",    path: "/methodology#problem-based",      icon: Brain,        desc: "Critical thinking scenarios" },
      { label: "Scenario-Based Training",   path: "/methodology#scenario-based",     icon: Users,        desc: "Immersive simulations" },
      { label: "Stress Inoculation",        path: "/methodology#stress-inoculation", icon: Target,       desc: "Performance under pressure" },
      { label: "Adult Learning Principles", path: "/methodology#adult-learning",     icon: GraduationCap, desc: "Experience-centered education" },
    ],
  },
  { label: "Simulation",   path: "/simulation",   icon: null, sub: null },
  { label: "Partnerships", path: "/partnerships", icon: null, sub: null },
  { label: "Contact",      path: "/contact",      icon: null, sub: null },
];

/* ── tokens ── */
const NAVY      = "rgb(13, 27, 62)";
const NAVY_MID  = "rgb(18, 40, 90)";
const BLUE      = "rgb(37, 99, 235)";
const BLUE_SOFT = "rgba(37, 99, 235, 0.10)";
const WHITE     = "#ffffff";
const BORDER    = "rgba(0,0,0,0.08)";
const TEXT      = "rgb(15, 23, 42)";
const TEXT_MUT  = "rgb(100, 116, 139)";
const EASE      = [0.22, 1, 0.36, 1] as const;

/* ── Animated hamburger ── */
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="flex flex-col justify-center items-center gap-[5px] w-5 h-5" aria-hidden>
      <motion.span className="block w-5 h-[2px] rounded-full" style={{ backgroundColor: open ? WHITE : NAVY }}
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.28, ease: EASE }} />
      <motion.span className="block w-5 h-[2px] rounded-full" style={{ backgroundColor: open ? WHITE : NAVY }}
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.18, ease: EASE }} />
      <motion.span className="block w-5 h-[2px] rounded-full" style={{ backgroundColor: open ? WHITE : NAVY }}
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.28, ease: EASE }} />
    </div>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen]         = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [openSub, setOpenSub]       = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); setOpenSub(null); }, [location.pathname, location.hash]);
  useEffect(() => { document.body.style.overflow = isOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [isOpen]);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const close = () => { setIsOpen(false); setOpenSub(null); };

  return (
    <>
      {/* ════════════════════════════════════════
          NAV BAR
      ════════════════════════════════════════ */}
      <motion.nav
        style={{
          fontFamily: "'Open Sans', sans-serif",
          position: "sticky",
          top: 0,
          zIndex: 200,
          background: scrolled
            ? "rgba(255,255,255,0.92)"
            : WHITE,
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: `1px solid ${scrolled ? BORDER : "rgba(0,0,0,0.05)"}`,
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.08)" : "none",
          transition: "background 0.3s ease, box-shadow 0.3s ease",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between" style={{ height: "80px" }}>

            {/* ── LOGO + BIG TITLE ── */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              className="flex items-center gap-4 group flex-shrink-0"
              style={{ textDecoration: "none" }}
            >
              {/* logo mark with glow ring */}
              <div className="relative flex-shrink-0">
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "rgba(37,99,235,0.15)", filter: "blur(8px)" }}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <img
                  src="/images/shadow-logo.png"
                  alt="Shadow Training Institute"
                  className="relative h-12 w-12 object-contain"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(37,99,235,0.25))" }}
                />
              </div>

              {/* title block */}
              <div>
                <div
                  className="font-extrabold leading-tight tracking-tight"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "clamp(15px, 1.5vw, 20px)",
                    color: NAVY,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Shadow Training
                  <span style={{ color: BLUE }}> Institute</span>
                </div>
                <div
                  className="font-medium tracking-[0.18em] uppercase"
                  style={{ fontSize: "9px", color: TEXT_MUT, marginTop: "2px" }}
                >
                  Disciplina Quasi Modus Vivendi
                </div>
                {/* animated underline */}
                <motion.div
                  className="h-[2px] rounded-full mt-1"
                  style={{ background: `linear-gradient(90deg, ${BLUE}, ${NAVY})` }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
                />
              </div>
            </Link>

            {/* ── RIGHT SIDE: tagline + hamburger ── */}
            <div className="flex items-center gap-4">
              {/* tagline pill — hidden on small screens */}
              <motion.div
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: BLUE_SOFT,
                  border: "1px solid rgba(37,99,235,0.18)",
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: BLUE }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: BLUE }}>
                  ALERRT Aligned
                </span>
              </motion.div>

              {/* Enroll CTA — hidden on small screens */}
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${NAVY}, ${NAVY_MID})`,
                    color: WHITE,
                    boxShadow: "0 4px 14px rgba(13,27,62,0.28)",
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 22px rgba(13,27,62,0.38)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(13,27,62,0.28)"; }}
                >
                  Enroll Now
                </Link>
              </motion.div>

              {/* Hamburger */}
              <motion.button
                onClick={() => setIsOpen((o) => !o)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="flex items-center justify-center w-11 h-11 rounded-xl"
                style={{
                  background: isOpen ? NAVY : BLUE_SOFT,
                  border: `1px solid ${isOpen ? "transparent" : "rgba(37,99,235,0.20)"}`,
                  transition: "background 0.25s ease",
                  flexShrink: 0,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.12 }}
              >
                <HamburgerIcon open={isOpen} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ════════════════════════════════════════
          BACKDROP
      ════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            className="fixed inset-0"
            style={{ backgroundColor: "rgba(13,27,62,0.55)", zIndex: 150, backdropFilter: "blur(3px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          />
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════
          DRAWER
      ════════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer"
            className="fixed top-0 right-0 bottom-0 flex flex-col"
            style={{
              width: "min(380px, 92vw)",
              backgroundColor: WHITE,
              zIndex: 190,
              boxShadow: "-12px 0 60px rgba(0,0,0,0.18)",
              overflowY: "auto",
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.38, ease: EASE }}
          >
            {/* ── Drawer header ── */}
            <div
              className="flex items-center justify-between px-6 py-5 flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 100%)`,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Link to="/" onClick={close} className="flex items-center gap-3">
                <img src="/images/shadow-logo.png" alt="Shadow Training Institute"
                  className="h-9 w-9 object-contain" style={{ filter: "brightness(0) invert(1)" }} />
                <div>
                  <div className="font-extrabold text-sm leading-tight" style={{ color: WHITE }}>
                    Shadow Training<span style={{ color: "rgb(147,197,253)" }}> Institute</span>
                  </div>
                  <div className="text-[9px] font-medium tracking-widest uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Disciplina Quasi Modus Vivendi
                  </div>
                </div>
              </Link>

              <motion.button
                onClick={close}
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <HamburgerIcon open={true} />
              </motion.button>
            </div>

            {/* ── Nav items ── */}
            <div className="flex-1 px-4 py-5 space-y-1">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.06 + idx * 0.055, ease: EASE }}
                >
                  {item.sub ? (
                    <>
                      {/* parent with sub-items */}
                      <button
                        onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-sm font-bold transition-all"
                        style={{
                          color: openSub === item.label ? BLUE : TEXT,
                          backgroundColor: openSub === item.label ? BLUE_SOFT : "transparent",
                        }}
                        onMouseEnter={(e) => { if (openSub !== item.label) e.currentTarget.style.backgroundColor = "rgb(248,250,252)"; }}
                        onMouseLeave={(e) => { if (openSub !== item.label) e.currentTarget.style.backgroundColor = "transparent"; }}
                      >
                        <span>{item.label}</span>
                        <motion.span
                          animate={{ rotate: openSub === item.label ? 90 : 0 }}
                          transition={{ duration: 0.22, ease: EASE }}
                          style={{ display: "flex" }}
                        >
                          <ChevronRight className="w-4 h-4" style={{ color: BLUE }} />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {openSub === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: EASE }}
                            style={{ overflow: "hidden" }}
                          >
                            <div className="mt-1 mb-2 ml-2 rounded-xl overflow-hidden"
                              style={{ border: `1px solid rgba(37,99,235,0.12)`, backgroundColor: "rgb(248,250,252)" }}>
                              {item.sub.map((s) => (
                                <Link
                                  key={s.path}
                                  to={s.path}
                                  onClick={close}
                                  className="flex items-center gap-3 px-4 py-3 text-sm transition-all"
                                  style={{ color: TEXT, borderBottom: `1px solid rgba(0,0,0,0.05)` }}
                                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = BLUE_SOFT; e.currentTarget.style.color = BLUE; }}
                                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = TEXT; }}
                                >
                                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: BLUE }}>
                                    <s.icon className="w-3.5 h-3.5" style={{ color: WHITE }} />
                                  </div>
                                  <div>
                                    <div className="font-semibold leading-tight">{s.label}</div>
                                    <div className="text-xs mt-0.5" style={{ color: TEXT_MUT }}>{s.desc}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path!}
                      onClick={close}
                      className="flex items-center justify-between py-3 px-4 rounded-xl text-sm font-bold transition-all"
                      style={{
                        color: location.pathname === item.path ? BLUE : TEXT,
                        backgroundColor: location.pathname === item.path ? BLUE_SOFT : "transparent",
                      }}
                      onMouseEnter={(e) => { if (location.pathname !== item.path) e.currentTarget.style.backgroundColor = "rgb(248,250,252)"; }}
                      onMouseLeave={(e) => { if (location.pathname !== item.path) e.currentTarget.style.backgroundColor = "transparent"; }}
                    >
                      {item.label}
                      <ChevronRight className="w-4 h-4" style={{ color: TEXT_MUT }} />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* ── Contact info strip ── */}
            <div className="px-4 py-4 mx-4 mb-4 rounded-2xl" style={{ backgroundColor: "rgb(243,246,251)", border: `1px solid rgba(37,99,235,0.10)` }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: BLUE }}>Get in Touch</div>
              <div className="space-y-2">
                {[
                  { icon: Phone, text: "+1 (214) 613-2588", href: "tel:+12146132588" },
                  { icon: Mail,  text: "info@shadowtraininginstitute.com", href: "mailto:info@shadowtraininginstitute.com" },
                  { icon: MapPin, text: "Dallas, Texas 75287", href: "#" },
                ].map((c) => (
                  <a key={c.href} href={c.href}
                    className="flex items-center gap-2.5 text-xs transition-colors"
                    style={{ color: TEXT_MUT }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = BLUE; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = TEXT_MUT; }}
                  >
                    <c.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: BLUE }} />
                    {c.text}
                  </a>
                ))}
              </div>
            </div>

            {/* ── CTA ── */}
            <motion.div
              className="px-4 pb-6 flex-shrink-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4, ease: EASE }}
            >
              <Link
                to="/contact"
                onClick={close}
                className="block py-4 px-5 font-bold rounded-2xl text-center text-sm"
                style={{
                  background: `linear-gradient(135deg, ${NAVY}, ${NAVY_MID})`,
                  color: WHITE,
                  boxShadow: "0 6px 20px rgba(13,27,62,0.30)",
                }}
              >
                Enroll Now — Get Started Today
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
