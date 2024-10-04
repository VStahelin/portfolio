import AboutMeSection from "@components/organisms/AboutMeSection";
import Hero from "@components/organisms/Hero";
import { DataContext } from "@context/DataAPIContext";
import React, { useContext } from "react";

const HomePage: React.FC = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("HomePage must be used within a DataProvider");
  }

  const { portifolio, loading, error } = context;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navList = (
    <div className="container mx-auto flex justify-center items-center">
      <div className="space-x-4">
        <a
          className="text-white-light hover:text-white-dark"
          onClick={() => scrollToSection("about-me")}
        >
          About Me
        </a>
        <a
          className="text-white-light hover:text-white-dark"
          onClick={() => scrollToSection("projects")}
        >
          Portfolio
        </a>
        <a
          className="text-white-light hover:text-white-dark"
          onClick={() => scrollToSection("experiences")}
        >
          Experiences
        </a>
        <a
          className="text-white-light hover:text-white-dark"
          onClick={() => scrollToSection("footer")}
        >
          Get in Touch
        </a>
      </div>
    </div>
  );

  return (
    <div className="bg-back min-h-screen">
      <nav className="bg-transparent py-5">{navList}</nav>
      <div id="hero">
        <Hero about_data={portifolio?.about_me || null} />
      </div>
      <div id="about-me">
        <AboutMeSection about_data={portifolio?.about_me || null} />
      </div>
      <div id="projects">
        <div className="flex flex-col items-center bg-gray-50 py-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Project 1</h3>
              <p className="text-gray-700">Description of project 1.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Project 2</h3>
              <p className="text-gray-700">Description of project 2.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Project 3</h3>
              <p className="text-gray-700">Description of project 3.</p>
            </div>
          </div>
        </div>
      </div>
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
