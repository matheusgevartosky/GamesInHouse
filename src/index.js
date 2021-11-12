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