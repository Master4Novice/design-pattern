import React, { useState } from 'react';
import InputText from '../../../../ui/input/InputText';
import InputNumber from '../../../../ui/input/InputNumber';

import DailyWork from '../../construction/daily/DailyWork';

function DailyInput(props) {
    const {type, index, updateIndex, updateDisplay, display, construction} = props;

    const [date, setDate] = useState('');
    const [workerType, setWorkerType] = useState('');
    const [workerCount, setWorkerCount] = useState(0);
    const [wage, setWage] = useState(0);
    const [medium, setMedium] = useState('');

    const onAddLoading = () => {
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
        <div>
            <br/>
            <InputText name="date" value={date} label="Date" setValue={(value) => setDate(value)} />
            <br/>
            <InputText name="workerType" value={workerType} label="Worker Type" setValue={(value) => setWorkerType(value)} />
            <br />
            <InputNumber name="workerCount" value={workerCount} label="Worker Count" setValue={(value) => setWorkerCount(value)} />
            <br/>
            <InputNumber name="wage" value={wage} label="Wage" setValue={(value) => setWage(value)} />
            <br/>
            <InputText name="medium" value={medium} label="Medium" setValue={(value) => setMedium(value)} />
            <br/>
            <button type="submit" value="Add" onClick={(e) => onAddLoading()}>Add</button>
        </div>
    );
}

export default DailyInput;