import { ProfessionalExperience } from "../../../interfaces/interfaces";
import ExperienceCard from "../../molecules/ExperienceCard";
import background from "../../../assets/images/waves_long.png";
import React from "react";

interface ExperienceListProps {
  experiences: ProfessionalExperience[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-tertiary via-quaternary/90 to-tertiary overflow-hidden py-16 px-4">
      {/* Background with animated waves and particles */}
      <div
        className="absolute inset-0 opacity-20 animate-wave"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 gradient-text">
            Work Experience
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 -ml-0.5 w-1 h-full bg-white/20"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
