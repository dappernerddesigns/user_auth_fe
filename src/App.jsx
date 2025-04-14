import "./App.css";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { UserPage } from "./pages/UserPage";
import { CssBaseline } from "@mui/material";
function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
