import {
  Button,
  Stack,
  Link as MuiLink,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
  ListItemIcon,
  Box,
  Divider,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router";
import portal from "../assets/purple_portal.png";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../store/features/userSlice";
import { resetLoginForm } from "../store/features/loginSlice";
import { useState } from "react";
import { AccountCircle, Logout } from "@mui/icons-material";

export const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, error } = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch(clearUser());
    dispatch(resetLoginForm());
    navigate("/");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  return (
    <Stack
      id="nav"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: "100%", borderBottom: "2px solid #7f5af0", height: "80px" }}
    >
      <MuiLink component={RouterLink} to="/" aria-label="Go back to home">
        <img
          src={portal}
          id="portal-nav"
          alt="Portal logo, clickable to go home"
        />
      </MuiLink>
      <Stack direction="row" id="nav-buttons" spacing={3} sx={{ mr: "10px" }}>
        {username && !error ? (
          <Box id="profile_menu">
            <IconButton
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              aria-label="User menu"
            >
              <AccountCircle color="secondary" sx={{ fontSize: 60 }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem
                onClick={handleProfile}
                value="profile"
                aria-label="Click to go to profile"
              >
                <ListItemIcon>
                  <AccountCircle color="secondary" fontSize="small" />
                </ListItemIcon>
                Profile
              </MenuItem>
              <Divider />

              <MenuItem
                onClick={handleLogout}
                value="logout"
                aria-label="Click to logout"
              >
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <>
            <Button
              component={RouterLink}
              variant="outlined"
              color="primary"
              to="/login"
              aria-label="Login"
            >
              Login
            </Button>
            <Button
              component={RouterLink}
              variant="contained"
              to="/signup"
              aria-label="Sign up"
            >
              Sign up
            </Button>
          </>
        )}
      </Stack>
    </Stack>
  );
};
