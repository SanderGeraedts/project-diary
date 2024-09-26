export interface ProjectInput {
  name: string;
}

export interface Project extends ProjectInput {
  id: string;
  slug: string;
  entries?: Entry[];
}

export interface EntryInput {
  createdAt: Date;
  text?: string;
  image?: string;
  status?: string;
}

export interface Entry extends EntryInput {
  id: string;
}
