import "./App.css";
import { Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { UserPage } from "./pages/UserPage";
import { CssBaseline } from "@mui/material";
// import { useEffect } from "react";
// import Granim from "granim";
import { Navigation } from "./components/Navigation";
function App() {
  // useEffect(() => {
  //   new Granim({
  //     element: "#background",
  //     direction: "diagonal",
  //     isPausedWhenNotInView: true,
  //     states: {
  //       "default-state": {
  //         gradients: [
  //           ["#16161a", "#7f5af0"],
  //           ["#7f5af0", "#2cb67d"],
  //           ["#16161a", "#7f5af0"],
  //         ],
  //       },
  //     },
  //   });
  // }, []);
  return (
    <>
      <Navigation />
      {/* <canvas id="background"></canvas> */}
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
