import { Box, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router";

import { Register } from "../components/Register";

export const SignUp = () => {
  return (
    <Box>
      <h1>Sign Up Here</h1>
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
