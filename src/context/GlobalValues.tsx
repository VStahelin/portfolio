import React, { createContext } from "react";

// const BaseUrl = window.location.hostname === "localhost" ? "" : "/portfolio";
const BaseUrl = window.location.hostname === "localhost" ? "" : "";

const BaseUrlContext = createContext(BaseUrl);

const GlobalValues: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <BaseUrlContext.Provider value={BaseUrl}>
      {children}
    </BaseUrlContext.Provider>
  );
};

export { BaseUrlContext, GlobalValues };
