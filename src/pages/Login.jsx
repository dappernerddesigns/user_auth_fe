import { Box, Link as MuiLink, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { LoginForm } from "../components/LogIn";
export const Login = () => {
  return (
    <Box id="login">
      <Typography variant="h2" sx={{ mb: 4 }}>
        Login
      </Typography>
      <LoginForm />
      <Typography variant="subtitle1" sx={{ mt: 4 }}>
        Don't have an account yet? Register{" "}
        <MuiLink component={RouterLink} to="/signup">
          here
        </MuiLink>
      </Typography>
    </Box>
  );
};
