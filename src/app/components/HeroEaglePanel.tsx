import { useEffect, useRef, useState } from "react";

type Phase = "prelude" | "emerge" | "recede" | "settled";

export function HeroEaglePanel() {
  const [phase, setPhase] = useState<Phase>("prelude");
  const [reducedMotion, setReducedMotion] = useState(false);
  const eagleRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouse = useRef({ tx: 0, ty: 0, cx: 0, cy: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const t1 = setTimeout(() => setPhase("emerge"), 600);
    const t2 = setTimeout(() => setPhase("recede"), 2000);
    const t3 = setTimeout(() => setPhase("settled"), 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth * 0.75;
      const cy = window.innerHeight / 2;
      mouse.current.tx = ((e.clientX - cx) / (window.innerWidth * 0.5)) * 10;
      mouse.current.ty = ((e.clientY - cy) / (window.innerHeight * 0.5)) * 7;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const loop = () => {
      const m = mouse.current;
      m.cx += (m.tx - m.cx) * 0.05;
      m.cy += (m.ty - m.cy) * 0.05;
      if (eagleRef.current) {
        eagleRef.current.style.transform =
          `translate(-50%, -50%) translate(${m.cx.toFixed(2)}px, ${m.cy.toFixed(2)}px)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reducedMotion]);

  const phaseStyles: Record<Phase, React.CSSProperties> = {
    prelude: {
      opacity: 0.06,
      filter: "blur(20px)",
      transition: "opacity 0.6s ease-out, filter 0.6s ease-out",
    },
    emerge: {
      opacity: 0.98,
      filter: "blur(0px) brightness(1.12) drop-shadow(0 0 40px rgba(201,168,76,0.60)) drop-shadow(0 0 80px rgba(201,168,76,0.28))",
      transition: "opacity 0.55s cubic-bezier(0.22,1,0.36,1), filter 0.55s cubic-bezier(0.22,1,0.36,1)",
    },
    recede: {
      opacity: 0.30,
      filter: "blur(2px)",
      transition: "opacity 0.9s ease-in-out, filter 0.9s ease-in-out",
    },
    settled: {
      opacity: 0.88,
      filter: "blur(0px) brightness(1.08) drop-shadow(0 0 32px rgba(201,168,76,0.35)) drop-shadow(0 0 70px rgba(201,168,76,0.15))",
      transition: "opacity 1.2s ease-in-out, filter 1.2s ease-in-out",
    },
  };

  const reducedStyle: React.CSSProperties = {
    opacity: 0.85,
    filter: "blur(0px) brightness(1.06) drop-shadow(0 0 24px rgba(201,168,76,0.30))",
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      aria-hidden="true"
      style={{
        /* Warm tinted background — subtle cream/gold tone */
        background: "radial-gradient(ellipse at center, #F5EDD8 0%, #EDE3C8 40%, #E5D9B8 100%)",
        /* 50% border radius — circular panel */
        borderRadius: "50%",
        /* Soft vignette shadow to separate from left content */
        boxShadow: "inset 0 0 60px rgba(201,168,76,0.08), 0 8px 40px rgba(0,0,0,0.06)",
      }}
    >
      {/* Layered radial gold glow — depth behind eagle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(201,168,76,0.14) 0%, rgba(201,168,76,0.06) 45%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Eagle — larger, centered, parallax */}
      <div
        ref={eagleRef}
        className="absolute pointer-events-none select-none"
        style={{
          top: "50%",
          left: "50%",
          width: "min(600px, 95%)",
          height: "min(680px, 95%)",
          transform: "translate(-50%, -50%)",
          willChange: "transform, opacity, filter",
          ...(reducedMotion ? reducedStyle : phaseStyles[phase]),
        }}
      >
        <img
          src="/images/shadow-logo1.png"
          alt=""
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            filter: "drop-shadow(0 0 1px rgba(100,70,20,0.8))",
          }}
        />
      </div>
    </div>
  );
}
