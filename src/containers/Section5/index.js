import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SectionText from "../../components/SectionText";
import ResponsiveText from "../../components/ResponsiveText";
import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import Rotate from "react-reveal/Rotate";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";

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
        <Fade bottom>
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
              <Flash>
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
              </Flash>
            </Grid>
          </Grid>
        </Fade>

        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={4}
          sx={{
            mt: 5,
            [theme.breakpoints.up("md")]: {
              mt: 12,
            },
          }}
        >
          <Rotate>
            <EmojiEmotionsIcon
              sx={{ fontSize: 70, color: theme.palette.primary.yellow }}
            />
          </Rotate>

          <Slide bottom>
            <Typography variant="h6">
              <b>Thanks for scrolling,</b> that's all folks.
            </Typography>
          </Slide>

          <Slide bottom>
            <Stack
              spacing={1}
              direction="row"
              alignItems="center"
              sx={{ pt: 3 }}
            >
              <IconButton>
                <LinkedIn />
              </IconButton>

              <IconButton>
                <Facebook />
              </IconButton>

              <IconButton>
                <Twitter />
              </IconButton>
            </Stack>
          </Slide>
        </Stack>
      </Container>
    </Box>
  );
};

export default Section5;
