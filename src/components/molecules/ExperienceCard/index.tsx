import { ProfessionalExperience } from "../../../interfaces/interfaces";
import React, { useContext } from "react";
import "./styles.css";
import { ScreenSizeContext } from "../../../context/Mobile";

interface ExperienceCardProps {
  experience: ProfessionalExperience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const screen = useContext(ScreenSizeContext);

  const mobileView = (
    <div className="card-gradient p-6 flex flex-col space-y-4 w-full max-w-4xl rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-white text-center">
        {experience.title}
      </h1>

      <div className="flex items-center space-x-4">
        <img
          src={experience.profile_photo_url}
          alt="Company Logo"
          className="w-16 h-16 object-contain"
        />
        <div className="flex flex-col text-left">
          <p className="text-lg text-gray-200">@{experience.company}</p>
          <p className="text-gray-300">{experience.dates}</p>
        </div>
      </div>

      <div className="mt-4 text-gray-100 text-left">
        {experience.responsibilities.map((responsibility, index) => (
          <p key={index}>{responsibility}</p>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap justify-center space-x-2">
        {experience.tags.map((keyword, index) => (
          <span
            key={index}
            className="bg-secondary-dark text-white px-3 py-1 mt-1 rounded-full text-sm"
          >
            {keyword}
          </span>
        ))}
      </div>

      {/* SVG Arrow for Desktop Only */}
      <div className="hidden md:flex flex-col items-center">
        <div className="relative w-full">
          <div className="absolute top-3 bottom-8 w-1 bg-white"></div>
          <svg
            className="w-8 h-8 text-white absolute top-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );

  const desktopView = (
    <div className="card-gradient p-6 flex flex-col space-y-4 w-full max-w-4xl rounded-lg shadow-md">
      <div className="flex">
        <div className="w-2/10 flex flex-col items-center relative">
          <img
            src={experience.profile_photo_url}
            alt="Company Logo"
            className="w-48 object-contain"
          />

          <div className="flex-grow flex justify-center relative w-full mt-2">
            <div className="absolute top-3 bottom-8 w-1 bg-white"></div>

            <svg
              className="w-8 h-8 text-white absolute top-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              ></path>
            </svg>
          </div>
        </div>

        <div className="w-8/10 pl-6">
          <h2 className="text-2xl font-bold text-white text-left">
            {experience.title}
          </h2>
          <p className="text-lg text-gray-200 text-left">
            @{experience.company} - {experience.location}
          </p>
          <p className="text-gray-300 text-left">{experience.dates}</p>

          <div className="mt-4 text-gray-100 text-left">
            {experience.responsibilities.map((responsibility, index) => (
              <p key={index}>{responsibility}</p>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap justify-center space-x-2">
            {experience.tags.map((keyword, index) => (
              <span
                key={index}
                className="bg-secondary-dark
                 text-white px-3 py-1 mt-1 rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center">
      {screen.isMobile ? mobileView : desktopView}
    </div>
  );
};

export default ExperienceCard;
