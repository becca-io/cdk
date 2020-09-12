import React, { createContext } from "react";

interface ThemeContext {
  theme: string;
}

export const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export const ThemeProvider = () => {
  return (
    <ThemeContext.Provider value={{ theme: "black" }}></ThemeContext.Provider>
  );
};
