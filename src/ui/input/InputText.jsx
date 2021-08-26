import React from 'react';

const InputText = (props) => {
    const { name, value, label, setValue } = props;
    return(
        <div>
            <label htmlFor={name}>{label}:&nbsp;</label>
            <input 
                type="text" 
                id={name} 
                name={name} 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />
        </div>
    );
}

export default InputText;