import { useState } from "react";

const NewNavbar = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Vitor Stahelin
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden inline-flex items-center p-2 text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
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

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4 relative">
          <a
            href="/"
            className="text-sm text-gray-900 dark:text-white hover:text-blue-600"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-sm text-gray-900 dark:text-white hover:text-blue-600"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-900 dark:text-white hover:text-blue-600"
          >
            Get in Touch
          </a>
          <button
            type="button"
            onClick={toggleLanguageDropdown}
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-5 h-5 rounded-full me-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 3900 3900"
            >
              <path fill="#b22234" d="M0 0h7410v3900H0z" />
              <path
                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                stroke="#fff"
                strokeWidth="300"
              />
              <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
            </svg>
            English (US)
          </button>
          {isLanguageOpen && (
            <div className="z-50 absolute top-full left-0 mt-1 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
              <ul className="py-2 font-medium">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full me-2"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-us"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="#bd3d44"
                          d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                          transform="scale(3.9385)"
                        />
                        <path
                          fill="#fff"
                          d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                          transform="scale(3.9385)"
                        />
                      </svg>
                      English
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full me-2"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-fr"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#0055A4" d="M0 0h512v512H0z" />
                        <path fill="#EF4135" d="M0 0h512v512H0z" />
                      </svg>
                      Français
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden w-full flex flex-col items-center mt-4 space-y-2">
            <a
              href="/"
              className="text-sm text-gray-900 dark:text-white hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-sm text-gray-900 dark:text-white hover:text-blue-600"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-gray-900 dark:text-white hover:text-blue-600"
            >
              Get in Touch
            </a>
            <button
              type="button"
              onClick={toggleLanguageDropdown}
              className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5 rounded-full me-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 3900 3900"
              >
                <path fill="#b22234" d="M0 0h7410v3900H0z" />
                <path
                  d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                  stroke="#fff"
                  strokeWidth="300"
                />
                <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
              </svg>
              English (US)
            </button>
            {isLanguageOpen && (
              <div className="z-50 mt-1 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                <ul className="py-2 font-medium">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      English
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Français
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NewNavbar;
