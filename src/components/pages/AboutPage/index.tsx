import { DataContext } from "@context/DataAPIContext";
import { BaseUrlContext } from "@context/GlobalValues";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AboutPage: React.FC = () => {
  const BaseUrl = useContext(BaseUrlContext);
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("AboutPage must be used within a DataProvider");
  }

  const { portfolio } = context;
  const navigate = useNavigate();

  const backToHome = () => {
    navigate(`${BaseUrl}/`);
  };
  return (
    <div>
      <div className="container mx-auto p-4">
        <button
          onClick={backToHome}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Back to Home
        </button>
        <h1 className="text-2xl font-bold mb-4 text-left">Source Data</h1>
        <pre className="bg-gray-900 text-white p-4 rounded-md shadow-md overflow-x-auto text-left whitespace-pre-wrap">
          {JSON.stringify(portfolio, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default AboutPage;
