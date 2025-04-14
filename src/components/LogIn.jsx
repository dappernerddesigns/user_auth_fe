import { Button, Stack, TextField, Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setField, setTouched, setError } from "../store/loginSlice";
import { resetRegisterForm } from "../store/registrationFormSlice";
import { loginUser } from "../api";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newUserEmail = useSelector((state) => state.signupForm.email);
  const { email, password, error } = useSelector((state) => state.loginForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log({ email, password });
      await loginUser({
        email: newUserEmail ? newUserEmail : email,
        plainTextPassword: password,
      });
      dispatch(resetRegisterForm());
      navigate("/profile");
    } catch (err) {
      console.log(err);
      dispatch(setError(true));
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit} method="post" id="login_form">
      <Stack width="80%" m="auto">
        <TextField
          variant="standard"
          required
          id="emailInput"
          label="email"
          value={newUserEmail ? newUserEmail : email}
          onChange={(e) => {
            dispatch(setError(false));
            dispatch(setField({ field: "email", value: e.target.value }));
          }}
          onBlur={() => dispatch(setTouched("email"))}
          error={error}
        />
        <TextField
          variant="standard"
          required
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => {
            dispatch(setError(false));
            dispatch(setField({ field: "password", value: e.target.value }));
          }}
          onBlur={() => {
            dispatch(setTouched("password"));
          }}
          error={error}
        />
        {error ? (
          <Typography variant="caption">
            Email or password is incorrect
          </Typography>
        ) : null}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={error}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
};
