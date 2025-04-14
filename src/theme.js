import { createTheme } from "@mui/material/styles";

export const darkMode = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2cb67d",
    },
    secondary: {
      main: "#7f5af0",
    },
    background: {
      default: "#242629",
      paper: "#16161a",
    },
    text: {
      primary: "#fffffe",
      secondary: "#94a1b2",
    },
    warning: {
      main: "#fbdd74",
    },
  },
});
