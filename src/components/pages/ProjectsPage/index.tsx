import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import WavesLong from "../../../assets/images/waves_long.png";
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

const ProjectPage: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Project | null>(null);
  const [data, setData] = useState<Project[]>([]);

  const fetchedData = () => {
    fetch("https://vstahelin.github.io/cms-portfolio/data/project.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchedData();
  }, []);

  const priorityTags = ["Python", "Django", "React", "Typescript", "Docker"];

  const uniqueTags = Array.from(
    new Set([
      ...priorityTags,
      ...data.flatMap((project) => project.tags).sort(),
    ])
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
    setShowDropdown(false);
  };

  const filteredProjects = data.filter(
    (project) =>
      (selectedTag === "All" || project.tags.includes(selectedTag)) &&
      project.title.toLowerCase().includes(searchText.toLowerCase())
  );

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
          <div
            className="bg-back-light rounded-xl shadow-md p-8 my-8"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.25)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="relative z-10 mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                Discover My Quick Projects
              </h1>
              <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto">
                This is a space to share several of the projects I’ve developed.
                Some are still in progress, others are completed, some are
                weekend projects, and others are just ideas. In the end, what
                motivates me is coding. I love bringing random thoughts to life
                and turning them into reality to share with the world.
              </p>
            </div>
            <form className="max-w-lg mx-auto mb-8">
              <div className="flex gap">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  type="button"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium rounded-l-lg hover:bg-tertiary-light transition focus:outline-none dark:bg-back-dark dark:text-white "
                >
                  {selectedTag === "All" ? "All categories" : selectedTag}
                </button>

                {showDropdown && (
                  <>
                    <div
                      className="fixed inset-0 z-0"
                      onClick={() => setShowDropdown(false)}
                    />
                    <div className="absolute bg-white-light divide-y divide-back-light rounded-lg shadow w-44 dark:bg-back-dark z-10 shadow-secondary">
                      <ul className="py-2 text-sm text-tertiary-dark dark:text-white-light max-h-96 overflow-y-auto">
                        <li>
                          <button
                            type="button"
                            className="w-full px-4 py-2 text-left hover:bg-secondary-light dark:hover:bg-tertiary"
                            onClick={() => handleTagSelect("All")}
                          >
                            All
                          </button>
                        </li>
                        {uniqueTags.map((tag) => (
                          <li key={tag}>
                            <button
                              type="button"
                              className="w-full px-4 py-2 text-left hover:bg-secondary-light dark:hover:bg-tertiary"
                              onClick={() => handleTagSelect(tag)}
                            >
                              {tag}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                <input
                  type="text"
                  value={searchText}
                  onChange={handleSearchChange}
                  placeholder={`Search projects ${
                    selectedTag === "All"
                      ? "in all categories"
                      : `in ${selectedTag} category`
                  }`}
                  className="block w-full p-2.5 text-sm text-back-dark bg-back-light rounded-r-lg border-secondary-light focus:ring-primary focus:border-primary dark:bg-tertiary dark:border-quaternary-dark dark:text-white"
                />
              </div>
            </form>
            <div>
              <section
                id="highlighted-projects"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8"
              >
                <TransitionGroup component={null}>
                  {filteredProjects
                    .filter((project) => project.is_highlighted)
                    .map((project, index) => (
                      <CSSTransition
                        key={index}
                        timeout={200}
                        classNames="fade"
                      >
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
                      <CSSTransition
                        key={index}
                        timeout={500}
                        classNames="fade"
                      >
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
        </div>

        {modalData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-back-light p-6 rounded-lg max-w-md w-full shadow-lg sm:max-w-lg md:max-w-xl">
              <div className="flex justify-center">
                <img
                  src={modalData.image_url}
                  alt={modalData.title}
                  className="w-1/2 h-1/2 object-cover rounded-md mb-4"
                />
              </div>
              <h2 className="text-xl font-semibold text-tertiary">
                {modalData.title}
              </h2>
              <div className="mt-4 text-sm sm:text-base overflow-y-auto max-h-96 relative">
                {modalData.description}
              </div>
              <div>
                {modalData.more_info_link && (
                  <button
                    className="mt-6 px-4 py-2 bg-secondary-dark text-white rounded-full mr-4 hover:bg-secondary"
                    onClick={() =>
                      window.open(modalData.more_info_link, "_blank")
                    }
                  >
                    Go to the project
                  </button>
                )}
                <button
                  className="mt-6 px-4 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500"
                  onClick={() => setModalData(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectPage;
