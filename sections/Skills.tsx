import { toolSkills, languages, drivingLicense } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { SkillBar } from "@/components/ui/SkillBar";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-page">
        <SectionHeading eyebrow="Kenntnisse" title="Werkzeuge, mit denen ich täglich arbeite." />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Card hover={false} className="p-8 md:p-10">
              <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                {toolSkills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6 lg:col-span-5">
            <Card hover={false}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon name="content" className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">Sprachen</h3>
              </div>
              <ul className="mt-6 space-y-4">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex items-baseline justify-between">
                    <span className="text-sm font-semibold text-white">{lang.name}</span>
                    <span className="text-xs text-ink2-tertiary">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card hover={false}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon name="event" className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">Sonstiges</h3>
              </div>
              <div className="mt-6">
                <Badge>{drivingLicense}</Badge>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
