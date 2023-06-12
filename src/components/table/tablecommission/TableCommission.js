import React from 'react';
import "./tablecommission.css";


const TableCommission = (props) => {
    const {data} = props;

    function getCurrentDate(separator='') {

      let newDate = new Date();
    
      let date = newDate.getDate();
      let month = newDate.getMonth();
      let year = newDate.getFullYear();
    
      return `${year}${separator}${month<10?`0${month}`: `$month`}${separator}${date}`;
    }
  return (

    <h1>Table commission</h1>
    // {data.map((dt, i) => {
    //       return  (
    //         <tr>
    //             <td className='commBox'>{dt.i}</td>
    //             <td className='commBox'>{dt.name}</td>
    //             <td className='commBox'>{dt.id}</td>
    //             <td className='commBox'></td>
    //             <td className='commBox'></td>
    //             <td className='commBox'></td>
    //         </tr>
    //     )
    //     })
    // }
  )
}

export default TableCommission