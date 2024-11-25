import React from "react";
import "./style.css";

interface LoadingProps {
  containerClassName?: string;
  loaderClassName?: string;
  textClassName?: string;
  hideText?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  containerClassName = "loading-container",
  loaderClassName = "loader",
  textClassName = "",
  hideText = false,
}) => {
  return (
    <div className={containerClassName}>
      <div className={loaderClassName}></div>
      {!hideText && <p className={textClassName}>Loading...</p>}
    </div>
  );
};

export default Loading;
