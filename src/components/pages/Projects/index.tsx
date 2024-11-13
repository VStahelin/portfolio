import React, { useState } from "react";

type Project = {
  title: string;
  tags: string[];
  short_description: string;
  description: string;
  is_highlighted: boolean;
  image_url: string;
  more_info_link: string;
};

interface ProjectPageProps {
  data: Project[];
}

const ProjectPage: React.FC<ProjectPageProps> = ({ data }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [modalData, setModalData] = useState<Project | null>(null);

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  const filteredProjects = data.filter(
    (project) => !selectedTag || project.tags.includes(selectedTag)
  );

  return (
    <div className="min-h-screen bg-back text-white flex justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-secondary-dark to-tertiary-dark p-12 lg:p-24 shadow-lg my-8 text-center text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 rounded-3xl"
            style={{
              backgroundImage:
                "url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')",
            }}
          />
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Discover My Quick Projects
            </h1>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto">
              A space to showcase projects made in my free time, exploring new
              ideas and technologies.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#highlighted-projects"
                className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition duration-200 shadow-md"
              >
                View Highlighted Projects
              </a>
              <a
                href="#all-projects"
                className="px-6 py-3 border border-white text-white font-medium rounded-full hover:bg-white hover:text-back-dark transition duration-200 shadow-md"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Container for Tags and Projects */}
        <div className="bg-back-light rounded-xl shadow-md p-6 my-8">
          {/* Tag Filter Section */}
          <section className="flex justify-center py-4 mb-6">
            <div className="flex gap-3 flex-wrap justify-center max-w-screen-md">
              {["React", "Node", "AI", "TypeScript"].map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 rounded-full transition-all text-sm font-medium ${
                    selectedTag === tag
                      ? "bg-primary text-white shadow-md"
                      : "bg-secondary-light text-white hover:bg-secondary-dark hover:shadow-md"
                  }`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </section>

          {/* Highlighted Projects Section */}
          <section
            id="highlighted-projects"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8"
          >
            {filteredProjects
              .filter((project) => project.is_highlighted)
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  onClick={() => setModalData(project)}
                  isHighlighted
                />
              ))}
          </section>

          {/* All Projects Section */}
          <section
            id="all-projects"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredProjects
              .filter((project) => !project.is_highlighted)
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  onClick={() => setModalData(project)}
                  isHighlighted={false}
                />
              ))}
          </section>
        </div>
      </div>

      {/* Modal for Project Details */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white text-back-light p-6 rounded-lg max-w-md w-full shadow-lg">
            <img
              src={modalData.image_url}
              alt={modalData.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-primary-dark">
              {modalData.title}
            </h2>
            <p className="mt-4">{modalData.description}</p>
            <button
              className="mt-6 px-4 py-2 bg-primary-dark text-white rounded-full"
              onClick={() => setModalData(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
  isHighlighted: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  isHighlighted,
}) => {
  return (
    <div
      className={`relative flex flex-col ${
        isHighlighted ? "md:flex-row" : ""
      } w-full bg-white shadow-md border border-slate-200 rounded-lg overflow-hidden transition-all duration-300`}
    >
      <div
        className={`relative p-2.5 ${isHighlighted ? "md:w-1/3 h-48 md:h-auto" : "h-32"} shrink-0 overflow-hidden transition-all duration-300`}
      >
        <img
          src={project.image_url}
          alt={project.title}
          className={`h-full w-full rounded-md object-cover transition-all duration-300 ${
            isHighlighted ? "transform scale-90" : ""
          }`}
        />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <div className="flex gap-2 mb-3 flex-wrap">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-secondary-dark py-0.5 px-2.5 text-xs text-white shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h4 className="text-slate-800 text-lg font-semibold">
          {project.title}
        </h4>
        <p className="text-slate-600 font-light text-sm">
          {project.short_description}
        </p>
        <button
          onClick={onClick}
          className="text-slate-800 font-semibold text-sm mt-3 hover:underline"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;
