import ReactDOM from "react-dom";
import { Home } from "./Pages/Home";


import { CssBaseline } from "@material-ui/core";


const Index = () => {
  return (
    <div>
      <Home />
      <CssBaseline />
    </div>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));