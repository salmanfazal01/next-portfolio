import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

const SectionText = ({
  header,
  title,
  subtitle,
  button,
  buttonOnClick,
  rightAlign,
  maxWidth,
  subtitleMaxWidth,
  children,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={ ({
        maxWidth: maxWidth,
        [theme.breakpoints.up("md")]: {
          width: rightAlign && "60%",
          marginLeft: rightAlign && "auto",
        },
      })}
    >
      <Stack spacing={2}>
        {header && (
          <Typography
            className={ ({
              letterSpacing: "1px",
              color: theme.palette.primary.contrastText,
              fontWeight: 600,
            })}
          >
            &#x2015; {header}
          </Typography>
        )}

        {title && (
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
        )}

        {subtitle && (
          <Typography
            sx={ ({
              letterSpacing: "0.1px",
              color: theme.palette.primary.contrastText,
              lineHeight: "2rem",
              pt: 1,
              maxWidth: subtitleMaxWidth,
            })}
          >
            {subtitle}
          </Typography>
        )}

        {button && (
          <Button
            onClick={buttonOnClick}
            sx={ ({
              color: theme.palette.primary.yellow,
              fontSize: "18px",
              pt: 1,
            })}
          >
            {button} →
          </Button>
        )}

        {React.Children.count(children) ? (
          <Box sx={ ({ pt: 1 })}>{children}</Box>
        ) : null}
      </Stack>
    </Box>
  );
};

export default SectionText;
