import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, Layers, BookOpen, Monitor, Handshake, Phone,
} from "lucide-react";

/* ── flat nav items — no sub-menus, just direct links ── */
const navItems = [
  { label: "Home",         path: "/",            icon: Home },
  { label: "Programs",     path: "/programs",    icon: Layers },
  { label: "Methodology",  path: "/methodology", icon: BookOpen },
  { label: "Simulation",   path: "/simulation",  icon: Monitor },
  { label: "Partnerships", path: "/partnerships",icon: Handshake },
  { label: "Contact",      path: "/contact",     icon: Phone },
];

const NAVY     = "rgb(15, 35, 75)";
const NAVY_MID = "rgb(22, 52, 110)";
const BLUE     = "rgb(37, 99, 235)";
const BLUE_S   = "rgba(37, 99, 235, 0.18)";
const WHITE    = "#ffffff";
const BORDER   = "rgba(255,255,255,0.10)";
const TEXT_DIM = "rgba(255,255,255,0.50)";
const EASE     = [0.22, 1, 0.36, 1] as const;

/* ── Hamburger bars ── */
function HamburgerBars({ open }: { open: boolean }) {
  return (
    <div className="flex flex-col justify-center items-center gap-[5px] w-5 h-5" aria-hidden>
      <motion.span className="block w-5 h-[2px] rounded-full" style={{ backgroundColor: WHITE }}
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.28, ease: EASE }} />
      <motion.span className="block w-5 h-[2px] rounded-full" style={{ backgroundColor: WHITE }}
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.18, ease: EASE }} />
      <motion.span className="block w-5 h-[2px] rounded-full" style={{ backgroundColor: WHITE }}
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.28, ease: EASE }} />
    </div>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); }, [location.pathname, location.hash]);
  useEffect(() => { document.body.style.overflow = isOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [isOpen]);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <>
      {/* ══════════════════════════════════════
          NAV BAR
      ══════════════════════════════════════ */}
      <nav
        style={{
          fontFamily: "'Open Sans', sans-serif",
          position: "sticky",
          top: 0,
          zIndex: 200,
          background: scrolled
            ? `rgba(15, 35, 75, 0.97)`
            : `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_MID} 100%)`,
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: "none",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.30)" : "none",
          transition: "background 0.35s ease, box-shadow 0.35s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-14">
          <div
            className="grid items-center"
            style={{ gridTemplateColumns: "auto 1fr auto", height: "90px", gap: "20px" }}
          >
            {/* LEFT — big logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              className="flex-shrink-0"
              style={{ textDecoration: "none" }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "rgba(37,99,235,0.30)", filter: "blur(12px)" }}
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <img
                  src="/images/shadow-logo.png"
                  alt="Shadow Training Institute"
                  className="relative object-contain"
                  style={{ height: "68px", width: "68px" }}
                />
              </div>
            </Link>

            {/* CENTER — big title + tagline */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <div
                className="font-extrabold leading-tight"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontSize: "clamp(24px, 3.2vw, 42px)",
                  color: WHITE,
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                Shadow Training
                <span style={{ color: "rgb(147, 197, 253)" }}> Institute</span>
              </div>
              <div
                className="font-medium tracking-[0.22em] uppercase mt-1"
                style={{ fontSize: "10px", color: TEXT_DIM }}
              >
                Disciplina Quasi Modus Vivendi
              </div>
              <motion.div
                className="h-[2px] rounded-full mx-auto mt-1.5"
                style={{
                  background: "linear-gradient(90deg, transparent, rgb(147,197,253), transparent)",
                  maxWidth: "300px",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: EASE }}
              />
            </motion.div>

            {/* RIGHT — hamburger */}
            <div className="flex justify-end flex-shrink-0" style={{ paddingLeft: "0px", marginLeft: "-60px" }}>
              <motion.button
                onClick={() => setIsOpen((o) => !o)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="flex items-center justify-center w-12 h-12 rounded-xl"
                style={{
                  background: isOpen ? "rgba(255,255,255,0.20)" : "rgba(255,255,255,0.10)",
                  border: `1px solid ${BORDER}`,
                  transition: "background 0.2s ease",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.12 }}
              >
                <HamburgerBars open={isOpen} />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          BACKDROP (light, doesn't cover nav)
      ══════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            className="fixed inset-0"
            style={{ backgroundColor: "rgba(10,20,50,0.40)", zIndex: 150, backdropFilter: "blur(2px)", top: "90px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
          />
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════
          DROPDOWN PANEL — anchored top-right
          below the nav bar, like the reference
      ══════════════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            style={{
              position: "fixed",
              top: "90px",
              right: "max(16px, calc((100vw - 1280px) / 2 + 20px))",
              zIndex: 190,
              width: "min(270px, calc(100vw - 32px))",
            }}
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0,   scale: 1 }}
            exit={{   opacity: 0, y: -10,  scale: 0.96 }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            <div
              style={{
                background: `linear-gradient(160deg, ${NAVY} 0%, ${NAVY_MID} 100%)`,
                borderRadius: "16px",
                boxShadow: "0 16px 48px rgba(0,0,0,0.45)",
                border: `1px solid ${BORDER}`,
                overflow: "hidden",
              }}
            >
              {/* Panel header */}
              <div className="flex items-center px-4 py-2.5">
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: TEXT_DIM }}>
                  Navigation
                </span>
              </div>

              {/* Nav items */}
              <div className="px-2 py-2 space-y-0.5">
                {navItems.map((item, idx) => {
                  const active = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.22, delay: 0.03 + idx * 0.04, ease: EASE }}
                    >
                      <Link
                        to={item.path}
                        onClick={close}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all"
                        style={{
                          textDecoration: "none",
                          background: active ? BLUE_S : "transparent",
                          border: `1px solid ${active ? "rgba(37,99,235,0.35)" : "transparent"}`,
                        }}
                        onMouseEnter={(e) => {
                          if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                        }}
                        onMouseLeave={(e) => {
                          if (!active) e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {/* Icon box */}
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            background: active ? BLUE_S : "rgba(255,255,255,0.10)",
                            border: `1px solid ${active ? "rgba(37,99,235,0.35)" : "rgba(255,255,255,0.08)"}`,
                          }}
                        >
                          <item.icon
                            className="w-3.5 h-3.5"
                            style={{ color: active ? "rgb(147,197,253)" : WHITE }}
                          />
                        </div>
                        {/* Label */}
                        <span
                          className="text-xs font-bold"
                          style={{ color: active ? "rgb(147,197,253)" : WHITE }}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="px-2 pb-2">
                <Link
                  to="/contact"
                  onClick={close}
                  className="block py-2 px-3 font-bold rounded-lg text-center text-xs mt-1"
                  style={{
                    background: `linear-gradient(135deg, ${BLUE}, rgb(29,78,216))`,
                    color: WHITE,
                    boxShadow: "0 4px 12px rgba(37,99,235,0.40)",
                    textDecoration: "none",
                  }}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
