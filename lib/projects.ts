import { Project } from "@/types/project";
import { projects } from "@/lib/data";

export const getProjectImage = (project: Project) => {
  let image = project.entries.find((entry) => entry.image)?.image;

  if (!image) {
    image = "https://via.placeholder.com/300";
  }

  return image;
};

export const getProjects = () => {
  return projects;
};

export const getProject = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};
