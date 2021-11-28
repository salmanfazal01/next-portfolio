import { darkTheme } from "./dark";
import { lightTheme } from "./light";

const typography = {
  fontFamily: "'Urbanist', sans-serif",
  fontWeightLight: 400,
  button: {
    textTransform: "none",
  },
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 1034,
    lg: 1200,
    xl: 1536,
  },
};

export const themeCreator = (t) => {
  return { breakpoints, typography, ...theme[t] };
};

const theme = {
  light: lightTheme,
  dark: darkTheme,
};

export default themeCreator("dark");

// https://mui.com/customization/default-theme/
// https://mui.com/customization/dark-mode/#main-content
