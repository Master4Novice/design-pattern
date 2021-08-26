import React, { useState } from 'react';
import { expenseTypes as options } from '../../../data/Data';

import ConstructionFactory from '../construction/ConstructionFactory';

import LoadingInput from './inputs/LoadingInput';
import MaterialInput from './inputs/MaterialInput';
import DailyInput from './inputs/DailyInput';

const construction = new ConstructionFactory();

function DisplayExpense () {
    const [expenseType, setExpenseType] = useState('');
    const [index, setIndex] = useState(0);
    const [factory, setFactory] = useState([]);

    return(
        <div>
            <label htmlFor="expenseType">Choose Expense Type:</label>
            <select name="expenseType" id="expenseType" value={expenseType} onChange={(e) => setExpenseType(e.target.value)}>
                {options.map((option, i) => <option key={i} value={option.id}>{option.label}</option>)}
            </select>
            { expenseType === 'loading' && <LoadingInput type={expenseType} index={index} updateIndex={(i) => setIndex(i)} updateDisplay={(d) => setFactory(d)} display={factory} construction={construction} /> }
            { expenseType === 'material' && <MaterialInput type={expenseType} index={index} updateIndex={(i) => setIndex(i)} updateDisplay={(d) => setFactory(d)} display={factory} construction={construction} /> }
            { expenseType === 'daily' && <DailyInput type={expenseType} index={index} updateIndex={(i) => setIndex(i)} updateDisplay={(d) => setFactory(d)} display={factory} construction={construction} /> }
            <br />
            { index !== 0 && <table border='1' cellSpacing='0' cellPadding='1'>
               <thead><tr><th>S.No</th><th>Date</th><th>Worker Name</th><th>Worker Type</th><th>Count/Quantity</th><th>Wage/Amount</th><th>Medium</th><th>Material</th><th>Expenses</th></tr></thead>
               <tbody>{factory.map((row) => row) }</tbody>
            </table> }
        </div>
    );
}

export default DisplayExpense;