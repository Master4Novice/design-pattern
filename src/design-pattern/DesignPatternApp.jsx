import React from 'react';
import PropTypes from 'prop-types';

import { hot } from 'react-hot-loader';
import './DesignPatternApp.css';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import Construction from './module/construction/Construction';
import DisplayExpense from './factory/display/DisplayExpense';

const styles = {
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
};

function DesignPatternApp(props) {
  const { classes } = props;

  return (
    <Container className={classes.dApp} maxWidth="sm">
      <div className={classes.center}>
        <Typography variant="h3">Design Pattern ES6+</Typography>
      </div>
      <Construction {...props} />
      <DisplayExpense {...props} />
    </Container>
  );
}

DesignPatternApp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default hot(module)(withStyles(styles)(DesignPatternApp));
