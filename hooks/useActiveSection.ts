"use client";

import { useEffect, useState } from "react";

/**
 * Beobachtet die übergebenen Section-IDs per IntersectionObserver
 * und liefert die aktuell im Viewport dominante Section zurück —
 * genutzt für den aktiven Zustand in der Navigation.
 */
export function useActiveSection(ids: readonly string[]): string {
  // Bewusst leer initialisiert: solange noch keine der beobachteten
  // Sections den Schwellenwert erreicht hat (z. B. während im Hero
  // "#home" — das nicht Teil von ids ist — angezeigt wird), soll kein
  // Nav-Link fälschlich als aktiv markiert werden.
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
