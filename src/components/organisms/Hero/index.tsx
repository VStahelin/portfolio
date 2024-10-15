import React, { useContext } from "react";
import background from "@assets/images/background.svg";
import { AboutMe } from "@interfaces/interfaces";
import { ScreenSizeContext } from "@context/Mobile";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

interface AboutMeSectionProps {
  about_data: AboutMe | null;
}

const Hero: React.FC<AboutMeSectionProps> = ({ about_data }) => {
  const screen = useContext(ScreenSizeContext);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const mobileAboutMe = (
    <div className="flex h-screen justify-center items-center">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div className="w-48 mb-5">
            <img
              src={about_data?.profile_photo_url}
              alt="background"
              className="h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-col justify-left items-start">
            <h3 className="text-3xl text-left mb-1">
              <span className="text-primary-light">Hi! </span>
              <span className="text-white-dark">I&apos;m </span>
            </h3>
            <h1 className="text-5xl font-bold text-left mb-3">
              <span className="text-white">{about_data?.name}</span>
            </h1>
            <h1 className="text-3xl text-left mb-4">
              <span className="text-white">{about_data?.title}</span>
            </h1>
            <p className="text-left text-white mb-4">
              {about_data?.short_summary}
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                to={about_data?.contact.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-8 w-8 text-white" />
              </Link>
              <Link
                to={about_data?.contact.github || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-8 w-8 text-white" />
              </Link>
              <Link
                to={`mailto:${about_data?.contact.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="h-8 w-8 text-white" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5">
            <ChevronDownIcon
              className="h-10 w-10 text-white animate-bounce"
              onClick={() => {
                scrollToSection("about-me");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const desktopAboutMe = (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex-col basis-2/3 justify-left items-start">
        <h1
          className="text-8xl font-bold text-left mb-4"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          <span className="text-primary">I&apos;m </span>
          <span className="text-white">{about_data?.name}</span>
        </h1>
        <h1 className="text-5xl text-left mb-4">
          <span className="text-white">{about_data?.title}</span>
        </h1>
        <p className="text-left text-white mb-4">{about_data?.short_summary}</p>

        <div className="flex space-x-4 mt-4">
          <Link
            to={about_data?.contact.linkedin || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-8 w-8 text-white" />
          </Link>
          <Link
            to={about_data?.contact.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-8 w-8 text-white" />
          </Link>
          <Link
            to={`mailto:${about_data?.contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="h-8 w-8 text-white" />
          </Link>
        </div>
      </div>
      <div className="flex basis-1/3 justify-center items-center">
        <img
          src={about_data?.profile_photo_url}
          alt="background"
          className="h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );

  return (
    <div
      className="flex h-screen justify-center items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-8">
        {screen.isMobile ? mobileAboutMe : desktopAboutMe}
      </div>
    </div>
  );
};

export default Hero;
