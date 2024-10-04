import { AboutMe } from "@interfaces/interfaces";
import React from "react";

interface AboutMeSectionProps {
  about_data: AboutMe | null;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ about_data }) => {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-50">
      <div className="max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-xl text-gray-700">{about_data?.summary}</p>
      </div>
    </div>
  );
};

export default AboutMeSection;
