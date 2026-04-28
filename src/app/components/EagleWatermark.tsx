import { useEffect, useRef, useState } from "react";
import "./EagleWatermark.css";

type Phase = "prelude" | "emerge" | "recede" | "settled";

interface Props {
  /**
   * Ref to a zero-height div placed at the END of the last section
   * that should show the eagle. Eagle hides when this sentinel's top
   * edge scrolls AT OR ABOVE the viewport top (i.e. you've scrolled
   * past the allowed zone). It stays hidden for everything below.
   */
  hideAfterRef: React.RefObject<HTMLDivElement | null>;
}

export function EagleWatermark({ hideAfterRef }: Props) {
  const [phase, setPhase] = useState<Phase>("prelude");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [hidden, setHidden] = useState(false);

  const eagleRef = useRef<HTMLDivElement>(null);
  const rafRef   = useRef<number>(0);
  const mouse    = useRef({ tx: 0, ty: 0, cx: 0, cy: 0 });

  /* ── Reduced motion ── */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  /* ── Cinematic phase sequencer ── */
  useEffect(() => {
    if (reducedMotion) return;
    const t1 = setTimeout(() => setPhase("emerge"),  400);
    const t2 = setTimeout(() => setPhase("recede"),  1800);
    const t3 = setTimeout(() => setPhase("settled"), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [reducedMotion]);

  /* ── Mouse parallax ── */
  useEffect(() => {
    if (reducedMotion) return;
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouse.current.tx = ((e.clientX - cx) / cx) * 10;
      mouse.current.ty = ((e.clientY - cy) / cy) * 7;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reducedMotion]);

  /* ── rAF lerp loop ── */
  useEffect(() => {
    if (reducedMotion) return;
    const loop = () => {
      const m = mouse.current;
      m.cx += (m.tx - m.cx) * 0.06;
      m.cy += (m.ty - m.cy) * 0.06;
      if (eagleRef.current) {
        eagleRef.current.style.setProperty("--mx", `${m.cx.toFixed(2)}px`);
        eagleRef.current.style.setProperty("--my", `${m.cy.toFixed(2)}px`);
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reducedMotion]);

  /* ── Scroll hide ──────────────────────────────────────────────
     Sentinel is placed at the START of the CTA section.
     Hide eagle when sentinel enters the bottom of the viewport.
  ── */
  useEffect(() => {
    const check = () => {
      if (!hideAfterRef.current) return;
      const rect = hideAfterRef.current.getBoundingClientRect();
      // Hide when sentinel's top edge reaches the bottom of the viewport
      setHidden(rect.top <= window.innerHeight);
    };
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, [hideAfterRef]);

  const phaseClass = reducedMotion ? "eagle-reduced" : `eagle-${phase}`;

  return (
    <div
      ref={eagleRef}
      className={`eagle-watermark ${phaseClass}${hidden ? " eagle-hidden" : ""}`}
      aria-hidden="true"
      style={{ "--mx": "0px", "--my": "0px" } as React.CSSProperties}
    >
      <div className="eagle-glow" />
      <img
        src="/images/shadow-logo1.png"
        alt=""
        className="eagle-img"
        draggable={false}
      />
    </div>
  );
}
