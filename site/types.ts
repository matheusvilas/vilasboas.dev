export interface IProjectItem {
  id: string;
  title: string;
  slug: string;
  image: {
    thumb: string;
    banner: string;
  };
  description: string;
  stack: string[];
  link: string;
}

export interface IProjectModal {
  isShowing: boolean;
  title: string;
  img: string;
  description: string;
  stack: string[];
  link: string;
}
