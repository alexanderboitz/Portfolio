export type IconName =
  | "marketing"
  | "design"
  | "branding"
  | "content"
  | "social"
  | "event"
  | "adobe"
  | "presentation"
  | "mail"
  | "download"
  | "arrowRight"
  | "arrowDown"
  | "arrowUpRight"
  | "menu"
  | "close"
  | "externalLink"
  | "play"
  | "chevronDown";

interface IconProps {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}

/**
 * Kleines, handgebautes Inline-SVG-Icon-Set.
 * Bewusst statt einer Icon-Library, um Bundle-Größe und Abhängigkeiten
 * minimal zu halten ("keine unnötigen Libraries").
 */
export function Icon({ name, className, strokeWidth = 1.6 }: IconProps) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "marketing":
      return (
        <svg {...common}>
          <path d="M3 11v2a2 2 0 0 0 2 2h1l4 4V5L6 9H5a2 2 0 0 0-2 2Z" />
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 5.5a9 9 0 0 1 0 13" />
        </svg>
      );
    case "design":
      return (
        <svg {...common}>
          <path d="M12 19l7-7 3 3-7 7-3-3Z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      );
    case "branding":
      return (
        <svg {...common}>
          <path d="M11 4H4v7l9.5 9.5a2 2 0 0 0 2.83 0l4.17-4.17a2 2 0 0 0 0-2.83L11 4Z" />
          <circle cx="8" cy="8" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "content":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
          <path d="M8 4v5" />
        </svg>
      );
    case "social":
      return (
        <svg {...common}>
          <circle cx="6" cy="12" r="2.4" />
          <circle cx="18" cy="6" r="2.4" />
          <circle cx="18" cy="18" r="2.4" />
          <path d="M8.2 10.8 15.8 7.2" />
          <path d="M8.2 13.2 15.8 16.8" />
        </svg>
      );
    case "event":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 10h18" />
          <path d="M8 3v4" />
          <path d="M16 3v4" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
        </svg>
      );
    case "adobe":
      return (
        <svg {...common}>
          <path d="M4 4h6l10 16h-6L4 4Z" />
          <path d="M9.5 4H4v16l5.5-16Z" />
          <path d="M18.5 4H14v6l4.5-6Z" />
        </svg>
      );
    case "presentation":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20l4-4 4 4" />
          <path d="M7 9l3 3 2-2 3 3" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "download":
      return (
        <svg {...common}>
          <path d="M12 4v12" />
          <path d="m7 12 5 5 5-5" />
          <path d="M5 20h14" />
        </svg>
      );
    case "arrowRight":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "arrowUpRight":
      return (
        <svg {...common}>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </svg>
      );
    case "arrowDown":
      return (
        <svg {...common}>
          <path d="M12 5v14" />
          <path d="m6 13 6 6 6-6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="m6 6 12 12" />
          <path d="m18 6-12 12" />
        </svg>
      );
    case "externalLink":
      return (
        <svg {...common}>
          <path d="M14 4h6v6" />
          <path d="M20 4 10 14" />
          <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
        </svg>
      );
    case "play":
      return (
        <svg {...common} fill="currentColor" stroke="none">
          <path d="M8 5v14l11-7L8 5Z" />
        </svg>
      );
    case "chevronDown":
      return (
        <svg {...common}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    default:
      return null;
  }
}
