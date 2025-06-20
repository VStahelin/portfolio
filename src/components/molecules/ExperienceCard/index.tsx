import { ProfessionalExperience } from "../../../interfaces/interfaces";
import React from "react";

interface ExperienceCardProps {
  experience: ProfessionalExperience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
}) => {
  const isOdd = index % 2 !== 0;

  return (
    <div
      className={`relative md:flex ${isOdd ? "md:flex-row-reverse" : ""} items-center w-full animate-fade-in-up`}
    >
      {/* Connector Dot */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-5 h-5 rounded-full bg-primary ring-4 ring-tertiary shadow-lg"></div>
      </div>

      {/* Card Content */}
      <div
        className={`card-gradient-background rounded-2xl p-6 md:p-8 md:w-5/12 shadow-2xl space-y-4 ${
          isOdd ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <img
            src={experience.profile_photo_url}
            alt={`${experience.company} Logo`}
            className="w-20 h-20 object-contain bg-white/10 rounded-full p-2"
          />
          <div>
            <h2 className="text-2xl font-bold text-white">
              {experience.title}
            </h2>
            <p className="text-lg text-blue-200 font-medium">
              {experience.company}
            </p>
            <p className="text-sm text-gray-300">{experience.dates}</p>
          </div>
        </div>

        <div className="text-gray-200 text-base space-y-2 text-center md:text-left">
          {experience.responsibilities.map((responsibility, i) => (
            <p key={i}>- {responsibility}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
          {experience.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-block bg-white/10 text-gray-200 rounded-full px-3 py-1 text-xs font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
