import { createContext, useState, useEffect } from "react";

const ScreenSizeContext = createContext({ isMobile: false });

import { ReactNode } from "react";

interface ScreenSizeProviderProps {
  children: ReactNode;
}

export const ScreenSizeProvider = ({ children }: ScreenSizeProviderProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={{ isMobile }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export { ScreenSizeContext };
