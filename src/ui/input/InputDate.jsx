import React from 'react';

import Grid from '@material-ui/core/Grid';
import { KeyboardDatePicker } from '@material-ui/pickers';

const InputDate = (props) => {
    const { name, value, label, setValue } = props;
    return (
        <Grid container>
            <KeyboardDatePicker
                margin="normal"
                id={name}
                label={label}
                format="MM/DD/yyyy"
                value={value}
                onChange={(date) => setValue(date)}
                KeyboardButtonProps={{'aria-label': 'change date'}}
            />
        </Grid>
    );
}

export default InputDate;