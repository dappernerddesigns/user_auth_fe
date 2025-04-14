import { Box, Link as MuiLink, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";

import { Register } from "../components/Register";

export const SignUp = () => {
  return (
    <Box id="sign_up">
      <Typography variant="h2" sx={{ mb: 4 }}>
        Register
      </Typography>
      <Register />
      <Typography variant="subtitle1" sx={{ mt: 4 }}>
        Have an account already? Login{" "}
        <MuiLink component={RouterLink} to="/login">
          here
        </MuiLink>
      </Typography>
    </Box>
  );
};
