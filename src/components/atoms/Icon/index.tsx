/* eslint-disable no-unused-vars */
import React, { Suspense, lazy } from "react";

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
  library?: IconLibraryList;
  size?: string | number;
  gradientColors?: [string, string];
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const loadIcon = (
  library: IconLibraryList,
  iconName: string
): React.LazyExoticComponent<React.ComponentType<any>> | null => {
  switch (library) {
    case IconLibraryList.FontAwesome:
      return lazy(() =>
        import("react-icons/fa").then((module) => ({
          default: (module as any)[`Fa${capitalize(iconName)}`],
        }))
      );
    case IconLibraryList.GiIcons:
      return lazy(() =>
        import("react-icons/gi").then((module) => ({
          default: (module as any)[`Gi${capitalize(iconName)}`],
        }))
      );
    case IconLibraryList.SiIcons:
      return lazy(() =>
        import("react-icons/si").then((module) => ({
          default: (module as any)[`Si${capitalize(iconName)}`],
        }))
      );
    case IconLibraryList.DiIcons:
      return lazy(() =>
        import("react-icons/di").then((module) => ({
          default: (module as Record<string, any>)[`Di${capitalize(iconName)}`],
        }))
      );
    case IconLibraryList.Fa6Icons:
      return lazy(() =>
        import("react-icons/fa6").then((module) => ({
          default: (module as Record<string, any>)[`Fa${capitalize(iconName)}`],
        }))
      );
    case IconLibraryList.TbIcons:
      return lazy(() =>
        import("react-icons/tb").then((module) => ({
          default: (module as Record<string, any>)[`Tb${capitalize(iconName)}`],
        }))
      );
    case IconLibraryList.AiIcons:
      return lazy(() =>
        import("react-icons/ai").then((module) => ({
          default: (module as Record<string, any>)[`Ai${capitalize(iconName)}`],
        }))
      );
    case IconLibraryList.GrIcons:
      return lazy(() =>
        import("react-icons/gr").then((module) => ({
          default: (module as Record<string, any>)[`Gr${capitalize(iconName)}`],
        }))
      );
    case IconLibraryList.BiIcons:
      return lazy(() =>
        import("react-icons/bi").then((module) => ({
          default: (module as Record<string, any>)[`Bi${capitalize(iconName)}`],
        }))
      );
    case IconLibraryList.RiIcons:
      return lazy(() =>
        import("react-icons/ri").then((module) => ({
          default: (module as Record<string, any>)[`Ri${capitalize(iconName)}`],
        }))
      );
    default:
      return null;
  }
};

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
  const IconComponent = loadIcon(library, iconName);

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
    <Suspense fallback={<div>Loading...</div>}>
      <GradientDefs colors={gradientColors} />
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
    </Suspense>
  );
};

const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default Icon;
