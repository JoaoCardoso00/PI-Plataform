export interface Project {
  _id: string;
  image: string;
  title: string;
  description: string;
  participants: string;
  github: string;
  video: string;
}

export interface Periods {
  _id: string;
  title: string;
  description: string;
  projects: Array<Project>;
}