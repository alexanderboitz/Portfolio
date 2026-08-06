import { experience, education } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Werdegang"
          title="Stationen, die meinen Blick für Marken geschärft haben."
        />

        <Reveal stagger className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {experience.map((entry) => (
            <RevealItem key={entry.role} className="h-full">
              <Card className="flex h-full flex-col">
                <span className="eyebrow !text-[11px]">{entry.period}</span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-white">
                  {entry.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">{entry.company}</p>
                <ul className="mt-6 space-y-3">
                  {entry.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-ink2-secondary"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <Card hover={false}>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Icon name="presentation" className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Ausbildung</h3>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {education.map((entry) => (
                <div key={entry.degree} className="border-l-2 border-accent/30 pl-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-ink2-tertiary">
                    {entry.period}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-white">{entry.degree}</p>
                  <p className="mt-0.5 text-sm text-ink2-secondary">{entry.school}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
