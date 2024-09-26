"use client";

import Wrapper from "@/components/wrapper";
import { createProject } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";

export default function NewProject() {
  const [state, formAction] = useFormState(createProject, { message: "" });
  const { pending } = useFormStatus();

  return (
    <Wrapper>
      <h1>New Project</h1>
      <form action={formAction}>
        <div>
          <label htmlFor="name">Project Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        {state.message && (
          <div className="bg-red-400 rounded p-3">{state.message}</div>
        )}
        <button>{pending ? "Submitting..." : "Add Project"}</button>
      </form>
    </Wrapper>
  );
}
