import React, { useState, useEffect } from "react";
import background from "../../../assets/images/waves.png";
import StackCard from "../../molecules/StackCard";
import { AboutMe } from "../../../interfaces/interfaces";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

interface AboutMeSectionProps {
  about_data: AboutMe | null;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ about_data }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      id="about-me-section"
      className="relative min-h-screen bg-gradient-to-br from-tertiary via-tertiary/95 to-quaternary/90 overflow-hidden py-16 px-4"
    >
      {/* Background with animated waves */}
      <div
        className="absolute inset-0 opacity-80 animate-wave"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow">
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
        {/* Header Section */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">
            About Me & Tech Stack
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div
          className={`max-w-7xl mx-auto card-gradient-background rounded-3xl p-6 md:p-8 shadow-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: About Text */}
            <div className="space-y-4 animate-slide-in-left text-center md:text-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {about_data?.name}
                </h2>
                <p className="text-xl md:text-2xl text-blue-200 font-medium">
                  {about_data?.title}
                </p>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-200 leading-relaxed whitespace-pre-line">
                  {about_data?.summary}
                </p>
              </div>
              {/* Contact Info */}
              <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
                <p className="w-full mb-2 text-lg font-semibold text-gray-200 -mt-5">
                  Let's get in touch
                </p>
                {about_data?.contact && (
                  <>
                    <a
                      href={`mailto:${about_data.contact.email}`}
                      className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <FaEnvelope />
                      <span className="text-sm">Email</span>
                    </a>
                    <a
                      href={about_data.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <FaLinkedin />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                      href={about_data.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <FaGithub />
                      <span className="text-sm">GitHub</span>
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Right Column: Tech Stack */}
            <div className="animate-slide-in-right mt-4 sm:mt-0">
              <h3 className="text-xl font-bold text-white mb-4 text-center md:text-left">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-4">
                {about_data?.stack_proficiency.map((stack, index) => (
                  <div
                    key={index}
                    className="transition-all duration-500 hover:scale-105"
                    style={{
                      animation: `fadeInUp 0.5s ease-out forwards`,
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <StackCard
                      icon={stack.name}
                      title={stack.name}
                      experience={`${stack.years} year${
                        stack.years > 1 ? "s" : ""
                      }`}
                      progress={Math.floor(
                        stack.level === "Expert"
                          ? 100
                          : stack.level === "Advanced"
                            ? 75
                            : stack.level === "Intermediate"
                              ? 50
                              : stack.level === "Beginner"
                                ? 25
                                : 0
                      )}
                    />
                  </div>
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
