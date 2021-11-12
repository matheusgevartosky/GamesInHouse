import ReactDOM from "react-dom";
import { Home } from "./Pages/Home";
import Navbar from "./Components/NavBar";
import { BrowserRouter } from "react-router-dom";



import { CssBaseline,  createTheme } from "@material-ui/core";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        h1 {
          margin: 0;
          color: #fff;
          font-size: 2.5rem;
          font-weight: bold;
          text-align: center;
        }
      `,
    },
  },
});


const Index = () => {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
     <Navbar />
      <Home />
      <CssBaseline />
    </ThemeProvider>
    </BrowserRouter>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));