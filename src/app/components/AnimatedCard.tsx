import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode, type CSSProperties } from "react";

/* ─────────────────────────────────────────────
   Shared easing curve — smooth, premium feel
───────────────────────────────────────────── */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────────────────────────────
   Scroll-triggered fade-up wrapper
   Wraps any element; stagger via `delay` prop
───────────────────────────────────────────── */
interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export function FadeUp({ children, delay = 0, className, style }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.55, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Animated card — hover lift + scale + shadow
   Click: quick scale-down feedback
───────────────────────────────────────────── */
interface AnimatedCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "a";
  href?: string;
  onClick?: () => void;
}

export function AnimatedCard({
  children,
  delay = 0,
  className,
  style,
  onClick,
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      /* entrance */
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.55, delay, ease: EASE_OUT }}
      /* hover */
      whileHover={{
        y: -7,
        scale: 1.02,
        transition: { duration: 0.25, ease: EASE_OUT },
      }}
      /* click feedback */
      whileTap={{ scale: 0.98, transition: { duration: 0.12 } }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Icon wrapper — subtle scale on parent hover
   Place inside AnimatedCard; uses CSS group-hover
───────────────────────────────────────────── */
export function AnimatedIcon({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <motion.div
      style={style}
      whileHover={{ scale: 1.08, transition: { duration: 0.2, ease: EASE_OUT } }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Section heading fade-in
───────────────────────────────────────────── */
export function FadeIn({ children, delay = 0, className, style }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 0.5, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
