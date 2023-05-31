import { Outlet } from "react-router-dom";
import Header from "../components/layout/header";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#234124',
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}
