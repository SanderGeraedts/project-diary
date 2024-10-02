import { Project } from "@/types/project";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getProjectImage = (project: Project): string => {
  const image = project.entries?.find((entry) => entry.image)?.image;
  return image ?? "https://via.placeholder.com/300";
};

// Function to retrieve all projects from the database
export const getProjects = async (): Promise<Project[]> => {
  const projects = await prisma.project.findMany();

  return projects;
};

export const getProject = async (
  slug: string
): Promise<Project | undefined> => {
  const project = await prisma.project.findUnique({
    where: {
      slug: slug,
    },
  });

  return project ? (project as Project) : undefined;
};
