import { Typography, Box, useTheme, Container, Grid } from "@mui/material";
import React from "react";
import SectionText from "../../components/SectionText";
import BlogList from "../BlogList";

const Section4 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        boxSizing: "unset",
        backgroundColor: theme.palette.background.gray2,
        p: 3,
        [theme.breakpoints.up("md")]: {
          p: theme.spacing(12, 3),
        },
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={5}>
            <SectionText
              header="Blog"
              title={
                <span>
                  What&#39;s new?
                  <br />
                  My blog ad news.
                </span>
              }
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <BlogList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section4;
