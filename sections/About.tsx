import Image from "next/image";
import { about } from "@/lib/data";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent" aria-hidden />
                {about.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-balance text-[clamp(2rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-tight text-white">
                {about.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="group relative mt-10 aspect-[4/5] max-w-sm overflow-hidden rounded-[28px] border border-surface-border">
                <Image
                  src="/images/profile/alexander-boitz.jpg"
                  alt="Porträt von Alexander Boitz"
                  fill
                  sizes="(min-width: 1024px) 380px, 90vw"
                  priority
                  className="object-cover object-[50%_22%] transition-transform duration-700 ease-expo group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal stagger className="space-y-6">
            {about.paragraphs.map((paragraph) => (
              <RevealItem key={paragraph}>
                <p className="text-balance text-base leading-relaxed text-ink2-secondary md:text-lg">
                  {paragraph}
                </p>
              </RevealItem>
            ))}
          </Reveal>

          <Reveal stagger delay={0.1} className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {about.pillars.map((pillar) => (
              <RevealItem key={pillar.title}>
                <div className="h-full rounded-2xl border border-surface-border bg-surface p-6 transition-colors duration-300 hover:border-accent/30">
                  <h3 className="text-sm font-semibold text-accent">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink2-secondary">
                    {pillar.text}
                  </p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
