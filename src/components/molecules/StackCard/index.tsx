import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIconComponent } from "@utils/iconMap";

interface StackCardProps {
  icon: string;
  title: string;
  experience: string;
  progress: number;
  projectLink: string;
}

const StackCard: React.FC<StackCardProps> = ({
  icon,
  title,
  experience,
  progress,
  projectLink,
}) => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const IconComponent = getIconComponent(icon);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative w-64  bg-white shadow-lg rounded-lg overflow-hidden flex flex-col ${isMobile ? "h-72 items-center justify-start" : "h-64 items-center justify-center"}`}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
    >
      {isMobile ? (
        <>
          <div className="text-gray-800 -mb-5" style={{ fontSize: "6em" }}>
            {IconComponent ? <FontAwesomeIcon icon={IconComponent} /> : null}
          </div>

          <p className="mt-4 text-xl font-semibold text-gray-800">{title}</p>

          <div className="absolute inset-x-0 bottom-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center pb-2">
            <h2 className="text-white text-lg mb-2 mt-2">{experience}</h2>

            <div className="w-48 h-4 bg-gray-300 rounded-full overflow-hidden mb-4">
              <div
                className="bg-blue-500 h-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <button
              className="text-white"
              onClick={() => window.open(projectLink, "_blank")}
            >
              &gt; See related projects &lt;
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="text-gray-800" style={{ fontSize: "7em" }}>
            {IconComponent ? <FontAwesomeIcon icon={IconComponent} /> : null}
          </div>

          <p className="mt-4 text-xl font-semibold text-gray-800">{title}</p>

          <div
            className={`absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-white text-lg text-bold mb-2">{experience}</h2>

            <div className="w-48 h-4 bg-gray-300 rounded-full overflow-hidden mb-4">
              <div
                className="bg-blue-500 h-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <button
              className="text-white hover:text-blue-400 transition duration-300"
              onClick={() => window.open(projectLink, "_blank")}
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
