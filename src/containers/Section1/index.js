import { Container, Typography, Box } from "@mui/material";
import React from "react";
import Navigation from "../../components/Navigation";

const Section1 = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.background.gray1,
        padding: theme.spacing(3),
        minHeight: "80vh",
        [theme.breakpoints.up("md")]: {
          paddingTop: theme.spacing(7),
        },
      })}
    >
      <Container>
        <Navigation />
      </Container>
    </Box>
  );
};

export default Section1;
