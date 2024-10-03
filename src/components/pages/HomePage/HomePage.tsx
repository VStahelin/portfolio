import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Showcasing my projects and skills
          </p>
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700"
            onClick={() => (window.location.href = "/about")}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="flex h-screen justify-center items-center bg-white">
        <div className="max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-700">
            I am a passionate developer with experience in building web
            applications using modern technologies. I love to learn and explore
            new tools and frameworks to improve my skills and deliver
            high-quality software solutions.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white py-16">
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
      <div className="flex h-screen justify-center items-center bg-gray-100">
        <div className="max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
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
    </>
  );
};

export default HomePage;
