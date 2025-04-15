import { Button, Stack, TextField, Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setField, setTouched, setError } from "../store/features/loginSlice";
import { resetRegisterForm } from "../store/features/registrationFormSlice";

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

  if (newUserEmail && !email) {
    dispatch(setField({ field: "email", value: newUserEmail }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if ((email === "" && !newUserEmail) || password === "") {
      dispatch(setTouched("email"));
      dispatch(setTouched("password"));
      dispatch(setError(true));
    }
    try {
      setIsLoading(true);
      const token = await loginUser({
        email: email,
        plainTextPassword: password,
      });
      dispatch(setField({ field: "password", value: "" }));
      if (token) {
        navigate("/profile");
        dispatch(resetRegisterForm());
      }
    } catch (err) {
      dispatch(setError(true));
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit} method="post" id="login_form">
      <Stack sx={{ m: "auto", width: "80%" }}>
        <TextField
          variant="standard"
          id="emailInput"
          label="Email*"
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
          id="password"
          label="Password*"
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
