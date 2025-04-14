import { Box, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { useEffect } from "react";
import Granim from "granim";
export const Home = () => {
  useEffect(() => {
    new Granim({
      element: "#background",
      direction: "diagonal",
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            ["#16161a", "#7f5af0"],
            ["#7f5af0", "#2cb67d"],
            ["#16161a", "#7f5af0"],
          ],
        },
      },
    });
  }, []);
  return (
    <Box id="home">
      <Box id="welcome">
        <h1>Welcome to the Portal</h1>
        <p>
          To get started, lets get you signed up{" "}
          <MuiLink component={RouterLink} to="/signup" color="inherit">
            here.
          </MuiLink>
        </p>
        <p>
          Already have an account?{" "}
          <MuiLink component={RouterLink} to="/login" color="inherit">
            Login
          </MuiLink>
        </p>
      </Box>
      <canvas id="background"></canvas>
    </Box>
  );
};
