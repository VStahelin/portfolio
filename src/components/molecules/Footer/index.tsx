import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/yourusername"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            className="hover:text-gray-400"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
