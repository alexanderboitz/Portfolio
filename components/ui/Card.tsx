import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({ children, className, hover = true, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-surface-border bg-surface p-8 transition-all duration-400 ease-expo",
        hover &&
          "hover:-translate-y-1 hover:border-accent/30 hover:bg-surface-hover hover:shadow-glow",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
