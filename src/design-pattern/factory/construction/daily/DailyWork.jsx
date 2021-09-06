import React from 'react';

const DailyWork = (props) => {
    return (
         <tr>
            <td>{props.index}</td>
            <td>{props.date}</td>
            <td>&nbsp;</td>
            <td>{props.worker.type}</td>
            <td>{props.worker.count}</td>
            <td>{props.wage}</td>
            <td>{props.medium}</td>
            <td>&nbsp;</td>
            <td>{props.worker.count * props.wage}</td>
         </tr>
    );
}

export default DailyWork;