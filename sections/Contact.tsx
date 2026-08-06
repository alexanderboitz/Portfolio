import { contact } from "@/lib/data";
import { SITE, RESUME_PATH } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[160px]"
      />

      <div className="container-page relative text-center">
        <Reveal>
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-accent" aria-hidden />
            {contact.eyebrow}
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[1.02] tracking-tight text-white">
            {contact.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-lg text-balance text-base leading-relaxed text-ink2-secondary md:text-lg">
            {contact.text}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <Button href={`mailto:${SITE.email}`} icon="mail">
              {SITE.email}
            </Button>
            <Button href={RESUME_PATH} download variant="secondary" icon="download">
              Lebenslauf herunterladen
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
