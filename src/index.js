import React from 'react';
import ReactDOM from 'react-dom';
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import DesignPatternApp from './design-pattern/DesignPatternApp';
import theme from './theme.tsx';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DesignPatternApp />
    </MuiPickersUtilsProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
