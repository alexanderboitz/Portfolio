import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Competencies } from "@/sections/Competencies";
import { ProjectsSection } from "@/sections/projects/ProjectsSection";
import { Experience } from "@/sections/Experience";
import { Skills } from "@/sections/Skills";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Competencies />
      <ProjectsSection />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
