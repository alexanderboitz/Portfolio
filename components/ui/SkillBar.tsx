"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: string;
  bar: number;
}

export function SkillBar({ name, level, bar }: SkillBarProps) {
  return (
    <div>
      <div className="mb-2.5 flex items-baseline justify-between gap-4">
        <span className="text-sm font-semibold text-ink2-primary">{name}</span>
        <span className="text-xs text-ink2-tertiary">{level}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${bar}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
