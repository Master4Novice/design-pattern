import React from "react";
import ReactDOM from "react-dom";
import DesignPatternApp from "./design-pattern/DesignPatternApp";
import theme from "./theme.tsx";
import { ThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

ReactDOM.render(<ThemeProvider theme={theme}><MuiPickersUtilsProvider utils={MomentUtils}><DesignPatternApp /></MuiPickersUtilsProvider></ThemeProvider>, document.getElementById("root"));