import React from 'react';

const InputNumber = (props) => {
    const { name, value, label, setValue } = props;
    return(
        <div>
            <label htmlFor={name}>{label}:&nbsp;</label>
            <input 
                type="number" 
                id={name} 
                name={name} 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />
        </div>
    );
}

export default InputNumber;