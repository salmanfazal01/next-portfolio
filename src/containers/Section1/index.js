/* eslint-disable @next/next/no-img-element */
import {
  Container,
  Typography,
  Box,
  Hidden,
  Grid,
  Stack,
  IconButton,
  useTheme,
} from "@mui/material";
import React from "react";
import Navigation from "../../components/Navigation";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from "react-reveal/Bounce";
import Person from "../../assets/person.png";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import SectionText from "../../components/SectionText";
import ResponsiveText from "../../components/ResponsiveText";

const Section1 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.gray1,
        boxSizing: "unset",
        overflow: "hidden",
        p: 3,
        [theme.breakpoints.up("md")]: {
          minHeight: "80vh",
          p: 0,
          pt: 7,
        },
      }}
    >
      <Hidden mdDown>
        <Bounce>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              maxHeight: "80vh",
              position: "absolute",
            }}
          >
            <img
              src={Person}
              alt="Salman Fazal"
              style={{ height: "80vh", objectFit: "contain" }}
            />
          </Box>
        </Bounce>
      </Hidden>

      <Container maxWidth="lg" sx={{ maxWidth: "1280px !important" }}>
        <Navigation />

        <Grid
          container
          spacing={8}
          sx={{
            position: "relative",
            zIndex: "999",
            pt: 5,
            [theme.breakpoints.up("md")]: {
              pt: 10,
            },
            [theme.breakpoints.up("lg")]: {
              pt: 16,
            },
          }}
        >
          {/* Left side */}
          <Grid item xs={12} md={6}>
            <Stack
              sx={{
                maxWidth: 300,
                gap: 2,
                [theme.breakpoints.up("md")]: {
                  gap: 7,
                },
              }}
            >
              {/* Name */}
              <Zoom left>
                <ResponsiveText
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    "&:after": {
                      position: "relative",
                      content: '""',
                      width: theme.spacing(10),
                      display: "block",
                      marginTop: "10px",
                      borderBottom: `8px solid ${theme.palette.primary.yellow}`,
                    },
                  }}
                >
                  Carlos Mendoza.
                </ResponsiveText>
              </Zoom>

              {/* Socials */}
              <Fade bottom>
                <Grid container spacing={1}>
                  <Grid item>
                    <IconButton>
                      <LinkedIn />
                    </IconButton>
                  </Grid>

                  <Grid item>
                    <IconButton>
                      <Facebook />
                    </IconButton>
                  </Grid>

                  <Grid item>
                    <IconButton>
                      <Twitter />
                    </IconButton>
                  </Grid>
                </Grid>
              </Fade>
            </Stack>
          </Grid>

          {/* Right side */}
          <Grid item xs={12} md={6}>
            <LightSpeed right>
              <SectionText
                header="Introduction"
                title="Product Designer and Developer, based in California"
                subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                button="My story"
                rightAlign
                maxWidth={350}
              />
            </LightSpeed>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section1;
