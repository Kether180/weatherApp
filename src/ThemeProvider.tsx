import React from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>
        <label htmlFor="light-mode-switch"></label>
        <input
          type="checkbox"
          id="light-mode-switch"
          onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
          checked={theme === "light"}
        /><div>(I/O)</div>
      </div>
      {children}
    </ThemeContext.Provider>
  );
};
