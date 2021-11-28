import React from "react";
import {
  Typography,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

const ResponsiveText = ({
  children,
  variant = "body1",
  blueText,
  sx = {},
  ...props
}) => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant={variant}
        sx={{
          color: blueText && theme.palette.primary.contrastText,
          ...sx,
        }}
        // {...props}
      >
        {children}
      </Typography>
    </ThemeProvider>
  );
};

export default ResponsiveText;
