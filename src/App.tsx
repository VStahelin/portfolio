import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/molecules/footer/index";
import HomePage from "./components/pages/HomePage/HomePage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import { DataProvider } from "./context/DataAPIContext";
import NotFoundPage from "components/pages/NotFoundPage/NotFoundPage";

const App: React.FC = () => {
  const gh_page_base_url =
    window.location.hostname === "localhost" ? "" : "/portfolio";
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path={`${gh_page_base_url}/`} element={<HomePage />} />
            <Route path={`${gh_page_base_url}/about`} element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
