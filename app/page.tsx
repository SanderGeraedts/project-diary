import ProjectGrid from "@/components/project-grid";
import Wrapper from "@/components/wrapper";
import { getProjects } from "@/lib/projects";

export default function Home() {
  const projects = getProjects();

  return (
    <main>
      <Wrapper>
        <ProjectGrid projects={projects} />
      </Wrapper>
    </main>
  );
}
