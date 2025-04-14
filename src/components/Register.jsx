import {
  Button,
  Stack,
  TextField,
  Box,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { setField, setTouched, setError } from "../store/registrationFormSlice";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../api";
import { useNavigate, Link as RouterLink } from "react-router";
import Lottie from "lottie-react";
import loadingDots from "../assets/loading.json";
import { useState } from "react";
export const Register = () => {
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    username,
    email,
    password,
    confirmPassword,
    emailValid,
    passwordValid,
    passwordsMatch,
    touched,
    error,
  } = useSelector((state) => state.signupForm);

  // form validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailValid || !passwordValid || !passwordsMatch || username === "") {
      dispatch(setTouched("email"));
      dispatch(setTouched("password"));
      dispatch(setTouched("confirmPassword"));
      dispatch(setTouched("username"));
      return;
    }
    try {
      setIsloading(true);
      await createAccount({ username, email, password });
      navigate("/login");
    } catch (err) {
      console.log(err);
      dispatch(setError(true));
      setIsloading(false);
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      method="post"
      id="sign_up_form"
    >
      {error ? (
        <Typography variant="caption">
          A user already exists in the database,{" "}
          <MuiLink component={RouterLink} to="/login">
            Login
          </MuiLink>{" "}
          instead
        </Typography>
      ) : null}
      <Stack width="80%" m="auto">
        <TextField
          variant="standard"
          id="outlined-required"
          label="Username*"
          value={username}
          onChange={(e) => {
            dispatch(setError(false));
            dispatch(setField({ field: "username", value: e.target.value }));
          }}
          onBlur={() => dispatch(setTouched("username"))}
          error={touched.username && username === ""}
          helperText={
            touched.username && username === "" ? "Please enter username." : " "
          }
        />
        <TextField
          variant="standard"
          id="emailInput"
          label="email"
          value={email}
          onChange={(e) =>
            dispatch(setField({ field: "email", value: e.target.value }))
          }
          onBlur={() => dispatch(setTouched("email"))}
          error={touched.email && !emailValid}
          helperText={
            touched.email && !emailValid ? "Please enter a valid email." : " "
          }
        />
        <Typography variant="caption">
          Passwords must be a minimum of 8 digits and contain at least one
          uppercase letter, one lowercase letter, one digit and one special
          character
        </Typography>
        <TextField
          variant="standard"
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => {
            dispatch(setField({ field: "password", value: e.target.value }));
          }}
          onBlur={() => {
            dispatch(setTouched("password"));
          }}
          error={touched.password && !passwordValid}
          helperText={
            touched.password && !passwordValid
              ? "Double check the password requirements"
              : " "
          }
        />
        <TextField
          variant="standard"
          label="Re-enter password"
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            dispatch(
              setField({ field: "confirmPassword", value: e.target.value })
            );
          }}
          onBlur={() => {
            dispatch(setTouched("confirmPassword"));
          }}
          error={touched.confirmPassword && !passwordsMatch}
          helperText={
            touched.confirmPassword && !passwordsMatch
              ? "Passwords do not match"
              : ""
          }
        />
        {isLoading ? (
          <>
            <Lottie animationData={loadingDots} id="loading_dots" />
            <Typography variant="caption">
              Adding you to the database, please wait
            </Typography>
          </>
        ) : (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={error}
          >
            Sign Up
          </Button>
        )}
      </Stack>
    </Box>
  );
};
