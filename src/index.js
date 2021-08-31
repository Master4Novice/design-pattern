import React from "react";
import ReactDOM from "react-dom";
import DesignPatternApp from "./design-pattern/DesignPatternApp";
import theme from "./theme.tsx";
import { ThemeProvider } from "@material-ui/core/styles";
ReactDOM.render(<ThemeProvider theme={theme}><DesignPatternApp /></ThemeProvider>, document.getElementById("root"));