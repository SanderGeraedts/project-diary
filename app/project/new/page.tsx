"use client";

import Wrapper from "@/components/wrapper";
import { createProject } from "@/lib/actions";
import { useFormState } from "react-dom";
import SubmitButton from "@/components/submit-button";

export default function NewProject() {
  const [state, formAction] = useFormState(createProject, { message: "" });

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
        <SubmitButton>Add Project</SubmitButton>
      </form>
    </Wrapper>
  );
}
