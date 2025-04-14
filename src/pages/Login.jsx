import { Box, Link as MuiLink, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { LoginForm } from "../components/LogIn";
export const Login = () => {
  return (
    <Box>
      <Typography variant="h2">Login</Typography>
      <LoginForm />
      <Typography variant="caption">
        Don't have an account yet? Register{" "}
        <MuiLink component={RouterLink} to="/signup">
          here
        </MuiLink>
      </Typography>
    </Box>
  );
};
