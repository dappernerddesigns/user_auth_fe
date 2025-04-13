import { configureStore } from "@reduxjs/toolkit";
import registrationFormReducer from "./registrationFormSlice";
import loginReducer from "./loginSlice";
import userReducer from "./userSlice";
export default configureStore({
  reducer: {
    signupForm: registrationFormReducer,
    loginForm: loginReducer,
    user: userReducer,
  },
});
