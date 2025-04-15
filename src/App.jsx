import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { UserPage } from "./pages/UserPage";
import { CssBaseline } from "@mui/material";
import { Navigation } from "./components/Navigation";
import { Error } from "./pages/Error";

function App() {
  return (
    <>
      <Navigation />
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
