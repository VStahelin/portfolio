import React, { useState, useEffect } from "react";
import Icon from "@components/atoms/Icon";
import { getIconMapping } from "@utils/iconMap";
import ProgressBar from "@components/atoms/ProgressBar";

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const { iconName, library } = getIconMapping(icon);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative bg-white shadow-lg rounded-lg overflow-hidden flex flex-col ${isMobile ? "w-40 h-40 items-center justify-start" : "w-64 h-64 items-center justify-center"}`}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
    >
      {isMobile ? (
        <a href={projectLink ?? undefined} className="block">
          <div className="text-gray-800 -mb-5 mt-2">
            <Icon
              iconName={iconName}
              library={library}
              size={"6em"}
              color="gray"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center pb-2">
            <h2 className="text-white text-lg mt-2">{experience}</h2>
          </div>
        </a>
      ) : (
        <>
          <div className="text-gray-800" style={{ fontSize: "7em" }}>
            <Icon
              iconName={iconName}
              library={library}
              size={60}
              color="gray"
            />
          </div>

          <p className="mt-4 text-xl font-semibold text-gray-800">{title}</p>

          <div
            className={`absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-white text-lg text-bold mb-2">{experience}</h2>

            <div className="h-4 w-32">
              <text className="text-white">Experience</text>
              <ProgressBar
                progress={progress}
                width="100%"
                height="1rem"
                bgColor="bg-gray-300"
                progressColor="bg-blue-500"
                className="shadow-lg border-2"
              />
            </div>

            <button
              className="text-white hover:text-blue-400 transition duration-300 mt-7"
              onClick={() => projectLink && window.open(projectLink, "_blank")}
            >
              See related projects
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default StackCard;
