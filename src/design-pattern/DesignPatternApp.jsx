import React from 'react';
import { hot } from 'react-hot-loader';
import './DesignPatternApp.css';

import Typography from '@material-ui/core/Typography';
import Construction from './module/construction/Construction';
import DisplayExpense from './factory/display/DisplayExpense';

function DesignPatternApp() {
  return (
    <div className="DPApp">
      <Typography variant="h3">Design Pattern ES6+</Typography>
      <Construction />
      <DisplayExpense />
    </div>
  );
}

export default hot(module)(DesignPatternApp);
