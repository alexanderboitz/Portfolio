"use client";

import { useEffect, useState } from "react";

/**
 * Liefert true, sobald über die übergebene Schwelle (px) hinaus gescrollt wurde.
 * Genutzt, um die Navbar von transparent auf Glass-Hintergrund umzuschalten.
 */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
