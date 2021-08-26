import React from 'react';

const Material = (props) => {
    return (
         <tr>
            <td>{props.index}</td>
            <td>{props.date}</td>
            <td>{props.worker.name}</td>
            <td>&nbsp;</td>
            <td>{props.quantity}</td>
            <td>{props.amount}</td>
            <td>{props.medium}</td>
            <td>{props.material}</td>
            <td>{props.amount}</td>
         </tr>
    );
}

export default Material;