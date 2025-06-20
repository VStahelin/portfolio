import AboutMeSection from "../../organisms/AboutMeSection";
import Hero from "../../organisms/Hero";
import React, { useMemo } from "react";
import Projects from "../../organisms/Projects";
import { Portfolio } from "../../../interfaces/interfaces";
import ExperienceList from "../../organisms/ExperienceList";

interface HomePageProps {
  portfolio: Portfolio | null;
}

const HomePage: React.FC<HomePageProps> = ({ portfolio }) => {
  const projects = useMemo(() => {
    if (!portfolio) {
      return [];
    }

    return portfolio.projects.map((project) => ({
      id: project.order_id,
      title: project.name,
      description: project.description,
      tags: project.tags || [],
      thumbnail: project.thumbnail,
      project_url: project.project_url || "",
      order_id: project.order_id,
    }));
  }, [portfolio]);

  return (
    <div className="bg-back min-h-screen">
      {/* <Notification
        message="This portfolio is a work in progress. Some features may not work as
        expected."
        duration={5000}
      /> */}

      <div id="hero">
        <Hero about_data={portfolio?.about_me || null} />
      </div>
      <div id="about-me">
        <AboutMeSection about_data={portfolio?.about_me || null} />
      </div>
      <div id="projects">
        <Projects projects={projects} />
      </div>
      <div id="experiences">
        <ExperienceList
          experiences={portfolio?.professional_experience || []}
        />
      </div>
    </div>
  );
};

export default HomePage;
