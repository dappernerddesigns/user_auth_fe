import { createSlice } from "@reduxjs/toolkit";

const validEmailRegex =
  /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
const validPasswordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const initialState = {
  email: "",
  password: "",
  touched: { email: false, password: false },
  error: false,
  emailValid: false,
  passwordValid: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;

      const validEmail = validEmailRegex.test(value);

      state.email = value;
      state.emailValid = validEmail;
    },
    setPassword: (state, action) => {
      const { field, value } = action.payload;
      const validPassword = validPasswordRegex.test(value);

      state[field] = value;

      state.passwordValid = validPassword;
    },
    setTouched: (state, action) => {
      state.touched[action.payload] = true;
    },
    resetLoginForm: () => initialState,
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setEmail, setPassword, setTouched, resetLoginForm, setError } =
  loginSlice.actions;
export default loginSlice.reducer;
