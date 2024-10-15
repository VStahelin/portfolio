import { ProfessionalExperience } from "@interfaces/interfaces";
import ExperienceCard from "@molecules/ExperienceCard";
import background from "@assets/images/waves_long.png";
import React from "react";

interface ExperienceListProps {
  experiences: ProfessionalExperience[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
  return (
    <div className="relative flex min-h-screen justify-center items-center bg-tertiary">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px) brightness(0.7)",
        }}
      />
      <div className="relative mt-16 max-w-7xl px-8">
        <h1 className="text-5xl font-bold text-white mb-4 text-center pb-8">
          Work Experience
        </h1>
        <div className="space-y-6 mb-10">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
