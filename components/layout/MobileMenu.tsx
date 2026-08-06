"use client";

import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, RESUME_PATH } from "@/lib/constants";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeHash: string;
}

export function MobileMenu({ open, onClose, activeHash }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40 flex flex-col bg-navy-mid/98 backdrop-blur-xl md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-6">
            <span className="text-lg font-bold tracking-tight">AB</span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Menü schließen"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-8 flex flex-1 flex-col gap-1 px-6">
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "border-b border-white/8 py-4 text-2xl font-semibold tracking-tight text-ink2-secondary transition-colors",
                  activeHash === link.href.slice(1) && "text-accent"
                )}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 px-6 pb-10">
            <Button href={RESUME_PATH} download variant="secondary" icon="download">
              Lebenslauf herunterladen
            </Button>
            <Button href="#contact" onClick={onClose} icon="arrowRight">
              Kontakt
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
