import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCaseStudy } from "./ProjectCaseStudy";
import { BrandingCaseStudy } from "./BrandingCaseStudy";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Projekte"
          title="Vier Stationen, ein roter Faden: Aufmerksamkeit gestalten."
          description="Eine Auswahl an Kampagnen, Content-Produktionen und Markenauftritten aus vier Jahren Marketing und Design."
        />

        <div className="mt-20 divide-y divide-surface-border">
          {projects.map((project) =>
            project.media === "branding" ? (
              <BrandingCaseStudy key={project.id} project={project} />
            ) : (
              <ProjectCaseStudy
                key={project.id}
                project={project}
                reversed={project.number === "02"}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
