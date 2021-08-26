import React from 'react';

const Loading = (props) => {
    return (
         <tr>
            <td>{props.index}</td>
            <td>{props.date}</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>{props.workerCount}</td>
            <td>{props.wage}</td>
            <td>{props.medium}</td>
            <td>{props.material}</td>
            <td>{props.wage}</td>
         </tr>
    );
}

export default Loading;