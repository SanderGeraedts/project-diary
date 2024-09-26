import ProjectGrid from "@/components/project-grid";
import Wrapper from "@/components/wrapper";
import { getProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <Wrapper>
        <ProjectGrid projects={projects} />
      </Wrapper>
    </main>
  );
}
