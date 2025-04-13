import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  password: "",
  touched: { email: false, password: false },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
      if (field === "email") {
        state.email = value;
      }
      if (field === "password") {
        state[field] = value;
      }
    },
    setTouched: (state, action) => {
      state.touched[action.payload] = true;
    },
    resetLoginForm: () => initialState,
  },
});

export const { setField, setTouched, resetLoginForm } = loginSlice.actions;
export default loginSlice.reducer;
