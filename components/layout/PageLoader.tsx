/**
 * Kurzer Marken-Moment beim ersten Laden: rein CSS-animiert (keine
 * Client-Komponente, kein JS nötig), damit er den Speed Index nicht
 * verschlechtert. Blendet sich nach 0,8s automatisch selbst aus und
 * blockiert währenddessen keine Klicks (pointer-events-none).
 */
export function PageLoader() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] flex animate-loader-cycle items-center justify-center bg-navy"
    >
      <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        A<span className="text-accent">B</span>
      </span>
    </div>
  );
}
