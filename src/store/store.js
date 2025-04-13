import { configureStore } from "@reduxjs/toolkit";
import registrationFormReducer from "./registrationFormSlice";
import loginReducer from "./loginSlice";
export default configureStore({
  reducer: {
    signupForm: registrationFormReducer,
    loginForm: loginReducer,
  },
});
