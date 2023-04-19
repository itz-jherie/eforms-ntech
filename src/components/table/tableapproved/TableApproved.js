import React from 'react'
import createDataArray from '../../../assets/dashboard/FackerJs';
import {BsPrinter} from "react-icons/bs";
import "./tableapprove.css"

const TableApproved = () => {

    const filterData = () => {
        return createDataArray().filter(stat => stat.status === "Approved");
      
    }
  return (
    <div className='dashboard__applications'>
    <h1 className='dash__application-h1'>Recent Applications</h1>

    <div className='approv__cont'>
    <table style={{width: '100%'}}>

    <thead>
    <tr className='tableHeaderApproved'>
      <th className='tableHeader__sub r1'>S/N</th>
      <th className='tableHeader__sub r2'>User Details</th>
      <th className='tableHeader__sub r3'>Descriptions</th>
      <th className='tableHeader__sub r4'>Amount</th>
      <th className='tableHeader__sub r5'>Status</th>
      <th className='tableHeader__sub r6'>Action</th>
    </tr>
    </thead>
<tbody>
{filterData().map((dt, i) => {

return (

<tr key={i} className="tableRow" id="tbr">
<td >
  <p className='approvCont sn'>{dt.sn}</p>
</td>
<td className="details">
<p className='approvCont name'>{dt.user.name}</p>
<p className="approvCont phone">{dt.user.phone}</p>
<p className="approvCont email">{dt.user.email}</p>
</td>
<td >
  <p className='approvCont description'>{dt.description}</p>
</td>
<td >
  <p className='approvCont amnt'>₦{dt.amount}</p>
</td>
<td >
  <p className='approvCont status'>{dt.status}</p>
</td>
<td className='approvCont action'>
    
    <div className='printBox'>
    <BsPrinter className="approvPrinter"/>
    </div>
    
</td>
</tr>

) })}


</tbody>
</table>
    </div>
  </div>
  )
}

export default TableApproved