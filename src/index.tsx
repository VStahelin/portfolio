import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalValues } from "@context/GlobalValues";
import { ScreenSizeProvider } from "@context/Mobile";
import { DataProvider } from "@context/DataAPIContext";

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ScreenSizeProvider>
        <GlobalValues>
          <DataProvider>
            <App />
          </DataProvider>
        </GlobalValues>
      </ScreenSizeProvider>
    </React.StrictMode>,
  );
}
