import { configureStore } from "@reduxjs/toolkit";
import registrationFormReducer from "./features/registrationFormSlice";
import loginReducer from "./features/loginSlice";
import userReducer from "./features/userSlice";
export default configureStore({
  reducer: {
    signupForm: registrationFormReducer,
    loginForm: loginReducer,
    user: userReducer,
  },
});
