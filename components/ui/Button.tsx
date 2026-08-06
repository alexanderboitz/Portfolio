import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  iconPosition?: "left" | "right";
  className?: string;
  children: ReactNode;
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  download?: boolean | string;
  "aria-label"?: string;
}

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-wide transition-all duration-300 ease-expo focus-visible:outline-2 focus-visible:outline-accent";

const sizes: Record<Size, string> = {
  md: "px-7 py-3.5 text-sm",
  sm: "px-5 py-2.5 text-xs",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_0_0_0_rgba(0,156,227,0.5)] hover:shadow-[0_0_32px_4px_rgba(0,156,227,0.45)] hover:-translate-y-0.5",
  secondary:
    "border border-white/20 text-ink2-primary hover:border-accent/60 hover:bg-accent/10 hover:-translate-y-0.5",
  ghost: "text-ink2-secondary hover:text-white px-2 py-1",
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className,
  children,
  href,
  target,
  rel,
  onClick,
  type = "button",
  download,
  ...aria
}: ButtonProps) {
  const classes = cn(
    base,
    variant !== "ghost" && sizes[size],
    variants[variant],
    className
  );

  const iconEl = icon ? (
    <Icon
      name={icon}
      className={cn(
        "h-4 w-4 transition-transform duration-300 ease-expo",
        icon === "arrowRight" && "group-hover:translate-x-0.5",
        icon === "download" && "group-hover:translate-y-0.5",
        icon === "arrowUpRight" &&
          "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      )}
    />
  ) : null;

  const content = (
    <>
      {iconPosition === "left" && iconEl}
      <span>{children}</span>
      {iconPosition === "right" && iconEl}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick}
        className={classes}
        {...aria}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...aria}>
      {content}
    </button>
  );
}
