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
            <p className="text-xl text-white">{about_data?.summary}</p>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 text-center pt-12">
              Skills-Sets
            </h1>

            <div className="flex justify-center mb-5">
              <div className="flex flex-wrap justify-center gap-4">
                <StackCard
                  icon="python"
                  title="Python"
                  experience="6 years"
                  progress={90}
                  projectLink="https://github.com/GomuGomuu/merry"
                />
                <StackCard
                  icon="javascript"
                  title="JavaScript"
                  experience="3 years"
                  progress={60}
                  projectLink="https://github.com/VStahelin/portfolio"
                />
                <StackCard
                  icon="api"
                  title="API Rest"
                  experience="4 years"
                  progress={85}
                  projectLink="https://github.com/GomuGomuu/merry"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
