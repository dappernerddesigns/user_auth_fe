import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  emailValid: false,
  password: "",
  confirmPassword: "",
  passwordValid: false,
  passwordsMatch: false,
  touched: {
    email: false,
    password: false,
    confirmPassword: false,
  },
};

const validEmailRegex =
  /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
const validPasswordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const formSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;

      if (field === "email") {
        state.emailValid = validEmailRegex.test(value);
      }
      if (field === "password") {
        state.passwordValid = validPasswordRegex.test(value);
        state.passwordsMatch = value === state.confirmPassword;
      }
      if (field === "confirmPassword") {
        state.passwordsMatch = value === state.password;
      }
    },
    setTouched: (state, action) => {
      state.touched[action.payload] = true;
    },
    resetRegisterForm: () => initialState,
  },
});

export const { setField, setTouched, resetRegisterForm } = formSlice.actions;
export default formSlice.reducer;
