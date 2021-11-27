import { createTheme } from "@mui/material";

const colors = {
  gray1: "#323647",
  gray2: "#242734",
  gray3: "#424657",
  disabled: "#666875",
  main: "#EBEBEB",
  text: "#EBEBEB",
  contrastText: "#A8ABB6",
  yellow: "#FFAF29",
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
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
