import React from "react";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";
import * as Fa6Icons from "react-icons/fa6";
import * as TbIcons from "react-icons/tb";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";

export enum IconLibraryList {
  FontAwesome = "fa",
  GiIcons = "gi",
  SiIcons = "si",
  DiIcons = "di",
  Fa6Icons = "fa6",
  TbIcons = "tb",
  AiIcons = "ai",
  GrIcons = "gr",
  BiIcons = "bi",
  RiIcons = "ri",
}

interface IconProps {
  iconName: string;
  library?: string;
  size?: string | number;
  gradientColors?: [string, string];
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const GradientDefs: React.FC<{ colors?: [string, string] }> = ({ colors }) => {
  if (!colors) return null;

  return (
    <svg width="0" height="0">
      <linearGradient id="custom-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop stopColor={colors[0]} offset="30%" />
        <stop stopColor={colors[1]} offset="100%" />
      </linearGradient>
    </svg>
  );
};

const Icon: React.FC<IconProps> = ({
  iconName,
  library = IconLibraryList.FontAwesome,
  size = 24,
  gradientColors,
  color = "black",
  className,
  style,
}) => {
  let IconComponent: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }> | null = null;

  switch (library) {
    case "fa":
      IconComponent =
        FaIcons[`Fa${capitalize(iconName)}` as keyof typeof FaIcons] || null;
      break;
    case "gi":
      IconComponent =
        GiIcons[`Gi${capitalize(iconName)}` as keyof typeof GiIcons] ||
        GiIcons.GiHelp;
      break;
    case "si":
      IconComponent =
        SiIcons[`Si${capitalize(iconName)}` as keyof typeof SiIcons] ||
        GiIcons.GiHelp;
      break;
    case "di":
      IconComponent =
        DiIcons[`Di${capitalize(iconName)}` as keyof typeof DiIcons] ||
        GiIcons.GiHelp;
      break;
    case "fa6":
      IconComponent =
        Fa6Icons[`Fa${capitalize(iconName)}` as keyof typeof Fa6Icons] ||
        GiIcons.GiHelp;
      break;
    case "tb":
      IconComponent =
        TbIcons[`Tb${capitalize(iconName)}` as keyof typeof TbIcons] ||
        GiIcons.GiHelp;
      break;
    case "ai":
      IconComponent =
        AiIcons[`Ai${capitalize(iconName)}` as keyof typeof AiIcons] ||
        GiIcons.GiHelp;
      break;
    case "gr":
      IconComponent =
        GrIcons[`Gr${capitalize(iconName)}` as keyof typeof GrIcons] ||
        GiIcons.GiHelp;
      break;
    case "bi":
      IconComponent =
        BiIcons[`Bi${capitalize(iconName)}` as keyof typeof BiIcons] ||
        GiIcons.GiHelp;
      break;
    case "ri":
      IconComponent =
        RiIcons[`Ri${capitalize(iconName)}` as keyof typeof RiIcons] ||
        GiIcons.GiHelp;
      break;
    default:
      IconComponent = null;
  }

  if (!IconComponent) {
    return (
      <div
        style={{
          fontSize: size,
          color,
          display: "inline-block",
          verticalAlign: "middle",
          ...style,
        }}
        className={className}
      >
        {iconName}
      </div>
    );
  }

  return (
    <>
      <GradientDefs colors={gradientColors} />{" "}
      <div
        className={className}
        style={{
          fontSize: size,
          ...style,
        }}
      >
        <IconComponent
          style={{
            fill: gradientColors ? "url(#custom-gradient)" : color,
            stroke: gradientColors ? "url(#custom-gradient)" : color,
            strokeWidth: gradientColors ? 0 : undefined,
          }}
        />
      </div>
    </>
  );
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default Icon;
