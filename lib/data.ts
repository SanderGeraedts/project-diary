import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    name: "Project 1",
    slug: "project-1",
    entries: [
      {
        id: "1",
        date: "2024-09-01",
        text: "This is the first entry",
        image: "https://picsum.photos/300",
        status: "active",
      },
      {
        id: "2",
        date: "2024-09-02",
        text: "This is the second entry",
        status: "active",
      },
    ],
  },
  {
    id: "2",
    name: "Project 2",
    slug: "project-2",
    entries: [
      {
        id: "1",
        date: "2021-09-01",
        text: "This is the first entry",
        status: "active",
      },
      {
        id: "2",
        date: "2021-09-02",
        text: "This is the second entry",
        image: "https://picsum.photos/301",
        status: "active",
      },
    ],
  },
  {
    id: "3",
    name: "Project 3",
    slug: "project-3",
    entries: [
      {
        id: "1",
        date: "2022-09-01",
        text: "This is the first entry",
        status: "active",
      },
      {
        id: "2",
        date: "2022-09-02",
        text: "This is the second entry",
        status: "active",
      },
    ],
  },
  {
    id: "4",
    name: "Project 4",
    slug: "project-4",
    entries: [
      {
        id: "1",
        date: "2023-09-01",
        text: "This is the first entry",
        status: "active",
      },
      {
        id: "2",
        date: "2023-09-02",
        text: "This is the second entry",
        image: "https://picsum.photos/299",
        status: "active",
      },
    ],
  },
];
