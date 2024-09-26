import { Project } from "@/types/project";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getProjectImage = (project: Project) => {
  let image = project.entries?.find((entry) => entry.image)?.image;

  if (!image) {
    image = "https://via.placeholder.com/300";
  }

  return image;
};

export const getProjects = async () => {
  const projects = (await prisma.project.findMany()) as Project[];

  return projects;
};

export const getProject = async (slug: string) => {
  const project = await prisma.project.findUnique({
    where: {
      slug: slug,
    },
  });

  return project ? (project as Project) : undefined;
};
