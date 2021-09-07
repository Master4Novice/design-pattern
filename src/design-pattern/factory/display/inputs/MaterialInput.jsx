import React, { useState } from 'react';
import InputText from '../../../../ui/input/InputText';
import InputNumber from '../../../../ui/input/InputNumber';

import Material from '../../construction/material/Material';

function MaterialInput(props) {
    const {type, index, updateIndex, updateDisplay, display, construction} = props;
            
    const [date, setDate] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [medium, setMedium] = useState('');
    const [material, setMaterial] = useState('');
    const [amount, setAmount] = useState(0);

    const onAddLoading = () => {
       let i = index === 0 ? 1 : index;
       if(index !== 0) {
           i = i + 1;
       }
       const materials = <Material key={i} {...construction.addTypeOfExpense(type, {index: i, date, worker: { name: name }, quantity, medium, material, amount})} />;
       const row = display;
       row.push(materials);
       updateDisplay(row);
       updateIndex(i);
    }

    return(
        <div>
            <br/>
            <InputText name="date" value={date} label="Date" setValue={(value) => setDate(value)} />
            <br/>
            <InputText name="name" value={name} label="Worker Name" setValue={(value) => setName(value)} />
            <br/>
            <InputNumber name="quantity" value={quantity} label="Quantity" setValue={(value) => setQuantity(value)} />
            <br/>
            <InputText name="medium" value={medium} label="Medium" setValue={(value) => setMedium(value)} />
            <br/>
            <InputText name="material" value={material} label="Material" setValue={(value) => setMaterial(value)} />
            <br />
            <InputNumber name="amount" value={amount} label="Amount" setValue={(value) => setAmount(value)} />
            <br />
            <button type="submit" value="Add" onClick={(e) => onAddLoading()}>Add</button>
        </div>
    );
}

export default MaterialInput;