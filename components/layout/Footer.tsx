import { SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 py-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-xs text-ink2-tertiary sm:flex-row">
        <p>
          © {year} {SITE.name}. Alle Rechte vorbehalten.
        </p>
        <p>Marketing · Grafikdesign · Branding</p>
      </div>
    </footer>
  );
}
