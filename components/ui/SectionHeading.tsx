import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-6 bg-accent" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.08] tracking-tight text-ink2-primary">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-balance text-base leading-relaxed text-ink2-secondary md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
