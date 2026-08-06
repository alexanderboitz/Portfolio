import type { Project } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { RevealItem } from "@/components/ui/Reveal";

const FACTS: { key: "challenge" | "solution" | "result"; label: string }[] = [
  { key: "challenge", label: "Herausforderung" },
  { key: "solution", label: "Lösung" },
  { key: "result", label: "Ergebnis" },
];

export function ProjectIntro({ project }: { project: Project }) {
  return (
    <div>
      <RevealItem>
        <div className="flex flex-wrap items-center gap-3 text-xs text-ink2-tertiary">
          <span className="font-semibold uppercase tracking-[0.2em] text-accent">
            {project.role}
          </span>
          <span aria-hidden>·</span>
          <span>{project.company}</span>
          <span aria-hidden>·</span>
          <span>{project.period}</span>
        </div>
      </RevealItem>

      <RevealItem>
        <h3 className="mt-4 text-balance text-[clamp(1.5rem,2.6vw,2.25rem)] font-bold leading-tight text-white">
          {project.title}
        </h3>
      </RevealItem>

      <RevealItem>
        <p className="mt-4 text-balance leading-relaxed text-ink2-secondary">
          {project.summary}
        </p>
      </RevealItem>

      <RevealItem>
        <dl className="mt-8 space-y-5 border-t border-surface-border pt-8">
          {FACTS.map(({ key, label }) => (
            <div key={key}>
              <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-ink2-tertiary">
                {label}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-ink2-secondary">
                {project[key]}
              </dd>
            </div>
          ))}
        </dl>
      </RevealItem>

      <RevealItem>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </RevealItem>

      {project.link && (
        <RevealItem>
          <a
            href={project.link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-white"
          >
            {project.link.label}
            <Icon name="externalLink" className="h-4 w-4" />
          </a>
        </RevealItem>
      )}
    </div>
  );
}
