import ReactDOM from "react-dom";
import { Home } from "./Pages/Home";
import GameList from "./Pages/GameList";
import GameNews from "./Pages/GameNews";
import GameDetails from "./Pages/GameDetails";

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
      <ThemeProvider theme={theme}>
      <Navbar />
      <CssBaseline />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/games" component={GameList} />
          <Route exact path="/news" component={GameNews} />
          <Route exact path="/details" component={GameDetails} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));