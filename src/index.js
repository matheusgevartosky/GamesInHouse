import ReactDOM from "react-dom";
import { Home } from "./Pages/Home";


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
    <ThemeProvider theme={theme}>
      <Home />
      <CssBaseline />
    </ThemeProvider>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));