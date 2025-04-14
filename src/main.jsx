import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { darkMode } from "./theme.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider theme={darkMode}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>
);
