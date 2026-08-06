"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Wraps children in a staggered container instead of animating directly. */
  stagger?: boolean;
  staggerDelay?: number;
  as?: "div" | "ul";
  y?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

function itemVariants(y: number, delay = 0): Variants {
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE, delay },
    },
  };
}

export function Reveal({
  children,
  className,
  delay = 0,
  stagger = false,
  staggerDelay = 0.12,
  as = "div",
  y = 24,
}: RevealProps) {
  const Comp = motion[as];

  if (stagger) {
    const containerVariants: Variants = {
      hidden: {},
      visible: {
        transition: { staggerChildren: staggerDelay, delayChildren: delay },
      },
    };

    return (
      <Comp
        className={cn(className)}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </Comp>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      variants={itemVariants(y, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div className={cn(className)} variants={itemVariants(y)}>
      {children}
    </motion.div>
  );
}
