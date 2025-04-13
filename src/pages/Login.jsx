import { Box, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router";
import { LoginForm } from "../components/LogIn";
export const Login = () => {
  return (
    <Box>
      <h1>Login</h1>
      <LoginForm />
      <p>
        Don't have an account yet? Register{" "}
        <MuiLink component={RouterLink} to="/signup">
          here
        </MuiLink>
      </p>
    </Box>
  );
};
