export interface ProjectInput {
  name: string;
}

export interface Project extends ProjectInput {
  id: string;
  slug: string;
  entries: Entry[];
}

export interface EntryInput {
  date: string;
  text?: string;
  image?: string;
  status?: string;
}

export interface Entry extends EntryInput {
  id: string;
}
