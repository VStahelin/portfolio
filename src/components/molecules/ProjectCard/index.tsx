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
        className={`relative p-2.5 ${isHighlighted ? "md:w-1/2 h-48 md:h-auto" : "h-32"} shrink-0 overflow-hidden transition-all duration-300`}
      >
        <img
          src={project.image_url}
          alt={project.title}
          loading="lazy"
          className={`h-full w-full object-contain rounded-md transition-all duration-300 ${
            isHighlighted ? "transform scale-90" : ""
          }`}
        />
      </div>
      <div className="p-4 flex flex-col justify-between">
        {/* <div className="flex gap-2 mb-3 flex-wrap justify-center">
        {project.tags.slice(0, maxTags).map((tag, index) => (
        <span
          key={index}
          className="rounded-full bg-secondary-dark py-0.5 px-2.5 text-xs text-white shadow-sm"
        >
          {tag}
        </span>
        ))}
      </div> */}
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

export default ProjectCard;
