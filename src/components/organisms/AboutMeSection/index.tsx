import { AboutMe } from "@interfaces/interfaces";
import React from "react";
import background from "@assets/images/waves.png";
import StackCard from "@molecules/StackCard";

interface AboutMeSectionProps {
  about_data: AboutMe | null;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ about_data }) => {
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

      <div className="relative max-w-7xl px-8">
        <div className="relative">
          <div className="mt-4">
            <h2 className="text-4xl font-bold text-white mb-4 text-left pb-8">
              About Me
            </h2>
            <div
              className="text-xl text-white max-w-5xl mx-auto"
              style={{ whiteSpace: "pre-line" }}
            >
              {about_data?.summary}
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 text-center pt-12">
              Skills-Sets
            </h1>
            <div className="flex justify-center mb-5">
              <div className="flex flex-wrap justify-center gap-4">
                {about_data?.stack_proficiency.map((stack, index) => (
                  <StackCard
                    key={index}
                    icon={stack.name}
                    title={stack.name}
                    experience={`${stack.years} year${stack.years > 1 ? "s" : ""}`}
                    progress={Math.floor(
                      stack.level === "Expert"
                        ? 100
                        : stack.level === "Advanced"
                          ? 75
                          : stack.level === "Intermediate"
                            ? 50
                            : stack.level === "Beginner"
                              ? 25
                              : 0,
                    )}
                    projectLink={"https://github.com/Vstahelin"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
