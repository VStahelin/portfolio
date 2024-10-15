import React from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  github: string | null;
  linkedin: string | null;
  email: string | null;
}

const Footer: React.FC<FooterProps> = ({ github, linkedin, email }) => {
  return (
    <footer
      id="footer"
      className="bg-tertiary-dark
     text-white py-6"
    >
      <div className="container mx-auto text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          {github && (
            <Link
              to={github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              GitHub
            </Link>
          )}
          {linkedin && (
            <Link
              to={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              LinkedIn
            </Link>
          )}
          {email && (
            <Link to={`mailto:${email}`} className="hover:text-gray-400">
              Email
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
