import React, { useState, useEffect } from "react";

interface NotificationProps {
  message?: string;
  duration?: number;
  color?: string;
  level?: "info" | "warning" | "error" | "success";
}

const Notification: React.FC<NotificationProps> = ({
  message = "This is a notification",
  duration = 3000,
  color = "bg-yellow-500",
  level = "info",
}) => {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => setVisible(false), 500); // 500ms to match the CSS transition duration
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  let levelColor;
  switch (level) {
    case "info":
      levelColor = "bg-blue-500";
      break;
    case "warning":
      levelColor = "bg-yellow-500";
      break;
    case "error":
      levelColor = "bg-red-500";
      break;
    case "success":
      levelColor = "bg-green-500";
      break;
    default:
      levelColor = color;
  }

  return (
    <div
      className={`fixed top-12 left-0 w-full ${levelColor} text-white text-center py-3 z-50 transition-opacity duration-500`}
      style={{ opacity }}
    >
      {message}
    </div>
  );
};

export default Notification;
