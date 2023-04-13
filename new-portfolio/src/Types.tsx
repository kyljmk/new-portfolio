import { StaticImageData } from "next/image";

export interface ISkill {
  name: string;
  image: StaticImageData;
}

export interface IProjectProps {
  title: string;
  image: StaticImageData;
  projectUrl: string;
  tech: string;
}
