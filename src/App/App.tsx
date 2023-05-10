import React, { ChangeEvent, useState, FC } from "react";

import { Weather } from "./Weather";

import "./app.css";

import { ThemeProvider } from "../ThemeProvider";

export const App: FC = () => {
  const [input, setInput] = useState("");

  const [city, setCity] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleShowWeatherClick = () => {
    const trimmedInput = input.trim();
    if (trimmedInput !== "") {
      setCity(input);
    }
  };

  return (
    <ThemeProvider>
      <>
        <input
          role="search"
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Search for a city"
        />
        <button onClick={handleShowWeatherClick}>Show Weather</button>
        <Weather city={city} />
      </>
    </ThemeProvider>
  );
};
