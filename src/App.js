import * as React from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  return (
    <React.Fragment>
      <First />
      <Second />
      <Third />
    </React.Fragment>
  );
}

export default App;
