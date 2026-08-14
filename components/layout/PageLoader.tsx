/**
 * Bleibt sichtbar, bis die Seite vollständig geladen ist (window.load),
 * und blendet sich danach weich aus. Das Umschalten übernimmt ein winziges
 * Inline-Script in app/layout.tsx (kein React-Hydration-Umweg nötig, siehe
 * dort). Blockiert währenddessen keine Klicks (pointer-events-none).
 */
export function PageLoader() {
  return (
    <div
      id="page-loader"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-navy"
    >
      <div className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
        <span className="absolute inset-0 rounded-full border-[3px] border-white/10" />
        <span className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-accent" />
        <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          A<span className="text-accent">B</span>
        </span>
      </div>
    </div>
  );
}
