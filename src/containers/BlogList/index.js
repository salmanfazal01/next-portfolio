import {
  Divider,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

const BlogList = () => {
  const theme = useTheme();

  return (
    <List>
      {[...Array(3)].map((_, i) => (
        <React.Fragment key={i}>
          <ListItem button sx={{ p: theme.spacing(3, 0) }}>
            <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
              <Grid item xs={12} md={3}>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.primary.contrastText,
                    pl: 1,
                  }}
                >
                  Feb 26 • Blog
                </Typography>
              </Grid>
              <Grid item xs={11} md>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Let this be a lesson to you
                </Typography>
              </Grid>
              <Grid item xs={1} md={1}>
                <Typography sx={{ color: theme.palette.primary.yellow }}>
                  →
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default BlogList;
