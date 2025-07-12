import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
    success: {
      main: "#4caf50",
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#f9f9f9",
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, Arial",
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
      fontFamily: "Poppins",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
      fontFamily: "Poppins",
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 500,
      fontFamily: "Poppins",
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "Roboto",
    },
    caption: {
      fontSize: "0.75rem",
      color: "#666",
    },
  },
});
export default theme;
