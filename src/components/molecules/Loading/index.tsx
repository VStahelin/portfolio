import React from "react";
import "./style.css";

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
