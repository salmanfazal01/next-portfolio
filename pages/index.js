import { useTheme, Box } from "@mui/material";
import React from "react";
import ScrollToTop from "../src/components/ScrollToTop";
import Section1 from "../src/containers/Section1";
import Section2 from "../src/containers/Section2";
import Section3 from "../src/containers/Section3";
import Section4 from "../src/containers/Section4";
import Section5 from "../src/containers/Section5";

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />

      <ScrollToTop />
    </Box>
  );
};

export default Home;
