import ReactDOM from "react-dom";
import { Home } from "./Pages/Home";
import Navbar from "./Components/NavBar";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";



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
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <ThemeProvider theme={theme}>
            <Home />
            <CssBaseline />
          </ThemeProvider>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));