import { ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { themeCreator } from "../config/theme";

const THEME_NAME = "PORTFOLIO_THEME";
const DARK_MODE = "dark";

export const ThemeContext = React.createContext(() => ({
  currentTheme: DARK_MODE,
  setTheme: null,
}));

const CustomThemeProvider = (props) => {
  // Read current theme from localStorage
  const curThemeName =
    typeof window !== "undefined"
      ? window?.localStorage?.getItem(THEME_NAME)
      : DARK_MODE;

  // State to hold the selected theme name
  const [themeName, _setThemeName] = useState(curThemeName || DARK_MODE);

  // Get the theme object by theme name
  const theme = themeCreator(themeName);

  const setThemeName = (themeName) => {
    localStorage.setItem(THEME_NAME, themeName);
    _setThemeName(themeName);
  };

  return (
    <ThemeContext.Provider value={setThemeName}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default CustomThemeProvider;
