import React, { useState } from 'react';
import InputText from '../../../../ui/input/InputText';
import InputNumber from '../../../../ui/input/InputNumber';
import InputDate from '../../../../ui/input/InputDate';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Material from '../../construction/material/Material';

function MaterialInput(props) {
    const {type, index, updateIndex, updateDisplay, display, construction} = props;
            
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [medium, setMedium] = useState('');
    const [material, setMaterial] = useState('');
    const [amount, setAmount] = useState(0);

    const onAddMaterial = () => {
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
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <div className={props.classes.tMargin}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <InputDate name="date" value={date} label="Date" setValue={(value) => setDate(value)} />
                        </Grid>
                        <Grid item xs={4}>
                           <InputText name="name" value={name} label="Worker Name" setValue={(value) => setName(value)} />
                        </Grid>
                        <Grid item xs={4}>
                           <InputNumber name="quantity" value={quantity} label="Quantity" setValue={(value) => setQuantity(value)} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                           <InputText name="medium" value={medium} label="Medium" setValue={(value) => setMedium(value)} />
                        </Grid>
                        <Grid item xs={4}>
                           <InputText name="material" value={material} label="Material" setValue={(value) => setMaterial(value)} />
                        </Grid>
                        <Grid item xs={4}>
                           <InputNumber name="amount" value={amount} label="Amount" setValue={(value) => setAmount(value)} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                           <Button variant="contained" onClick={(e) => onAddMaterial()} color="primary" size="small">Add</Button>
                        </Grid>
                        <Grid item xs={8}>&nbsp;</Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
}

export default MaterialInput;