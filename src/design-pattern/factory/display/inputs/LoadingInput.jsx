import React, { useState } from 'react';
import InputText from '../../../../ui/input/InputText';
import InputNumber from '../../../../ui/input/InputNumber';

import Loading from '../../construction/loading/Loading';

function LoadingInput(props) {
    const {type, index, updateIndex, updateDisplay, display, construction} = props;
    const [date, setDate] = useState('');
    const [workerCount, setWorkerCount] = useState(0);
    const [wage, setWage] = useState(0);
    const [medium, setMedium] = useState('');
    const [material, setMaterial] = useState('');

    const onAddLoading = () => {
       let i = index === 0 ? 1 : index;
       if(index !== 0) {
           i = i + 1;
       }
       const loading = <Loading key={i} {...construction.addTypeOfExpense(type, {index: i, date, workerCount, wage, medium, material})} />;
       const row = display;
       row.push(loading);
       updateDisplay(row);
       updateIndex(i);
    }

    return(
        <div>
            <br/>
            <InputText name="date" value={date} label="Date" setValue={(value) => setDate(value)} />
            <br/>
            <InputNumber name="workerCount" value={workerCount} label="Worker Count" setValue={(value) => setWorkerCount(value)} />
            <br/>
            <InputNumber name="wage" value={wage} label="Wage" setValue={(value) => setWage(value)} />
            <br/>
            <InputText name="medium" value={medium} label="Medium" setValue={(value) => setMedium(value)} />
            <br/>
            <InputText name="material" value={material} label="Material" setValue={(value) => setMaterial(value)} />
            <br />
            <button type="submit" value="Add" onClick={(e) => onAddLoading()}>Add</button>
        </div>
    );
}

export default LoadingInput;