import React from 'react';
import "./tablepending.css";
// import "./table.css"
import {MdArrowForwardIos} from "react-icons/md"
import createDataArray from '../../../assets/dashboard/FackerJs';


const TablePending = () => {



  const filterData = () => {
      return createDataArray().filter(stat => stat.status === "Pending");
    
  }
  
  return (

    <div className='dashboard__applications'>
    <h1 className='dash__application-h1'>Recent Applications</h1>

    <div className='pend__cont'>
    <table>

    <thead>
    <tr className='tableHeader'>
      <th className='tableHeader__sub r1'>S/N</th>
      <th className='tableHeader__sub r2'>User Details</th>
      <th className='tableHeader__sub r3'>Descriptions</th>
      <th className='tableHeader__sub r4'>Amount</th>
      <th className='tableHeader__sub r5'>status</th>
      <th className='tableHeader__sub r6'>Action</th>
    </tr>
    </thead>
<tbody>
{filterData().map((dt, i) => {

return (

<tr key={i} className="tableRow" id="tbr">
<td >
  <p className='pendCont sn'>{dt.sn}</p>
</td>
<td >
<p className='pendCont name'>{dt.user.name}</p>
<p className="pendCont phone">{dt.user.phone}</p>
<p className="pendCont email">{dt.user.email}</p>
</td>
<td >
  <p className='pendCont description'>{dt.description}</p>
</td>
<td >
  <p className='pendCont amnt'>₦{dt.amount}</p>
</td>
<td >
  <p className='pendCont status'>{dt.status}</p>
</td>
<td >
  <div className='prev'>
  <span className='action'>PREVIEW</span>
  <div className='circle-mdarrow'>
  <MdArrowForwardIos className='mdarrow'/>
  </div>
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

export default TablePending