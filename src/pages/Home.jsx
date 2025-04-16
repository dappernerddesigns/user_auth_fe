import { Box, Link as MuiLink, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import portal from "../assets/purple_portal.png";
import { useSelector } from "react-redux";
export const Home = () => {
  const { username } = useSelector((state) => state.user);
  return (
    <Box id="home">
      <Box id="welcome" sx={{ width: "400px", height: "375px" }}>
        <Typography variant="h2">
          Welcome to Portal
          <img src={portal} id="portal" alt="Portal logo" />
        </Typography>
        {username ? null : (
          <>
            <Typography variant="body1">
              To get started, lets get you signed up{" "}
              <MuiLink component={RouterLink} to="/signup">
                here.
              </MuiLink>
            </Typography>
            <Typography variant="body1">
              Already have an account?{" "}
              <MuiLink component={RouterLink} to="/login">
                Login
              </MuiLink>
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};
