import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  alpha,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { minWidth } from "@mui/system";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Button = ({ children, active }) => {
    if (!active) {
      return (
        <Typography
          sx={(theme) => ({
            letterSpacing: "0.7px",
            color: theme.palette.primary.disabled,
            fontSize: "26px",
            fontWeight: 600,
            cursor: "pointer",
            "&:hover": {
              color: theme.palette.primary.contrastText,
            },
          })}
        >
          {children}
        </Typography>
      );
    } else {
      return (
        <Typography
          sx={(theme) => ({
            letterSpacing: "1px",
            fontSize: "26px",
            fontWeight: 600,
            cursor: "pointer",
            "&:after": {
              position: "relative",
              content: '""',
              width: "6px",
              left: "50%",
              display: "block",
              marginTop: "2px",
              borderBottom: `5px dotted ${theme.palette.primary.yellow}`,
            },
          })}
        >
          {children}
        </Typography>
      );
    }
  };

  const CustomMenuItem = ({ children, active }) => {
    if (active) {
      return (
        <MenuItem
          onClick={handleClose}
          sx={(theme) => ({
            minWidth: 100,
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity
            ),
          })}
        >
          {children}
        </MenuItem>
      );
    } else {
      return (
        <MenuItem sx={{ minWidth: 100 }} onClick={handleClose}>
          {children}
        </MenuItem>
      );
    }
  };

  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <EmojiEmotionsIcon
          sx={(theme) => ({
            color: theme.palette.primary.yellow,
            fontSize: "3rem",
            cursor: "pointer",
          })}
        />

        <Hidden smDown>
          <Stack direction="row" spacing={2}>
            <Button active>Services</Button>
            <Button>Works</Button>
            <Button>Blog</Button>
          </Stack>
        </Hidden>

        <Hidden smUp>
          <IconButton>
            <MenuIcon onClick={(e) => setAnchorEl(e.currentTarget)} />
          </IconButton>
        </Hidden>
      </Stack>

      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <CustomMenuItem active>Service</CustomMenuItem>
        <CustomMenuItem>Works</CustomMenuItem>
        <CustomMenuItem>Blog</CustomMenuItem>
      </Menu>
    </div>
  );
};

export default Navigation;
