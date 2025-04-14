import { Button, Stack, TextField, Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setField, setTouched, setError } from "../store/loginSlice";
import { resetRegisterForm } from "../store/registrationFormSlice";
import { loginUser } from "../api";
import { useNavigate } from "react-router";
import { useState } from "react";
import Lottie from "lottie-react";
import loadingDots from "../assets/loading.json";

export const LoginForm = () => {
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newUserEmail = useSelector((state) => state.signupForm.email);
  const { email, password, error } = useSelector((state) => state.loginForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await loginUser({
        email: newUserEmail ? newUserEmail : email,
        plainTextPassword: password,
      });
      dispatch(resetRegisterForm());
      navigate("/profile");
    } catch (err) {
      dispatch(setError(true));
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit} method="post" id="login_form">
      <Stack sx={{ m: "auto", width: "80%" }}>
        <TextField
          variant="standard"
          required
          id="emailInput"
          label="Email"
          value={newUserEmail ? newUserEmail : email}
          onChange={(e) => {
            if (loading) setIsLoading(!loading);
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
            if (loading) setIsLoading(!loading);
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
        {loading && !error ? (
          <Lottie animationData={loadingDots} className="loading_dots" />
        ) : (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={error}
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        )}
      </Stack>
    </Box>
  );
};
