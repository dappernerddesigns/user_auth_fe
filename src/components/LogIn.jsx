import { Button, Stack, TextField, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setField, setTouched } from "../store/loginSlice";
import { resetRegisterForm } from "../store/registrationFormSlice";
import { loginUser } from "../api";
import { useNavigate } from "react-router";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newUserEmail = useSelector((state) => state.signupForm.email);
  const { email, password } = useSelector((state) => state.loginForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log({ email, password });
      await loginUser({
        email: newUserEmail ? newUserEmail : email,
        plainTextPassword: password,
      });
      if (newUserEmail) {
        dispatch(resetRegisterForm());
      }
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit} method="post">
      <Stack>
        <TextField
          variant="standard"
          required
          id="emailInput"
          label="email"
          value={newUserEmail ? newUserEmail : email}
          onChange={(e) => {
            dispatch(setField({ field: "email", value: e.target.value }));
          }}
          onBlur={() => dispatch(setTouched("email"))}
        />
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
        />
        <Button type="submit">Login</Button>
      </Stack>
    </Box>
  );
};
