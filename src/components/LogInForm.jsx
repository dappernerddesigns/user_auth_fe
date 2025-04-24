import { Button, Stack, TextField, Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  setTouched,
  setError,
  resetLoginForm,
} from "../store/features/loginSlice";
import { resetRegisterForm } from "../store/features/registrationFormSlice";
import { setId } from "../store/features/userSlice";
import { loginUser } from "../api";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingDots from "../assets/loading.json";

export const LoginForm = () => {
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email, password, error, emailValid, passwordValid } = useSelector(
    (state) => state.loginForm
  );

  useEffect(() => {
    dispatch(resetLoginForm());
    dispatch(resetRegisterForm());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailValid || !passwordValid) {
      dispatch(setTouched("email"));
      dispatch(setTouched("password"));
      dispatch(setError(true));
      return;
    }

    try {
      setIsLoading(true);
      const { token, id } = await loginUser({
        email: email,
        plainTextPassword: password,
      });
      if (token && id) {
        dispatch(setId(id));
        navigate("/profile");
      }
    } catch (err) {
      setIsLoading(false);
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
          value={email}
          onChange={(e) => {
            if (loading) {
              setIsLoading((prevState) => !prevState);
            }
            dispatch(setError(false));
            dispatch(setEmail({ field: "email", value: e.target.value }));
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
            if (loading) {
              setIsLoading((prevState) => !prevState);
            }
            dispatch(setError(false));
            dispatch(setPassword({ field: "password", value: e.target.value }));
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
