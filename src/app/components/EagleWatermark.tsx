import { useEffect, useRef, useState } from "react";
import "./EagleWatermark.css";

type Phase = "prelude" | "emerge" | "recede" | "settled";

export function EagleWatermark() {
  const [phase, setPhase] = useState<Phase>("prelude");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  const eagleRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  // Mouse parallax target & current (lerped)
  const mouse = useRef({ tx: 0, ty: 0, cx: 0, cy: 0 });
  // Scroll offset
  const scrollY = useRef(0);

  /* ── Reduced motion check ── */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  /* ── Phase sequencer ── */
  useEffect(() => {
    if (reducedMotion) return; // skip straight to settled via CSS

    // Phase 1 → 2: emerge after 400ms
    const t1 = setTimeout(() => setPhase("emerge"), 400);
    // Phase 2 → 3: recede after emerge (400 + 1400ms)
    const t2 = setTimeout(() => setPhase("recede"), 1800);
    // Phase 3 → 4: settled after recede (1800 + 900ms)
    const t3 = setTimeout(() => setPhase("settled"), 2700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [reducedMotion]);

  /* ── Mouse move listener ── */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouse.current.tx = ((e.clientX - cx) / cx) * 12;
      mouse.current.ty = ((e.clientY - cy) / cy) * 8;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* ── Scroll listener ── */
  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Footer clip observer ── */
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const obs = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.01 }
    );
    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  /* ── rAF loop: lerp mouse + apply scroll parallax ── */
  useEffect(() => {
    if (reducedMotion) return;

    const loop = () => {
      const m = mouse.current;
      // Lerp toward target
      m.cx += (m.tx - m.cx) * 0.06;
      m.cy += (m.ty - m.cy) * 0.06;

      const scrollOffset = scrollY.current * 0.04;

      if (eagleRef.current) {
        eagleRef.current.style.setProperty("--mx", `${m.cx.toFixed(2)}px`);
        eagleRef.current.style.setProperty("--my", `${(m.cy + scrollOffset).toFixed(2)}px`);
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reducedMotion]);

  const phaseClass = reducedMotion ? "eagle-reduced" : `eagle-${phase}`;
  const clipClass = footerVisible ? "eagle-clip-footer" : "";

  return (
    <div
      ref={eagleRef}
      className={`eagle-watermark ${phaseClass} ${clipClass}`}
      aria-hidden="true"
      style={{ "--mx": "0px", "--my": "0px" } as React.CSSProperties}
    >
      {/* Gold radial glow — only visible during emerge */}
      <div className="eagle-glow" />

      {/* Metallic sheen sweep */}
      <div className="eagle-sheen" />

      {/* The eagle image */}
      <img
        src="/images/shadow-logo1.png"
        alt=""
        className="eagle-img"
        draggable={false}
      />
    </div>
  );
}
