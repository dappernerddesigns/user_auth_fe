import { Box, Link as MuiLink, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import portal from "../assets/purple_portal.png";
export const Home = () => {
  return (
    <Box id="home">
      <Box id="welcome">
        <Typography variant="h2">Welcome to Portal</Typography>
        <img src={portal} id="portal" />
        <Typography variant="body1">
          To get started, lets get you signed up{" "}
          <MuiLink component={RouterLink} to="/signup">
            here.
          </MuiLink>
        </Typography>
        <p>
          Already have an account?{" "}
          <MuiLink component={RouterLink} to="/login">
            Login
          </MuiLink>
        </p>
      </Box>
    </Box>
  );
};
