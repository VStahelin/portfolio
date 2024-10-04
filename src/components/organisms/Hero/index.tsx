import React, { useContext, useState } from "react";
import background from "@assets/images/background.svg";
import { AboutMe } from "@interfaces/interfaces";
import { extractFileIdFromGDriveUrl } from "@utils/gdrive";
import { ScreenSizeContext } from "@context/Mobile";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface AboutMeSectionProps {
  about_data: AboutMe | null;
}

const Hero: React.FC<AboutMeSectionProps> = ({ about_data }) => {
  const isMobile = useContext(ScreenSizeContext);

  const profilePhotoUrl = () => {
    const photo = extractFileIdFromGDriveUrl(
      about_data?.profile_photo_url || "",
    );
    return `https://drive.google.com/thumbnail?id=${photo}&sz=w1000`;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const mobileAboutMe = (
    <div className="flex h-screen justify-center items-top mt-44">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-xs">
            <div className="flex basis-1/3 justify-center items-center">
              <img
                src={profilePhotoUrl()}
                alt="background"
                className="h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex-col basis-2/3 justify-left items-start mt-5">
            <h3 className="text-3xl text-left mb-1">
              <text className="text-white-dark">Hi! My name is </text>
            </h3>
            <h1
              className="text-5xl font-bold text-left mb-3"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              <text className="text-white">{about_data?.name}</text>
            </h1>
            <h1 className="text-3xl text-left mb-4">
              <text className="text-white">{about_data?.title}</text>
            </h1>
            <p className="text-left text-white mb-4">
              {about_data?.short_summary}
            </p>
          </div>
          <div className="flex basis-1/3 justify-center items-center"></div>
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
        <p className="text-left mb-4">{about_data?.short_summary}</p>
      </div>
      <div className="flex basis-1/3 justify-center items-center">
        <img
          src={profilePhotoUrl()}
          alt="background"
          className=" h-auto rounded-lg shadow-lg"
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
        {isMobile ? mobileAboutMe : desktopAboutMe}
      </div>
    </div>
  );
};

export default Hero;
