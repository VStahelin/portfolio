import AboutMeSection from "@organisms/AboutMeSection";
import Hero from "@organisms/Hero";
import { DataContext } from "@context/DataAPIContext";
import NavBar from "@molecules/Navbar";
import React, { useContext, useMemo } from "react";
import Notification from "@organisms/Notification";
import Projects from "@components/organisms/Projects";

const HomePage: React.FC = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("HomePage must be used within a DataProvider");
  }

  const { portifolio, loading, error } = context;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
      <Notification
        message="This portfolio is a work in progress. Some features may not work as
        expected."
        duration={5000}
      />
      <div id="navbar">
        <NavBar />
      </div>
      <div id="hero">
        <Hero about_data={portifolio?.about_me || null} />
      </div>
      <div id="about-me">
        <AboutMeSection about_data={portifolio?.about_me || null} />
      </div>
      <Projects projects={projects} tags={tags} />
      <div id="experiences">
        <div className="flex h-screen justify-center items-center bg-gray-100">
          <div className="max-w-2xl text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Experience
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-blue-600">
                  Job Title 1
                </h3>
                <p className="text-gray-700">Company Name</p>
                <p className="text-gray-700">Duration</p>
                <p className="text-gray-700">
                  Description of responsibilities and achievements.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-600">
                  Job Title 2
                </h3>
                <p className="text-gray-700">Company Name</p>
                <p className="text-gray-700">Duration</p>
                <p className="text-gray-700">
                  Description of responsibilities and achievements.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-600">
                  Job Title 3
                </h3>
                <p className="text-gray-700">Company Name</p>
                <p className="text-gray-700">Duration</p>
                <p className="text-gray-700">
                  Description of responsibilities and achievements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
