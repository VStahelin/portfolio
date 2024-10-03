import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/molecules/footer/index";
import HomePage from "./components/pages/HomePage/HomePage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import { DataProvider } from "./context/DataAPIContext";
import NotFoundPage from "components/pages/NotFoundPage/NotFoundPage";
import { BaseUrlConxtex } from "./context/GlobalValues";

const App: React.FC = () => {
  const BaseUrl = useContext(BaseUrlConxtex);

  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path={`${BaseUrl}/`} element={<HomePage />} />
            <Route path={`${BaseUrl}/about`} element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
