import React, { useState, useEffect } from "react";

const NavBar: React.FC = () => {
  const defaultButtonClass =
    "text-white-light hover:text-quaternary transition-colors font-bold";
  const secondaryButtonClass =
    "text-white-dark hover:text-secondary-light transition-colors font-bold";

  const defaultNavClass = "bg-transparent py-4";
  const secondaryNavClass = "bg-tertiary py-4 shadow-md";

  const [navButtonClass, setButtonClass] = useState(defaultButtonClass);
  const [navClass, setNavClass] = useState(defaultNavClass);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setButtonClass(secondaryButtonClass);
        setNavClass(secondaryNavClass);
      } else {
        setButtonClass(defaultButtonClass);
        setNavClass(defaultNavClass);
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
    <div className={`container mx-auto flex justify-center items-center `}>
      <nav className={`fixed top-0 left-0 w-full z-10 ${navClass}`}>
        <div className="space-x-4">
          <button
            className={`${navButtonClass}`} // Classe dinâmica baseada no estado
            onClick={() => scrollToSection("about-me")}
          >
            About Me
          </button>
          <button
            className={`${navButtonClass}`} // Classe dinâmica baseada no estado
            onClick={() => scrollToSection("projects")}
          >
            Portfolio
          </button>
          <button
            className={`${navButtonClass}`} // Classe dinâmica baseada no estado
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
