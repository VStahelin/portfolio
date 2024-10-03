import React, { createContext, useEffect, useState, ReactNode } from "react";
import { DataContextType, Portifolio } from "../interfaces/interfaces";

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [portifolio, setPortifolio] = useState<Portifolio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://vstahelin.github.io/cms-portfolio/data.json",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result: Portifolio = await response.json();
        setPortifolio(result);
      } catch (error) {
        setError(error instanceof Error ? error : new Error("Unknown error"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // get base url for gh-pages
  const gh_page_base_url =
    window.location.hostname === "localhost" ? "" : "/portfolio";

  console.log("gh_page_base_url", gh_page_base_url);

  return (
    <DataContext.Provider value={{ portifolio, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
