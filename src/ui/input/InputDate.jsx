import React from 'react';
import PropTypes from 'prop-types';

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
        KeyboardButtonProps={{ 'aria-label': 'change date' }}
      />
    </Grid>
  );
};

InputDate.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};

export default InputDate;
