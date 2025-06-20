import React, { useState, useEffect } from "react";
import background from "../../../assets/images/waves.png";
import StackCard from "../../molecules/StackCard";
import { AboutMe } from "../../../interfaces/interfaces";

interface AboutMeSectionProps {
  about_data: AboutMe | null;
}

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ about_data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"about" | "skills">("about");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-tertiary via-tertiary/95 to-quaternary/90 overflow-hidden py-16 px-4">
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
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 gradient-text">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-full p-1 flex gap-1">
            <button
              onClick={() => setActiveTab("about")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                activeTab === "about"
                  ? "bg-white text-tertiary shadow-lg"
                  : "text-white hover:bg-white/20"
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                activeTab === "skills"
                  ? "bg-white text-tertiary shadow-lg"
                  : "text-white hover:bg-white/20"
              }`}
            >
              Technologies
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "about" && (
            <div
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="card-gradient-background rounded-3xl p-6 md:p-8 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* Profile Photo */}
                  <div className="flex justify-center animate-slide-in-left">
                    <div className="relative">
                      <div className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-white/20 shadow-2xl hover:scale-105 transition-transform duration-300">
                        <img
                          src={about_data?.profile_photo_url}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <span className="text-white font-bold text-lg md:text-xl">
                          👨‍💻
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* About Text */}
                  <div className="space-y-3 animate-slide-in-right text-center md:text-left">
                    <div>
                      <h2 className="text-2xl md:text-2xl font-bold text-white mb-1">
                        {about_data?.name}
                      </h2>
                      <p className="text-lg md:text-lg text-blue-200 font-medium">
                        {about_data?.title}
                      </p>
                    </div>

                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-200 leading-relaxed text-sm whitespace-pre-line">
                        {about_data?.summary}
                      </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-3 pt-3">
                      {about_data?.contact && (
                        <>
                          <a
                            href={`mailto:${about_data.contact.email}`}
                            className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                          >
                            <span>📧</span>
                            <span className="text-xs">Email</span>
                          </a>
                          <a
                            href={about_data.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                          >
                            <span>💼</span>
                            <span className="text-xs">LinkedIn</span>
                          </a>
                          <a
                            href={about_data.contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                          >
                            <span>🐙</span>
                            <span className="text-xs">GitHub</span>
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="text-center mb-6 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 gradient-text">
                  Tech Stack
                </h2>
                <p className="text-base text-gray-300 max-w-2xl mx-auto">
                  Technologies and tools I use to create innovative solutions
                </p>
              </div>

              <div className="card-gradient-background rounded-3xl p-6 shadow-2xl">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {about_data?.stack_proficiency.map((stack, index) => (
                    <div
                      key={index}
                      className="transition-all duration-500 hover:scale-105 animate-fade-in-up"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <StackCard
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
                                  : 0
                        )}
                        projectLink={"https://github.com/Vstahelin"}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
