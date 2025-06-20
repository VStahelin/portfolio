import React, { useEffect, useState } from "react";
import ProjectCard from "../../molecules/ProjectCard";
import background from "../../../assets/images/waves_long.png";

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
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://vstahelin.github.io/cms-portfolio/data/project.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Failed to fetch project data:", error));
  }, []);

  const uniqueTags = Array.from(
    new Set(data.flatMap((project) => project.tags).sort())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
  };

  const filteredProjects = data.filter(
    (project) =>
      (selectedTag === "All" || project.tags.includes(selectedTag)) &&
      project.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const highlightedProjects = filteredProjects.filter((p) => p.is_highlighted);
  const regularProjects = filteredProjects.filter((p) => !p.is_highlighted);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-tertiary via-quaternary/90 to-tertiary overflow-hidden py-16 px-4">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-50 animate-wave"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
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

      <div className="relative z-10 container mx-auto text-white max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 mt-6 gradient-text leading-tight py-3">
            Projects
          </h1>
          <p className="text-md md:text-lg text-gray-300 max-w-3xl mx-auto">
            A collection of my work, from full-stack applications to weekend
            experiments.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 glass rounded-2xl p-4 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              placeholder="Search by project name..."
              className="md:col-span-2 w-full p-2 bg-white/10 text-white rounded-lg border border-white/20 focus:ring-2 focus:ring-primary focus:outline-none placeholder-gray-400 text-sm"
            />
            <div className="relative">
              <select
                value={selectedTag}
                onChange={(e) => handleTagSelect(e.target.value)}
                className="w-full p-2 bg-white/10 text-white rounded-lg border border-white/20 appearance-none focus:ring-2 focus:ring-primary focus:outline-none text-sm"
              >
                <option value="All">All Categories</option>
                {uniqueTags.map((tag) => (
                  <option key={tag} value={tag} className="bg-tertiary">
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Highlighted Projects Section */}
        {highlightedProjects.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Highlighted
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlightedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} isHighlighted />
              ))}
            </div>
          </div>
        )}

        {/* Regular Projects Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            All Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {regularProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
