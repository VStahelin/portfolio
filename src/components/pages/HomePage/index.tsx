import AboutMeSection from "@organisms/AboutMeSection";
import Hero from "@organisms/Hero";
import NavBar from "@molecules/Navbar";
import React, { useMemo } from "react";
import Projects from "@components/organisms/Projects";
import { Portifolio } from "@interfaces/interfaces";
import ExperienceList from "@components/organisms/ExperienceList";

interface HomePageProps {
  portifolio: Portifolio | null;
}

const HomePage: React.FC<HomePageProps> = ({ portifolio }) => {
  const { tags, projects } = useMemo(() => {
    if (!portifolio) {
      return { tags: [], projects: [] };
    }

    const tagCount: { [key: string]: number } = {};

    portifolio.projects.forEach((project) => {
      project.tags?.forEach((tag) => {
        if (tag) {
          tagCount[tag] = (tagCount[tag] || 0) + 1;
        }
      });
    });

    const sortedTags = Object.entries(tagCount)
      .sort(([, countA], [, countB]) => countB - countA)
      .map(([tag]) => tag);

    const projects = portifolio.projects.map((project) => ({
      id: project.order_id,
      title: project.name,
      description: project.description,
      tags: project.tags || [],
      thumbnail: project.thumbnail,
      project_url: project.project_url || "",
      order_id: project.order_id,
    }));

    return { tags: sortedTags, projects };
  }, [portifolio]);

  return (
    <div className="bg-back min-h-screen">
      {/* <Notification
        message="This portfolio is a work in progress. Some features may not work as
        expected."
        duration={5000}
      /> */}
      <div id="navbar">
        <NavBar />
      </div>
      <div id="hero">
        <Hero about_data={portifolio?.about_me || null} />
      </div>
      <div id="about-me">
        <AboutMeSection about_data={portifolio?.about_me || null} />
      </div>
      <div id="projects">
        <Projects projects={projects} tags={tags} />
      </div>
      <div id="experiences">
        <ExperienceList
          experiences={portifolio?.professional_experience || []}
        />
      </div>
    </div>
  );
};

export default HomePage;
