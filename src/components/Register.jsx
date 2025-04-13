import { Button, Stack, TextField, Box } from "@mui/material";
import { setField, setTouched } from "../store/registrationFormSlice";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../api";
import { redirect } from "react-router";

export const Register = () => {
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
  } = useSelector((state) => state.signupForm);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailValid || !passwordValid || !passwordsMatch) {
      dispatch(setTouched("email"));
      dispatch(setTouched("password"));
      dispatch(setTouched("confirmPassword"));
      return;
    }
    try {
      await createAccount({ username, email, password });
      return redirect("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit} method="post">
      <Stack width="80%" m="auto">
        <TextField
          variant="standard"
          id="outlined-required"
          label="Username*"
          value={username}
          onChange={(e) => {
            dispatch(setField({ field: "username", value: e.target.value }));
          }}
        />
        <TextField
          variant="standard"
          required
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
        <p>
          Passwords must be a minimum of 8 digits and contain at least one
          uppercase letter, one lowercase letter, one digit and one special
          character
        </p>
        <TextField
          variant="standard"
          required
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
          required
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
        <Button type="submit">Sign Up</Button>
      </Stack>
    </Box>
  );
};
