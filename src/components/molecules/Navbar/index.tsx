import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";

const NavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative text-lg font-medium text-white transition-colors hover:text-primary ${
        isActive ? "text-primary" : ""
      }`}
    >
      {children}
      {isActive && (
        <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-primary rounded-full motion-safe:animate-fade-in-up" />
      )}
    </Link>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hasScrolled
            ? "py-3 bg-tertiary/80 backdrop-blur-lg shadow-2xl"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src={Logo}
              alt="Logo"
              className="w-10 h-10 rounded-full shadow-lg"
            />
            <span className="text-xl font-semibold text-white">
              Vitor Stähelin
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "rotate-45 top-1/2 -translate-y-1/2"
                    : "top-1/4"
                }`}
              />
              <span
                className={`absolute h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "top-1/2"
                }`}
              />
              <span
                className={`absolute h-0.5 w-full bg-white rounded-full transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "-rotate-45 top-1/2 -translate-y-1/2"
                    : "top-3/4"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-tertiary/95 backdrop-blur-xl flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="space-y-8 text-center">
          <Link
            to="/"
            className="block text-4xl font-bold text-white hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="block text-4xl font-bold text-white hover:text-primary transition-colors"
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
