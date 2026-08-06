import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline";
}

export function Badge({ children, className, variant = "outline" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide",
        variant === "outline" &&
          "border border-surface-border text-ink2-secondary",
        variant === "solid" && "bg-accent-soft text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
