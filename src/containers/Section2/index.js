import {
  Stack,
  Typography,
  useTheme,
  Box,
  Container,
  Grid,
} from "@mui/material";
import React from "react";
import SectionText from "../../components/SectionText";

const Section2 = () => {
  const theme = useTheme();

  const CounterCard = ({ number, text }) => {
    return (
      <Stack container spacing={2} direction="row" alignItems="flex-end">
        <Typography
          variant="h2"
          sx={{ color: theme.palette.primary.yellow, fontWeight: 600 }}
        >
          {number}
        </Typography>

        <Typography sx={{ maxWidth: 100 }}>{text}</Typography>
      </Stack>
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.gray2,
        [theme.breakpoints.down("sm")]: {
          padding: theme.spacing(7, 3),
        },
        [theme.breakpoints.up("md")]: {
          minHeight: "70vh",
          paddingTop: theme.spacing(12),
        },
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <SectionText
              header="Contact"
              title="Any Type Of Query & Discussion."
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              button="hi@carlos.com"
              maxWidth={350}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <SectionText
              title="You can't use up creativity, the more you use, more you have in your significant mind."
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Simply dummy text of the printing and typesetting"
              subtitleMaxWidth={350}
            >
              <Grid container spacing={7}>
                <Grid item>
                  <CounterCard number={14} text="Years of Experience." />
                </Grid>
                <Grid item>
                  <CounterCard number={187} text="Satisfied Clients." />
                </Grid>
              </Grid>
            </SectionText>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section2;
