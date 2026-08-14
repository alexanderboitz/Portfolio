import Image from "next/image";
import { hero } from "@/lib/data";
import { RESUME_PATH } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

/**
 * Bewusst ohne Framer Motion: Der Hero ist der erste sichtbare Inhalt der
 * Seite und läuft daher rein über CSS-Animationen (siehe tailwind.config.ts),
 * die sofort beim Rendern starten statt erst nach dem Laden/Hydrieren des
 * JS-Bundles. Das verbessert den Speed Index spürbar.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      <span
        aria-hidden
        className="num-watermark pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none text-[32vw] leading-none md:block"
      >
        AB
      </span>

      <div className="container-page relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <span className="eyebrow animate-hero-fade-up [animation-delay:0ms]">
            <span className="h-px w-6 bg-accent" aria-hidden />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 animate-hero-fade-up text-balance text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold leading-[0.98] tracking-tight text-white [animation-delay:60ms]">
            {hero.name}
          </h1>

          <div className="mt-6 flex animate-hero-fade-up flex-wrap items-center gap-x-4 gap-y-2 text-[clamp(1.1rem,2.4vw,1.75rem)] font-medium text-ink2-secondary [animation-delay:120ms]">
            {hero.roles.map((role, index) => (
              <span key={role} className="flex items-center gap-4">
                {index > 0 && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                )}
                {role}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-xl animate-hero-fade-up text-balance text-base leading-relaxed text-ink2-secondary [animation-delay:180ms] md:text-lg">
            {hero.claim}
          </p>

          <div className="mt-11 flex animate-hero-fade-up flex-wrap items-center gap-4 [animation-delay:240ms]">
            <Button href="#projects" icon="arrowRight">
              Portfolio ansehen
            </Button>
            <Button href={RESUME_PATH} download variant="secondary" icon="download">
              Lebenslauf herunterladen
            </Button>
            <Button href="#contact" variant="ghost" icon="arrowUpRight">
              Kontakt
            </Button>
          </div>
        </div>

        <div className="order-1 flex animate-hero-fade-scale justify-center [animation-delay:100ms] lg:order-2 lg:col-span-5 lg:justify-end">
          <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-96 lg:w-96">
            <div
              aria-hidden
              className="absolute -inset-8 rounded-full bg-accent/20 blur-[60px]"
            />
            <div className="relative h-full w-full overflow-hidden rounded-full ring-1 ring-accent/40">
              <Image
                src="/images/profile/alexander-boitz.jpg"
                alt="Porträt von Alexander Boitz"
                fill
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 288px, 224px"
                priority
                className="object-cover object-[50%_22%]"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Zur nächsten Sektion scrollen"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-hero-fade-up flex-col items-center gap-2 text-ink2-tertiary transition-colors [animation-delay:400ms] hover:text-accent md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <span className="inline-block animate-bounce-soft">
          <Icon name="arrowDown" className="h-4 w-4" />
        </span>
      </a>
    </section>
  );
}
