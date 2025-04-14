import { Box, Link as MuiLink, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

import { Register } from "../components/Register";

export const SignUp = () => {
  return (
    <Box id="sign_up">
      <Typography variant="h2">Register</Typography>
      <Register />
      <p>
        Have an account already? Login{" "}
        <MuiLink component={RouterLink} to="/login">
          here
        </MuiLink>
      </p>
    </Box>
  );
};
