import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./ThemeContext";
import { App } from "./App";
import React from "react";

createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


