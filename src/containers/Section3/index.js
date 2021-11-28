import {
  Typography,
  Box,
  useTheme,
  Container,
  Grid,
  Stack,
} from "@mui/material";
import React from "react";
import ServiceCard from "../../components/ServiceCard";
import InboxIcon from "@mui/icons-material/Inbox";
import CreateIcon from "@mui/icons-material/Create";
import AirplayIcon from "@mui/icons-material/Airplay";
import { Masonry } from "@mui/lab";
import SectionText from "../../components/SectionText";

const Section3 = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.gray1,
        padding: theme.spacing(7, 3, 3),
      }}
    >
      <Container>
        {/* Cards */}
        <Grid
          container
          spacing={4}
          sx={{
            [theme.breakpoints.up("md")]: {
              marginTop: "-27vh",
            },
          }}
        >
          <Grid item xs={12} md={4}>
            <ServiceCard
              active
              Icon={InboxIcon}
              title="Product Designer."
              subtitle="124 Projects"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard
              Icon={CreateIcon}
              title="Branding Designer."
              subtitle="37 Projects"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard
              Icon={AirplayIcon}
              title="Full Stack Developer."
              subtitle="62 Projects"
            />
          </Grid>
        </Grid>

        {/* Logos */}
        <Stack
          spacing={3}
          direction="row"
          flexWrap="wrap"
          sx={{
            p: 3,
            color: theme.palette.primary.contrastText,
            [theme.breakpoints.up("md")]: {
              p: theme.spacing(12, 6),
            },
          }}
        >
          <Typography variant="h4">PLACE LOGO</Typography>
          <Typography variant="h4">PLACE LOGO HERE</Typography>
          <Typography variant="h4">LOGO</Typography>
          <Typography variant="h4">PLACE LOGO HERE</Typography>
          <Typography variant="h4">PLACE LOGO HERE</Typography>
          <Typography variant="h4">PLACE LOGO HERE</Typography>
          <Typography variant="h4">PLACE LOGO HERE</Typography>
        </Stack>

        {/* Projects */}
        <Masonry columns={{ xs: 1, md: 2 }} spacing={{ xs: 5, md: 12 }}>
          <Box>
            <SectionText
              header="Portfolio"
              title="All Creative Works, Selected Projects"
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              button="Explore more"
              maxWidth={350}
            />
          </Box>

          {[...Array(3)].map((_, i) => (
            <Box
              key={i}
              sx={{
                minHeight: "200px",
                backgroundColor: theme.palette.background.gray2,
                my: 5,
                [theme.breakpoints.up("md")]: {
                  minHeight: "600px",
                  my: 13,
                },
              }}
            ></Box>
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Section3;
