"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

/**
 * Fixierte, dezente Hintergrund-Deko: zwei Glow-Blobs mit leichtem Parallax.
 * Läuft über die gesamte Seite (fixed), damit Sections selbst transparent
 * bleiben und der Navy→Schwarz-Verlauf aus globals.css durchscheint.
 */
export function BackgroundFX() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-accent/20 blur-[140px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-32 top-[35%] h-[420px] w-[420px] rounded-full bg-accent/10 blur-[130px]"
      />
      <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-accent/5 blur-[150px]" />
    </div>
  );
}
