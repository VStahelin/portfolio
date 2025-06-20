import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { AboutMe } from "../../../interfaces/interfaces";
import background from "../../../assets/images/background.png";

interface HeroProps {
  about_data: AboutMe | null;
}

const Hero: React.FC<HeroProps> = ({ about_data }) => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-tertiary/60" />

      <div className="relative z-10 container mx-auto px-4 text-white pt-24 md:pt-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column (Mobile) */}
          <div className="md:hidden flex justify-center animate-fade-in-up -mb-10">
            <div className="relative w-48">
              <div className="absolute inset-0 card-gradient-background blur-xl" />
              <img
                src={about_data?.profile_photo_url}
                alt="Profile"
                className="relative w-full h-full object-cover shadow-2xl rounded-2xl"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="text-center md:text-left animate-fade-in-up p-7">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block mb-2">Hi, I'm</span>
              <span className="gradient-text">{about_data?.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-blue-200 mt-4">
              {about_data?.title}
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
              {about_data?.short_summary}
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              <a
                href={about_data?.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href={about_data?.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={32} />
              </a>
              <a
                href={`mailto:${about_data?.contact.email}`}
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={32} />
              </a>
            </div>
          </div>

          {/* Image Column (Desktop) */}
          <div className="hidden md:flex justify-center animate-fade-in-up animation-delay-300">
            <div className="relative w-96">
              <div className="absolute inset-0 card-gradient-background blur-2xl opacity-50" />
              <img
                src={about_data?.profile_photo_url}
                alt="Profile"
                className="relative w-full h-full object-cover shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
