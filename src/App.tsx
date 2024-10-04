import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

import { BaseUrlConxtex } from "@context/GlobalValues";
import { DataProvider } from "@context/DataAPIContext";
import HomePage from "@pages/HomePage";
import AboutPage from "@pages/AboutPage";
import Footer from "@molecules/Footer";

const App: React.FC = () => {
  const BaseUrl = useContext(BaseUrlConxtex);

  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path={`${BaseUrl}/`} element={<HomePage />} />
            <Route path={`${BaseUrl}/about`} element={<AboutPage />} />
            <Route path="*" element={<Navigate to={`${BaseUrl}/`} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
