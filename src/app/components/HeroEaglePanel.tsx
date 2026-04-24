import { useEffect, useRef, useState } from "react";

type Phase = "prelude" | "emerge" | "recede" | "settled";

/**
 * HeroEaglePanel — animated eagle for the hero right panel.
 * Self-contained, positioned within its parent container.
 * Does NOT affect the global EagleWatermark.
 */
export function HeroEaglePanel() {
  const [phase, setPhase] = useState<Phase>("prelude");
  const [reducedMotion, setReducedMotion] = useState(false);
  const eagleRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouse = useRef({ tx: 0, ty: 0, cx: 0, cy: 0 });

  /* ── Reduced motion ── */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  /* ── Phase sequencer ── */
  useEffect(() => {
    if (reducedMotion) return;
    const t1 = setTimeout(() => setPhase("emerge"), 600);
    const t2 = setTimeout(() => setPhase("recede"), 2000);
    const t3 = setTimeout(() => setPhase("settled"), 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [reducedMotion]);

  /* ── Subtle mouse parallax (relative to panel center) ── */
  useEffect(() => {
    if (reducedMotion) return;
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth * 0.75; // right half center
      const cy = window.innerHeight / 2;
      mouse.current.tx = ((e.clientX - cx) / (window.innerWidth * 0.5)) * 10;
      mouse.current.ty = ((e.clientY - cy) / (window.innerHeight * 0.5)) * 7;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reducedMotion]);

  /* ── rAF lerp loop ── */
  useEffect(() => {
    if (reducedMotion) return;
    const loop = () => {
      const m = mouse.current;
      m.cx += (m.tx - m.cx) * 0.05;
      m.cy += (m.ty - m.cy) * 0.05;
      if (eagleRef.current) {
        eagleRef.current.style.transform =
          `translate(-50%, -50%) translate(${m.cx.toFixed(2)}px, ${m.cy.toFixed(2)}px) scale(var(--ep-scale, 1))`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reducedMotion]);

  /* ── Phase-driven styles ── */
  const phaseStyles: Record<Phase, React.CSSProperties> = {
    prelude: {
      opacity: 0.06,
      filter: "blur(20px)",
      transition: "opacity 0.6s ease-out, filter 0.6s ease-out",
    },
    emerge: {
      opacity: 0.95,
      filter: "blur(0px) brightness(1.12) drop-shadow(0 0 32px rgba(201,168,76,0.55)) drop-shadow(0 0 70px rgba(201,168,76,0.25))",
      transition: "opacity 0.55s cubic-bezier(0.22,1,0.36,1), filter 0.55s cubic-bezier(0.22,1,0.36,1)",
    },
    recede: {
      opacity: 0.28,
      filter: "blur(2px)",
      transition: "opacity 0.9s ease-in-out, filter 0.9s ease-in-out",
    },
    settled: {
      opacity: 0.72,
      filter: "blur(0px) brightness(1.08) drop-shadow(0 0 28px rgba(201,168,76,0.30)) drop-shadow(0 0 60px rgba(201,168,76,0.12))",
      transition: "opacity 1.2s ease-in-out, filter 1.2s ease-in-out",
    },
  };

  const reducedStyle: React.CSSProperties = {
    opacity: 0.65,
    filter: "blur(0px) brightness(1.06) drop-shadow(0 0 20px rgba(201,168,76,0.28))",
  };

  return (
    /* Outer container — fills the right panel */
    <div
      className="relative w-full h-full overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle radial gold background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 50%, transparent 75%)",
        }}
      />

      {/* Eagle image — centered, parallax via inline transform */}
      <div
        ref={eagleRef}
        className="absolute pointer-events-none select-none"
        style={{
          top: "50%",
          left: "50%",
          width: "min(520px, 90%)",
          height: "min(600px, 90%)",
          transform: "translate(-50%, -50%) scale(1)",
          willChange: "transform, opacity, filter",
          ...(reducedMotion ? reducedStyle : phaseStyles[phase]),
        }}
      >
        <img
          src="/images/shadow-logo1.png"
          alt=""
          draggable={false}
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
        />
      </div>
    </div>
  );
}
