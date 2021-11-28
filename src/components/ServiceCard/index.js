import { Grid, Box, Icon, Typography, useTheme, Stack } from "@mui/material";
import React from "react";

const ServiceCard = ({ Icon, title, subtitle, active }) => {
  const theme = useTheme();

  return (
    <Stack
      alignItems="flex-end"
      justifyContent="center"
      direction="row"
      sx={{
        boxSizing: "unset",
        padding: 3,
        backgroundColor: active
          ? theme.palette.background.yellow
          : theme.palette.background.gray3,
        [theme.breakpoints.up("md")]: {
          padding: 6,
          minHeight: 250,
        },
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          {Icon && <Icon sx={{ fontSize: "2.5rem" }} />}
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: active && theme.palette.common.white,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              pt: 2,
              fontWeight: active && 600,
              color: active
                ? theme.palette.common.white
                : theme.palette.primary.contrastText,
            }}
          >
            {subtitle}
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ServiceCard;
