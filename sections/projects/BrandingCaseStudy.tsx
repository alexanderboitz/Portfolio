import Image from "next/image";
import type { BrandingProject } from "@/lib/data";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { ProjectIntro } from "./ProjectIntro";

export function BrandingCaseStudy({ project }: { project: BrandingProject }) {
  return (
    <div id={`project-${project.id}`} className="relative py-20 last:pb-0">
      <span
        aria-hidden
        className="num-watermark pointer-events-none absolute -top-10 left-0 select-none text-[9rem] leading-none md:text-[13rem]"
      >
        {project.number}
      </span>

      <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal stagger className="lg:col-span-5">
          <ProjectIntro project={project} />
        </Reveal>

        <div className="flex flex-col gap-10 lg:col-span-7 lg:col-start-6">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink2-tertiary">
                Verpackungsdesign
              </p>
            </Reveal>
            <Reveal stagger className="mt-4 grid grid-cols-2 gap-3">
              {project.verpackung.map((image) => (
                <RevealItem key={image.src}>
                  <div className="group relative aspect-square overflow-hidden rounded-2xl border border-surface-border">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 45vw"
                      className="object-cover transition-transform duration-700 ease-expo group-hover:scale-105"
                    />
                  </div>
                </RevealItem>
              ))}
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink2-tertiary">
                Logodesign
              </p>
            </Reveal>
            <Reveal stagger className="mt-4 grid grid-cols-3 gap-3">
              {project.logos.map((logo) => (
                <RevealItem key={logo.src}>
                  <div className="flex h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-surface-border bg-surface p-5 transition-colors duration-300 hover:border-accent/30">
                    <div className="relative h-14 w-full">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        sizes="140px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </RevealItem>
              ))}
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink2-tertiary">
                Webdesign
              </p>
            </Reveal>
            <Reveal className="mt-4">
              <div className="overflow-hidden rounded-2xl border border-surface-border bg-navy-mid shadow-card">
                <div className="flex items-center gap-1.5 border-b border-surface-border bg-white/5 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <div className="group relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={project.webdesign.src}
                    alt={project.webdesign.alt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 ease-expo group-hover:scale-105"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
