import React from 'react';
import { hot } from 'react-hot-loader';
import './DesignPatternApp.css';

import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import Construction from "./module/construction/Construction";
import DisplayExpense from "./factory/display/DisplayExpense";

const styles = theme => ({
  center: {
    textAlign: 'center'
  },
  dApp: {
    margin: 'auto',
    padding: '1rem'
  },
  tMargin: {
    marginTop: '2%'
  }
});

class DesignPatternApp extends Component{
  render(){

    const { classes } = this.props;

    return(
      <Container className={classes.dApp} maxWidth="sm">
        <div className={classes.center}><Typography variant="h3">Design Pattern ES6+</Typography></div>
        <Construction {...this.props}/>
        <DisplayExpense {...this.props}/>
      </Container>
    );
  }
}

export default hot(module)(withStyles(styles)(DesignPatternApp));
