import { Box, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router";
import Lottie from "lottie-react";
import shimmer from "../assets/shimmer.json";
export const Home = () => {
  return (
    <Box>
      {/* <Lottie animationData={shimmer} id="home_animation" /> */}
      <h1>Home</h1>
      <p>Welcome to the Portal.</p>
      <p>
        To get started, sign up{" "}
        <MuiLink component={RouterLink} to="/signup">
          here.
        </MuiLink>
      </p>
      <p>
        Already have an account?{" "}
        <MuiLink component={RouterLink} to="/login">
          Login
        </MuiLink>
      </p>
    </Box>
  );
};
