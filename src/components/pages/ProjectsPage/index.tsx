import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import WavesLong from "../../../assets/images/waves_long.png";
import RobotBackground from "../../../assets/images/robot_on_library.jpeg";
import ProjectCard from "../../molecules/ProjectCard";
import "./index.css";

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
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [showMoreTags, setShowMoreTags] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Project | null>(null);

  const uniqueTags = Array.from(
    new Set(data.flatMap((project) => project.tags))
  );
  const visibleTags = uniqueTags.slice(0, 8);
  const hiddenTags = uniqueTags.slice(8);

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? "All" : tag);
  };

  const filteredProjects = data.filter(
    (project) => selectedTag === "All" || project.tags.includes(selectedTag)
  );

  const modalContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (modalData) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalData]);

  return (
    <>
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${WavesLong})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(1px) brightness(0.7)",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="min-h-screen bg-tertiary bg-opacity-40 text-white flex justify-center mt-16">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-secondary-dark to-tertiary-dark p-12 lg:p-24 shadow-lg my-8 text-center text-white">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25 rounded-3xl"
              style={{
                backgroundImage: `url(${RobotBackground})`,
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
            </div>
          </section>

          <div className="bg-back-light rounded-xl shadow-md p-6 my-8">
            <section className="flex justify-center py-4 mb-6">
              <div className="flex gap-3 flex-wrap justify-center max-w-screen-md">
                <button
                  className={`px-4 py-2 rounded-full ${
                    selectedTag === "All"
                      ? "bg-tertiary text-white"
                      : "bg-gray-200 text-gray-700"
                  } hover:bg-secondary hover:text-white transition`}
                  onClick={() => handleTagClick("All")}
                >
                  All
                </button>
                {visibleTags.map((tag) => (
                  <button
                    key={tag}
                    className={`px-4 py-2 rounded-full ${
                      selectedTag === tag
                        ? "bg-tertiary text-white"
                        : "bg-gray-200 text-gray-700"
                    } hover:bg-secondary hover:text-white transition`}
                    onClick={() => handleTagClick(tag)}
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
            </section>

            {showMoreTags && (
              <section className="flex justify-center flex-wrap gap-2 mb-6">
                {hiddenTags.map((tag) => (
                  <button
                    key={tag}
                    className={`px-4 py-2 rounded-full ${
                      selectedTag === tag
                        ? "bg-tertiary text-white"
                        : "bg-gray-200 text-gray-700"
                    } hover:bg-secondary hover:text-white transition`}
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </section>
            )}

            <section
              id="highlighted-projects"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8"
            >
              <TransitionGroup component={null}>
                {filteredProjects
                  .filter((project) => project.is_highlighted)
                  .map((project, index) => (
                    <CSSTransition key={index} timeout={200} classNames="fade">
                      <ProjectCard
                        project={project}
                        onClick={() => setModalData(project)}
                        isHighlighted
                      />
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </section>

            <section
              id="all-projects"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              <TransitionGroup component={null}>
                {filteredProjects
                  .filter((project) => !project.is_highlighted)
                  .map((project, index) => (
                    <CSSTransition key={index} timeout={500} classNames="fade">
                      <ProjectCard
                        project={project}
                        onClick={() => setModalData(project)}
                        isHighlighted={false}
                      />
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </section>
          </div>
        </div>

        {modalData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-back-light p-6 rounded-lg max-w-md w-full shadow-lg sm:max-w-lg md:max-w-xl">
              <img
                src={modalData.image_url}
                alt={modalData.title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-primary-dark">
                {modalData.title}
              </h2>
              <div
                ref={modalContentRef}
                className="mt-4 text-sm sm:text-base overflow-y-auto max-h-96 relative"
              >
                {modalData.description}
              </div>
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
    </>
  );
};

export default ProjectPage;
