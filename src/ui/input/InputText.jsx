import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';

const InputText = (props) => {
    const { name, value, label, setValue } = props;
    return(   
        <FormControl fullWidth variant="outlined" size="small">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <OutlinedInput
                type="text"
                id={name}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                labelWidth={60}
                size="small"
            />
        </FormControl>
    );
}

export default InputText;