import { competencies } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

export function Competencies() {
  return (
    <section id="competencies" className="section-padding relative">
      <div className="container-page">
        <SectionHeading
          eyebrow="Kompetenzen"
          title="Ein Werkzeugkasten, der Strategie und Gestaltung verbindet."
          description="Von der Kampagnenidee bis zum fertigen Design: Jede dieser Kompetenzen steckt in echten Projekten, die ich umgesetzt habe."
        />

        <Reveal
          stagger
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {competencies.map((competency) => (
            <RevealItem key={competency.title} className="h-full">
              <Card className="group h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 ease-expo group-hover:scale-110">
                  <Icon name={competency.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-base font-semibold text-white">
                  {competency.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink2-secondary">
                  {competency.description}
                </p>
              </Card>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
