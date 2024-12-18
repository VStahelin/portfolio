import { DataContextType, Portfolio } from "../interfaces/interfaces";
import React, { createContext, useEffect, useState, ReactNode } from "react";

const DataContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://vstahelin.github.io/cms-portfolio/data/profile.json"
        );
        if (!response.ok) {
          console.log(response);
          throw new Error("Could not fetch data");
        }
        const result: Portfolio = await response.json();
        setPortfolio(result);
      } catch (error) {
        setError(error instanceof Error ? error : new Error("Unknown error"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ portfolio, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
