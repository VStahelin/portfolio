import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faPython,
  faJs,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

const iconMap: { [key: string]: IconDefinition } = {
  react: faReact,
  node: faNodeJs,
  python: faPython,
  javascript: faJs,
  api: faDiagramProject,
};

export const getIconComponent = (iconName: string) => {
  return iconMap[iconName.toLowerCase()] || null;
};
