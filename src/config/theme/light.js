import { createTheme } from "@mui/material";

const colors = {
  gray1: "#323647",
  gray2: "#242734",
  gray3: "#424657",
  disabled: "#666875",
  main: "#000",
  text: "#000",
  contrastText: "#A8ABB6",
  yellow: "#FFAF29",
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.main,
      ...colors,
    },
    background: {
      main: colors.main,
      ...colors,
    },
    text: {
      primary: colors.text,
    },
  },
});
