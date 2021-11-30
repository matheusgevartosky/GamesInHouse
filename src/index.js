import ReactDOM from "react-dom";
import { Home } from "./Pages/Home";
import GameList from "./Pages/GameList";
import GameNews from "./Pages/GameNews";
import GameDetails from "./Pages/GameDetails";

import Navbar from "./Components/NavBar";
import {BrowserRouter, Route,Routes, Link, Switch} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline,  createTheme } from "@material-ui/core";


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
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Navbar />
      <CssBaseline />
        <Routes>
          <Route  path="/" element={< Home />} />
          <Route  path="/games" element={< GameList />} />
          <Route  path="/news" element={< GameNews />} />
          <Route  path="/details" element={< GameDetails />} />
        </Routes>
        </BrowserRouter>
      </ThemeProvider>
    
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));