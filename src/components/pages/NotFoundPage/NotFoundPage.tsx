import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pb-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" className="mt-6 text-blue-500 hover:text-blue-700 text-lg">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
