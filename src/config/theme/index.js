import { darkTheme } from "./dark";
import { lightTheme } from "./light";

const typography = {
  fontFamily: "'Urbanist', sans-serif",
  fontWeightLight: 400,
  button: {
    textTransform: "none",
  },
};

export const themeCreator = (t) => {
  return { ...theme[t] };
};

const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export default themeCreator("dark");

// https://mui.com/customization/default-theme/
// https://mui.com/customization/dark-mode/#main-content
