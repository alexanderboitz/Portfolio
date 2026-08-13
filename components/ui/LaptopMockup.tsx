import Image from "next/image";

interface LaptopMockupProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Minimalistisches MacBook-artiges Laptop-Mockup, rein aus CSS/Tailwind
 * aufgebaut (kein zusätzliches Bild-Asset nötig) — Bildschirm, Scharnier
 * und Gehäusebasis mit angedeuteter Trackpad-Aussparung.
 */
export function LaptopMockup({ src, alt, className }: LaptopMockupProps) {
  return (
    <div className={`mx-auto w-full max-w-2xl select-none ${className ?? ""}`}>
      {/* Bildschirm */}
      <div className="rounded-t-[14px] rounded-b-[4px] bg-gradient-to-b from-neutral-800 to-neutral-900 p-[10px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] ring-1 ring-black/60 sm:p-3">
        <div className="flex items-center justify-center pb-1.5 sm:pb-2">
          <span className="h-[3px] w-[3px] rounded-full bg-neutral-600" aria-hidden />
        </div>
        <div className="group relative aspect-[16/10] w-full overflow-hidden rounded-[3px] bg-black">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-expo group-hover:scale-105"
          />
        </div>
      </div>

      {/* Scharnier */}
      <div className="h-[3px] bg-gradient-to-b from-neutral-700 to-neutral-950" aria-hidden />

      {/* Gehäusebasis */}
      <div
        aria-hidden
        className="relative -mx-[4%] h-3.5 rounded-b-2xl bg-gradient-to-b from-neutral-500 via-neutral-700 to-neutral-800 shadow-[0_20px_25px_-10px_rgba(0,0,0,0.6)] sm:h-4"
      >
        <div className="absolute left-1/2 top-0 h-full w-20 -translate-x-1/2 rounded-b-md bg-neutral-900/70 sm:w-24" />
      </div>
    </div>
  );
}
