import React, { useState } from 'react';
import { expenseTypes as options } from '../../../data/Data';

import ConstructionFactory from '../construction/ConstructionFactory';

import LoadingInput from './inputs/LoadingInput';
import MaterialInput from './inputs/MaterialInput';
import DailyInput from './inputs/DailyInput';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const construction = new ConstructionFactory();

function DisplayExpense (props) {
    const [expenseType, setExpenseType] = useState('');
    const [index, setIndex] = useState(0);
    const [factory, setFactory] = useState([]);

    return(
        <Box m={2}>
            <Grid container spacing={3}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <div className={props.classes.tMargin}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel id="expense-type-label">Expense Type</InputLabel>
                                <Select
                                labelId="expense-type-label"
                                id="expense-type-select"
                                value={expenseType}
                                onChange={(e) => setExpenseType(e.target.value)}
                                label="Expense Type"
                                >
                                    {options.map((option, i) => <MenuItem key={i} value={option.id}>{option.label}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                </Grid>
                { expenseType === 'loading' && <LoadingInput {...props} type={expenseType} index={index} updateIndex={(i) => setIndex(i)} updateDisplay={(d) => setFactory(d)} display={factory} construction={construction} /> }
                { expenseType === 'material' && <MaterialInput {...props} type={expenseType} index={index} updateIndex={(i) => setIndex(i)} updateDisplay={(d) => setFactory(d)} display={factory} construction={construction} /> }
                { expenseType === 'daily' && <DailyInput {...props} type={expenseType} index={index} updateIndex={(i) => setIndex(i)} updateDisplay={(d) => setFactory(d)} display={factory} construction={construction} /> }  
            </Grid>
            { index !== 0 && <table border='1' cellSpacing='0' cellPadding='1'>
               <thead><tr><th>S.No</th><th>Date</th><th>Worker Name</th><th>Worker Type</th><th>Count/Quantity</th><th>Wage/Amount</th><th>Medium</th><th>Material</th><th>Expenses</th></tr></thead>
               <tbody>{factory.map((row) => row) }</tbody>
            </table> }
        </Box>
    );
}

export default DisplayExpense;