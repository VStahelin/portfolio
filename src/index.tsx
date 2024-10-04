import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalValues } from "@context/GlobalValues";
import { ScreenSizeProvider } from "@context/Mobile";

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ScreenSizeProvider>
        <GlobalValues>
          <App />
        </GlobalValues>
      </ScreenSizeProvider>
    </React.StrictMode>,
  );
}
