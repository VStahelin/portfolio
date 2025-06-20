import React from "react";
import { Link } from "react-router-dom";
import { ProjectSectionProps } from "../../../interfaces/interfaces";
import background from "../../../assets/images/background2.png";

interface ProjectsProps {
  projects: ProjectSectionProps[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const sortedProjects = [...projects].sort((a, b) => a.order_id - b.order_id);

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
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 gradient-text leading-loose py-4">
            Highlighted Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.length === 0 && (
            <p className="text-gray-400 col-span-full text-center">
              No projects available.
            </p>
          )}
          {sortedProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden group md:hover:-translate-y-2 transition-transform duration-300 shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden bg-black/20">
                <img
                  src={project.thumbnail}
                  alt={`Thumbnail for ${project.title}`}
                  className="w-full h-full object-contain md:group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center">
                  <Link
                    to={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg font-bold border-2 border-white rounded-full px-6 py-2 hover:bg-white hover:text-black transition-colors"
                  >
                    View Project
                  </Link>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-4 h-24 overflow-hidden">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-white/10 text-gray-200 rounded-full px-3 py-1 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Mobile-only "View Project" button */}
                <div className="mt-4 text-center md:hidden">
                  <Link
                    to={project.project_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white/20 text-white font-semibold text-sm px-5 py-2 rounded-full"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Projects Section */}
        <div className="mt-16 md:mt-20 text-center animate-fade-in-up">
          <div className="inline-block glass rounded-2xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Curious to See More?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-6 text-sm md:text-base">
              I have a dedicated page with a comprehensive list of my work, from
              large-scale applications to small personal experiments.
            </p>
            <Link
              to="/projects"
              className="inline-block bg-gradient-to-r from-primary to-purple-500 text-white font-bold text-base md:text-lg px-6 md:px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Explore All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
