import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';

const InputNumber = (props) => {
  const { name, value, label, setValue } = props;
  return (
    <FormControl fullWidth variant="outlined" size="small">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
        type="number"
        id={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        labelWidth={60}
        size="small"
      />
    </FormControl>
  );
};

InputNumber.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
};

export default InputNumber;
