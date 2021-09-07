import React, { Component } from 'react';
import Wages from './modules/Wages';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

const wages = new Wages();

class Construction extends Component{
    constructor(props) {
        super(props);
        this.state = {
            wage: 0
        }
        this.onChangeWage = this.onChangeWage.bind(this);
        this.onAddWage = this.onAddWage.bind(this);
        this.onRemoveWage = this.onRemoveWage.bind(this);
    }

    onChangeWage(value) {
       this.setState({wage: value});
    }

    onAddWage() {
        const wage = parseInt(this.state.wage);
        if(!isNaN(wage) && wage >=50 && wage <= 1000) {
            if(!wages.isWageExist(wage)) {
                wages.addWage(parseInt(this.state.wage));
            }
        }
        this.setState({wage: 0});
    }

    onRemoveWage() {
        const wage = parseInt(this.state.wage);
        if(wages.isWageExist(wage)) {
            wages.removeWage(wage); 
        }
        this.setState({wage: 0});
    }

    render() {
        const { classes } = this.props;
        return (
            <Box m={2}>
                <Grid container spacing={3}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                           <div className={classes.center}><Typography varient="h3">List of Available Wages</Typography></div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <List>
                                {wages.getAvailableWages().map((wage, index) => <ListItem key={index}><ListItemIcon>&#x20B9;&nbsp;</ListItemIcon><ListItemText primary={wage} /></ListItem>)}
                            </List>
                        </Grid>
                        <Grid item xs={6}>&nbsp;</Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <FormControl fullWidth className={classes.margin} variant="outlined" size="small">
                                <InputLabel htmlFor="outlined-wage">Wage</InputLabel>
                                <OutlinedInput
                                    id="outlined-wage"
                                    value={this.state.wage}
                                    onChange={(e) => this.onChangeWage(e.target.value)}
                                    startAdornment={<InputAdornment position="start">&#x20B9;</InputAdornment>}
                                    labelWidth={60}
                                    size="small"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={this.onAddWage} color="primary" size="small">Add Wage</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button onClick={this.onRemoveWage} color="secondary" size="small">Remove Wage</Button>
                        </Grid>
                    </Grid>
              </Grid>
            </Box>
        );
    }
}

export default Construction;