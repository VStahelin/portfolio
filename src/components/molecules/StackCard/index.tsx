import React, { useState, useContext } from "react";
import Icon from "../../atoms/Icon";
import { getIconMapping } from "../../../utils/iconMap";
import ProgressBar from "../../atoms/ProgressBar";
import { ScreenSizeContext } from "../../../context/Mobile";

interface StackCardProps {
  icon: string;
  title: string;
  experience: string;
  progress: number;
  projectLink: string | null;
}

const StackCard: React.FC<StackCardProps> = ({
  icon,
  title,
  experience,
  progress,
  projectLink = null,
}) => {
  const [hovered, setHovered] = useState(false);
  const { iconName, library } = getIconMapping(icon);
  const screen = useContext(ScreenSizeContext);

  return (
    <>
      {screen.isMobile ? (
        <div className="flex flex-col items-center justify-center p-4 card-gradient-background rounded-lg text-center h-36">
          <div className="mb-2">
            <Icon
              iconName={iconName}
              library={library}
              size={"3em"}
              gradientColors={["#FF4C58", "#6572CC"]}
            />
          </div>
          <h3 className="text-white font-semibold text-base">{title}</h3>
          <p className="text-gray-300 text-sm">{experience}</p>
        </div>
      ) : (
        <div
          className="relative bg-quaternary shadow-lg rounded-lg overflow-hidden flex flex-col w-48 h-48 items-center justify-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div>
            <Icon
              iconName={iconName}
              library={library}
              size={"5em"}
              gradientColors={["#FF4C58", "#6572CC"]}
            />
          </div>

          <p className="mt-3 text-lg font-semibold text-white">{title}</p>

          <div
            className={`absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-white text-base text-bold mb-2">
              {experience}
            </h2>

            <div className="h-4 w-28">
              <div className="text-white text-sm">Experience</div>
              <ProgressBar
                progress={progress}
                width="100%"
                height="1rem"
                bgColor="bg-gray-300"
                progressColor="bg-primary"
                className="shadow-lg"
              />
            </div>

            <button
              className="text-white hover:text-blue-400 transition duration-300 mt-5 text-sm"
              onClick={() => projectLink && window.open(projectLink, "_blank")}
            >
              See related projects
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StackCard;
