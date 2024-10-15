import React, { useState } from "react";
import { Link } from "react-router-dom";
import background from "@assets/images/background2.svg";
import { ProjectSectionProps } from "@interfaces/interfaces";

interface ProjectsProps {
  projects: ProjectSectionProps[];
  tags: string[];
}

const Projects: React.FC<ProjectsProps> = ({ projects, tags }) => {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [showMoreTags, setShowMoreTags] = useState<boolean>(false);

  const sortedProjects = [...projects].sort((a, b) => a.order_id - b.order_id);

  const filteredProjects =
    selectedTag === "All"
      ? sortedProjects
      : sortedProjects.filter((project) => project.tags.includes(selectedTag));

  const uniqueTags = Array.from(new Set(tags));

  const visibleTags = uniqueTags.slice(0, 8);
  const hiddenTags = uniqueTags.slice(8);

  return (
    <div
      className="container mx-auto py-8 px-4 min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100%",
        minHeight: "100vh",
        height: "auto",
      }}
    >
      <div className="flex flex-col items-center mb-5">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-white">
          Projects
        </h1>
        <p className="text-lg text-center mb-8 text-gray-200">
          Explore a variety of projects showcasing different technologies and
          skills. Use the tags below to filter projects based on your interests.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedTag("All")}
          className={`px-4 py-2 rounded-full ${
            selectedTag === "All"
              ? "bg-tertiary text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-secondary hover:text-white transition`}
        >
          All
        </button>
        {visibleTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full ${
              selectedTag === tag
                ? "bg-tertiary text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-secondary hover:text-white transition`}
          >
            {tag}
          </button>
        ))}
        {hiddenTags.length > 0 && (
          <button
            onClick={() => setShowMoreTags(!showMoreTags)}
            className="px-4 py-2 rounded-full bg-primary-light text-tertiary-dark hover:bg-secondary hover:text-white transition"
          >
            {showMoreTags ? "See less" : "See more"}
          </button>
        )}
      </div>

      {showMoreTags && (
        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {hiddenTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full ${
                selectedTag === tag
                  ? "bg-tertiary text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-secondary hover:text-white transition`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-6">
        {filteredProjects.length === 0 && (
          <p className="text-gray-500">No projects available.</p>
        )}
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
            style={{
              minWidth: "250px",
              maxWidth: "400px",
            }}
          >
            <div className="w-full h-48 sm:h-64 relative flex justify-center items-center p-2">
              <img
                src={project.thumbnail}
                alt={`Imagem do projeto ${project.title}`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-300 text-gray-700 rounded-full px-3 py-1 text-xs font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to={project.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 px-6 py-2 rounded-full"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
