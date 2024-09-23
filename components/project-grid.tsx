import ProjectSummary from "@/components/project-summary";
import { Project } from "@/types/project";

export default function ProjectGrid({
  projects,
}: Readonly<{
  projects: Project[];
}>) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectSummary key={project.id} project={project} />
      ))}
    </div>
  );
}
