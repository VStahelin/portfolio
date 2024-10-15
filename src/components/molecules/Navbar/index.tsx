import React, { useState, useEffect } from "react";

const NavBar: React.FC = () => {
  const [navBackgroundColor, setNavBackgroundColor] = useState(
    "rgba(255, 255, 255, 0)",
  );
  const [boxShadow, setBoxShadow] = useState("none");

  const interpolateColor = (scrollValue: number, maxScroll: number) => {
    const opacity = Math.min(scrollValue / maxScroll, 1);
    return `rgba(21, 23, 33, ${opacity})`;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 150;

      const newBackgroundColor = interpolateColor(scrollY, maxScroll);
      setNavBackgroundColor(newBackgroundColor);

      if (scrollY > maxScroll) {
        setBoxShadow("0 4px 10px rgba(0, 0, 0, 0.1)");
      } else {
        setBoxShadow("none");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`container mx-auto flex justify-center items-center`}>
      <nav
        className={`fixed top-0 left-0 w-full z-10 py-4`}
        style={{
          backgroundColor: navBackgroundColor,
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: boxShadow,
        }}
      >
        <div className="space-x-4">
          <button
            className="text-white-light hover:text-tertiary-light transition-colors font-bold"
            onClick={() => scrollToSection("about-me")}
          >
            About Me
          </button>
          <button
            className="text-white-light hover:text-tertiary-light
             transition-colors font-bold"
            onClick={() => scrollToSection("projects")}
          >
            Portfolio
          </button>
          <button
            className="text-white-light hover:text-tertiary-light transition-colors font-bold"
            onClick={() => scrollToSection("experiences")}
          >
            Experiences
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
