import { getProjectImage } from "@/lib/projects";
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

export default function ProjectSummary({
  project,
}: Readonly<{
  project: Project;
}>) {
  const image = getProjectImage(project);

  return (
    <Link
      href={`project/${project.slug}`}
      className="p-4 bg-white rounded-lg shadow-md"
    >
      <Image src={image} alt={project.name} width={300} height={300} />
      <h2 className="text-xl font-semibold">{project.name}</h2>
    </Link>
  );
}
