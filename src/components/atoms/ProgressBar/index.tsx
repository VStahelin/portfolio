import React from "react";

interface ProgressBarProps {
  progress: number; // 0-100
  width?: string; // 10px, 5rem...
  height?: string; // 10px, 5rem...
  bgColor?: string; // bg-gray-300, bg-blue-500...
  progressColor?: string; // bg-gray-300, bg-blue-500...
  className?: string;
}

{
  /* 
    <ProgressBar
        progress={50}
        width="100%"
        height="1rem"
        bgColor="bg-gray-300"
        progressColor="bg-blue-500"
        className="shadow-lg border-2"
    />
; */
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  width = "12rem",
  height = "1rem",
  bgColor = "bg-gray-300",
  progressColor = "bg-blue-500",
  className = "",
}) => {
  return (
    <div
      className={`${bgColor} rounded-full overflow-hidden mb-4 ${className}`}
      style={{ width, height }}
    >
      <div
        className={`${progressColor} h-full`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
