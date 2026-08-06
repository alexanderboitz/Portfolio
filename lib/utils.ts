type ClassValue = string | number | null | undefined | false;

/**
 * Minimal classnames combinator — avoids pulling in a dependency
 * just for conditional Tailwind class strings.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}
