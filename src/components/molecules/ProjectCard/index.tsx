import React from "react";

type Project = {
  title: string;
  tags: string[];
  short_description: string;
  image_url: string;
  more_info_link: string;
};

type ProjectCardProps = {
  project: Project;
  isHighlighted?: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isHighlighted = false,
}) => {
  return (
    <div
      className={`card-gradient-background rounded-2xl p-4 flex flex-col group transform hover:-translate-y-1 transition-transform duration-300 shadow-xl ${
        isHighlighted ? "md:flex-row md:gap-4" : ""
      }`}
    >
      <div
        className={`relative rounded-lg overflow-hidden bg-black/20 shrink-0 ${
          isHighlighted ? "md:w-5/12 h-48" : "h-28 mb-3"
        }`}
      >
        <img
          src={project.image_url}
          alt={`Thumbnail for ${project.title}`}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col flex-grow justify-between">
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
          <p className="text-gray-300 text-xs mb-3">
            {project.short_description}
          </p>
        </div>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-white/10 text-gray-200 rounded-full px-2 py-0.5 text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.more_info_link && (
            <a
              href={project.more_info_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-white/10 text-white font-semibold py-1.5 text-sm rounded-lg hover:bg-white/20 transition-colors"
            >
              Visit Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
