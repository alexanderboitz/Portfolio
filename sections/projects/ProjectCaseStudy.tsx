import type { GalleryProject, VideoProject } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { LiteYouTube } from "@/components/ui/LiteYouTube";
import { ProjectIntro } from "./ProjectIntro";
import { ProjectGallery } from "./ProjectGallery";

interface ProjectCaseStudyProps {
  project: GalleryProject | VideoProject;
  reversed?: boolean;
}

export function ProjectCaseStudy({ project, reversed = false }: ProjectCaseStudyProps) {
  return (
    <div id={`project-${project.id}`} className="relative py-20 first:pt-0 last:pb-0">
      <span
        aria-hidden
        className={`num-watermark pointer-events-none absolute -top-10 select-none text-[9rem] leading-none md:text-[13rem] ${
          reversed ? "right-0" : "left-0"
        }`}
      >
        {project.number}
      </span>

      <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal
          stagger
          className={`lg:col-span-5 ${reversed ? "lg:order-2 lg:col-start-8" : ""}`}
        >
          <ProjectIntro project={project} />
        </Reveal>

        <Reveal
          stagger
          className={`lg:col-span-6 ${reversed ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}
        >
          {project.media === "gallery" ? (
            <ProjectGallery images={project.gallery} />
          ) : (
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-surface-border">
              <LiteYouTube
                youtubeId={project.youtubeId}
                title={project.videoTitle}
                className="absolute inset-0"
              />
            </div>
          )}
        </Reveal>
      </div>
    </div>
  );
}
