"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import slugify from "slugify";

const prisma = new PrismaClient();

export const createProject = async (
  prevState: { message?: string },
  formData: FormData
) => {
  const name = formData.get("name") as string | undefined;

  if (!name) {
    return {
      message: "Provide a name for the project",
    };
  }

  const slug = slugify(name.toLowerCase());

  // TODO: Check for unique values

  const project = await prisma.project.create({
    data: {
      name,
      slug,
    },
  });

  revalidatePath("/");
  redirect(`/project/${project.slug}`);
};
