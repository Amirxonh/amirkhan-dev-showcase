import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Food Website",
    description: "A modern food website with responsive layout and clean UI.",
    live: "https://food-website-nine-delta.vercel.app",
    source: "https://github.com/Amirxonh/food-website",
  },
  {
    title: "Medical Assistance Website",
    description: "A web platform designed to provide medical assistance information.",
    live: "https://medical-assistance-ten.vercel.app",
    source: "https://github.com/Amirxonh/medical-assistance",
  },
];

const Projects = () => (
  <AnimatedSection className="py-24 px-6 bg-card">
    <div className="max-w-3xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold tracking-tight text-foreground">Projects</h2>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-xl bg-background border border-border p-8 flex flex-col hover:-translate-y-1 transition-transform duration-200"
          >
            <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground flex-1">{p.description}</p>
            <div className="mt-6 flex gap-3">
              <Button asChild size="sm">
                <a href={p.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} className="mr-1.5" /> Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={p.source} target="_blank" rel="noopener noreferrer">
                  <Github size={14} className="mr-1.5" /> Source Code
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Projects;
