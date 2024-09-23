import Wrapper from "@/components/wrapper";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Wrapper>
        <div className="my-4">
          <h1>Project Detail Page</h1>
          <p>Slug: {params.slug}</p>
        </div>
      </Wrapper>
    </main>
  );
}
