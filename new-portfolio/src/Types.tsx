import { StaticImageData } from "next/image";

export interface ISkill {
  name: string;
  image: string;
}

export interface IProjectProps {
  title: string;
  image: StaticImageData;
  projectUrl: string;
}
