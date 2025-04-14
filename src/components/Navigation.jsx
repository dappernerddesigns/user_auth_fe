import { Button, Stack, Link as MuiLink, Menu, MenuItem } from "@mui/material";
import { Link as RouterLink } from "react-router";
import portal from "../assets/purple_portal.png";
import { useSelector } from "react-redux";
import { AccountCircle, Logout } from "@mui/icons-material";

export const Navigation = () => {
  const { username, error } = useSelector((state) => state.user);
  return (
    <Stack id="nav" direction="row" justifyContent="space-between">
      <MuiLink component={RouterLink} to="/">
        <img src={portal} id="portal-nav" />
      </MuiLink>
      <Stack direction="row" height={40} id="nav-buttons" spacing={3}>
        {username && !error ? (
          <MuiLink component={RouterLink} to="/profile">
            <AccountCircle />
          </MuiLink>
        ) : (
          <>
            <Button
              component={RouterLink}
              variant="outlined"
              color="primary"
              to="/login"
            >
              Login
            </Button>
            <Button component={RouterLink} variant="contained" to="/signup">
              Sign up
            </Button>
          </>
        )}
      </Stack>
    </Stack>
  );
};
