import React, { useContext, useMemo } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

import { BaseUrlConxtex } from "@context/GlobalValues";
import { DataContext } from "@context/DataAPIContext";
import HomePage from "@pages/HomePage";
import AboutPage from "@pages/AboutPage";
import Footer from "@molecules/Footer";

const App: React.FC = () => {
  const BaseUrl = useContext(BaseUrlConxtex);
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useDataAPI must be used within a DataProvider");
  }

  const { portifolio, loading, error } = context;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const about_me = useMemo(() => portifolio?.about_me, [portifolio]);
  const contact = useMemo(() => about_me?.contact, [about_me]);

  if (!contact) {
    return <div>Informações de contato indisponíveis</div>;
  }

  const { email, linkedin, github } = contact;

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path={`${BaseUrl}/`}
            element={<HomePage portifolio={portifolio} />}
          />
          <Route path={`${BaseUrl}/about`} element={<AboutPage />} />
          <Route path="*" element={<Navigate to={`${BaseUrl}/`} />} />
        </Routes>
        <Footer github={github} linkedin={linkedin} email={email} />
      </div>
    </Router>
  );
};

export default App;
