import { CssBaseline } from "@mui/material";
import CustomThemeProvider from "../src/context/themeContext";

function MyApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}

export default MyApp;
