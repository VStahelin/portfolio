import React, { useContext, useEffect, useMemo } from "react";
import ReactGA from "react-ga4";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

import "./App.css";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import Footer from "./components/molecules/Footer";
import Loading from "./components/molecules/Loading";
import { DataContext } from "./context/DataAPIContext";
import { BaseUrlContext } from "./context/GlobalValues";
import ProjectPage from "./components/pages/ProjectsPage";
import Navbar from "./components/molecules/Navbar";

type ContactType = {
  email: string;
  linkedin: string;
  github: string;
};

type AboutMeType = {
  contact: ContactType;
};

type PortfolioType = {
  about_me: AboutMeType;
};

const PageTracking: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("G-PBLYVGYSD9");
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

const App: React.FC = () => {
  const BaseUrl = useContext(BaseUrlContext); // Fixed typo
  const context = useContext(DataContext);

  const cachedData = useMemo(() => {
    if (!context || context.loading) return null;
    if (context.error) return null;

    const portfolio: PortfolioType = context.portfolio as PortfolioType; // Fixed typo

    const about_me = portfolio?.about_me;
    const contact = about_me?.contact;
    return { about_me, contact };
  }, [context?.loading, context?.error, context?.portfolio]);

  useEffect(() => {
    const handleDocumentClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const elementType = target.tagName.toLowerCase();
      const elementId = target.id || "id-null";
      const elementClass =
        typeof target.className === "string" ? target.className : "";
      const elementText = target.innerText || "text-null";

      ReactGA.event({
        category: "User Interaction",
        action: `Click on ${elementType}`,
        label: `ID: ${elementId}, Class: ${elementClass}, Text: ${elementText}`,
      });
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  if (!cachedData) {
    return <Loading />;
  }

  const { contact } = cachedData;

  if (!contact) {
    return <div>Informations not found</div>;
  }

  const { email, linkedin, github } = contact;

  return (
    <Router>
      <PageTracking />
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path={`${BaseUrl}/`}
            element={
              context ? (
                <HomePage portfolio={context.portfolio} /> // Fixed typo
              ) : (
                <Loading />
              )
            }
          />
          <Route path={`${BaseUrl}/about`} element={<AboutPage />} />
          <Route path={`${BaseUrl}/projects`} element={<ProjectPage />} />
          <Route path="*" element={<Navigate to={`${BaseUrl}/`} replace />} />
        </Routes>
        <Footer github={github} linkedin={linkedin} email={email} />
      </div>
    </Router>
  );
};

export default App;
