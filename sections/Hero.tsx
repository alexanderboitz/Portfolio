"use client";

import { motion } from "framer-motion";
import { hero } from "@/lib/data";
import { RESUME_PATH } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <span
        aria-hidden
        className="num-watermark pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none text-[32vw] leading-none md:block"
      >
        AB
      </span>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container-page relative z-10"
      >
        <motion.span variants={item} className="eyebrow">
          <span className="h-px w-6 bg-accent" aria-hidden />
          {hero.eyebrow}
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 text-balance text-[clamp(2.75rem,8vw,6.5rem)] font-extrabold leading-[0.98] tracking-tight text-white"
        >
          {hero.name}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[clamp(1.1rem,2.4vw,1.75rem)] font-medium text-ink2-secondary"
        >
          {hero.roles.map((role, index) => (
            <span key={role} className="flex items-center gap-4">
              {index > 0 && (
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              )}
              {role}
            </span>
          ))}
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-balance text-base leading-relaxed text-ink2-secondary md:text-lg"
        >
          {hero.claim}
        </motion.p>

        <motion.div variants={item} className="mt-11 flex flex-wrap items-center gap-4">
          <Button href="#projects" icon="arrowRight">
            Portfolio ansehen
          </Button>
          <Button href={RESUME_PATH} download variant="secondary" icon="download">
            Lebenslauf herunterladen
          </Button>
          <Button href="#contact" variant="ghost" icon="arrowUpRight">
            Kontakt
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Zur nächsten Sektion scrollen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink2-tertiary transition-colors hover:text-accent md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon name="arrowDown" className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
