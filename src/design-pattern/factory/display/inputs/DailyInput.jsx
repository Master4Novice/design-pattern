import React, { useState } from 'react';
import InputText from '../../../../ui/input/InputText';
import InputNumber from '../../../../ui/input/InputNumber';
import InputDate from '../../../../ui/input/InputDate';

import DailyWork from '../../construction/daily/DailyWork';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function DailyInput(props) {
    const {type, index, updateIndex, updateDisplay, display, construction} = props;

    const [date, setDate] = useState(new Date());
    const [workerType, setWorkerType] = useState('');
    const [workerCount, setWorkerCount] = useState(0);
    const [wage, setWage] = useState(0);
    const [medium, setMedium] = useState('');

    const onAddDaily = () => {
       let i = index === 0 ? 1 : index;
       if(index !== 0) {
           i = i + 1;
       }
       const dailyWork = <DailyWork key={i} {...construction.addTypeOfExpense(type, {index: i, date, worker: {type: workerType, count: workerCount}, wage, medium})} />;
       const row = display;
       row.push(dailyWork);
       updateDisplay(row);
       updateIndex(i);
    }

    return(
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <div className={props.classes.tMargin}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <InputDate name="date" value={date} label="Date" setValue={(value) => setDate(value)} />
                        </Grid>
                        <Grid item xs={4}>
                            <InputText name="workerType" value={workerType} label="Worker Type" setValue={(value) => setWorkerType(value)} />
                        </Grid>
                        <Grid item xs={4}>
                            <InputNumber name="workerCount" value={workerCount} label="Worker Count" setValue={(value) => setWorkerCount(value)} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <InputNumber name="wage" value={wage} label="Wage" setValue={(value) => setWage(value)} />
                        </Grid>
                        <Grid item xs={4}>
                            <InputText name="medium" value={medium} label="Medium" setValue={(value) => setMedium(value)} />
                        </Grid>
                        <Grid item xs={4}>&nbsp;</Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                           <Button variant="contained" onClick={(e) => onAddDaily()} color="primary" size="small">Add</Button>
                        </Grid>
                        <Grid item xs={8}>&nbsp;</Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
}

export default DailyInput;