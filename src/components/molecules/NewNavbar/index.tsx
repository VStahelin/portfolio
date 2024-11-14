import { useState, useEffect } from "react";
import Logo from "../../../assets/images/logo.png";

const NewNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navBackgroundColor, setNavBackgroundColor] = useState(
    "rgba(21, 23, 33, 1)"
  );
  const [boxShadow, setBoxShadow] = useState("0 4px 10px rgba(0, 0, 0, 0.1)");
  const [backdropFilter, setBackdropFilter] = useState("blur(8px)");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const interpolateColor = (scrollValue, maxScroll) => {
    // A opacidade diminui conforme rola para baixo, mas não ultrapassa 0.6 (40% transparente)
    const opacity = Math.max(1 - scrollValue / maxScroll, 0.6);
    return `rgba(21, 23, 33, ${opacity})`;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 150;

      const newBackgroundColor = interpolateColor(scrollY, maxScroll);
      setNavBackgroundColor(newBackgroundColor);

      // Configura o desfoque dependendo do scroll
      if (scrollY > maxScroll) {
        setBackdropFilter("blur(4px)");
      } else {
        setBackdropFilter("blur(8px)");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: navBackgroundColor,
        boxShadow: boxShadow,
        backdropFilter: backdropFilter,
      }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white-dark">
            Vitor Stahelin
          </span>
        </a>

        {/* Botão do menu móvel */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden inline-flex items-center p-2 text-white hover:bg-back-light dark:hover:bg-tertiary"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center space-x-4 relative">
          <a
            href="/"
            className="text-sm text-white hover:text-primary font-bold"
          >
            Home
          </a>
          <a
            href="projects"
            className="text-sm text-white hover:text-primary font-bold"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-white hover:text-primary font-bold"
          >
            Get in Touch
          </a>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden w-full flex flex-col items-center mt-4 space-y-2">
            <a href="/" className="text-sm text-white hover:text-primary">
              Home
            </a>
            <a
              href="#projects"
              className="text-sm text-white hover:text-primary"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-white hover:text-primary"
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NewNavbar;
