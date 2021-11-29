import { Box, Container, Grid, useTheme } from "@mui/material";
import React from "react";
import Fade from "react-reveal/Fade";
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
            <Fade left>
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
            </Fade>
          </Grid>
          <Grid item xs={12} md={7}>
            <Fade right>
              <BlogList />
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section4;
