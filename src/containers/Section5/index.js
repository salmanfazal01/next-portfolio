import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  useTheme,
} from "@mui/material";
import React from "react";
import SectionText from "../../components/SectionText";
import ResponsiveText from "../../components/ResponsiveText";

const Section5 = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        boxSizing: "unset",
        backgroundColor: theme.palette.background.gray1,
        p: 3,
        [theme.breakpoints.up("md")]: {
          p: theme.spacing(12, 3),
        },
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <SectionText
              title={
                <span>
                  Got a project?
                  <br />
                  Let's talk.
                </span>
              }
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              button="hi@carlos.com"
              maxWidth={350}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <ResponsiveText variant="h4" sx={{ fontWeight: 600 }}>
                    Estimate your project? <br /> Let me know here.
                  </ResponsiveText>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    label="What's your name?"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    label="Your fancy email"
                    type="email"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    label="Tell me about your project"
                    multiline
                    rows={3}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} container justifyContent="flex-end">
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    sx={{
                      backgroundColor: theme.palette.background.yellow,
                      minWidth: 150,
                      mt: 3,
                    }}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section5;
