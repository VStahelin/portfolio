import React, { createContext } from "react";

// const BaseUrl = window.location.hostname === "localhost" ? "" : "/portfolio";
const BaseUrl = window.location.hostname === "localhost" ? "" : "";

const BaseUrlConxtex = createContext(BaseUrl);

const GlobalValues: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <BaseUrlConxtex.Provider value={BaseUrl}>
      {children}
    </BaseUrlConxtex.Provider>
  );
};

export { BaseUrlConxtex, GlobalValues };
