"use client";

import { useState } from "react";
import { NAV_LINKS, RESUME_PATH } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrollProgress";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(16);
  const active = useActiveSection(SECTION_IDS);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-400 ease-expo",
          scrolled ? "glass-nav border-b border-white/8 py-3" : "py-6"
        )}
      >
        <div className="container-page flex items-center justify-between">
          <a
            href="#home"
            className="text-lg font-extrabold tracking-tight text-white transition-opacity hover:opacity-80"
            aria-label="Zum Seitenanfang"
          >
            A<span className="text-accent">B</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 text-sm font-medium text-ink2-secondary transition-colors duration-300 hover:text-white",
                  active === link.href.slice(1) && "text-white"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-expo",
                    active === link.href.slice(1) && "scale-x-100"
                  )}
                  aria-hidden
                />
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button href={RESUME_PATH} download variant="ghost" className="text-xs">
              Lebenslauf
            </Button>
            <Button href="#contact" variant="secondary" size="sm">
              Kontakt
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Menü öffnen"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          >
            <Icon name="menu" className="h-5 w-5" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeHash={active} />
    </>
  );
}
