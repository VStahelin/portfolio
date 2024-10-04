import { BaseUrlConxtex } from "@context/GlobalValues";
import React, { useContext } from "react";
import background from "@assets/images/background.svg";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const BaseUrl = useContext(BaseUrlConxtex);

  const navigate = useNavigate();

  const goToAbout = () => {
    navigate(`${BaseUrl}/about`);
  };

  return (
    <div
      className="flex h-screen justify-center items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary-dark mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-tertiary-light mb-8">
          Showcasing my projects and skills
        </p>
        <button
          className="px-6 py-3 bg-primary DEFAULT text-white rounded-full text-lg hover:bg-primary-dark"
          onClick={() => goToAbout()}
        >
          Source Data
        </button>
      </div>
    </div>
  );
};

export default Hero;
