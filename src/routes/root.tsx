import { Outlet } from "react-router-dom";
import Header from "../components/layout/header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber } from "@mui/material/colors";
import Footer from "../components/layout/Footer";

const theme = createTheme({
  palette: {
    primary: amber,
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
        <Footer />
      </div>
    </ThemeProvider>
  );
}
