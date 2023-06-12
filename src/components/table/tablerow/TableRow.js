import React from 'react'

import table from "./table.css"
import allData from '../../../data/dashboardData';

const TableRow = (props) => {
  const {fakeData, hold} = props;

  const filterData = () => {
    if (hold === 'All') {
      return fakeData;
    } else {
      return fakeData.filter(stat => stat.status === hold);
    }
  }

  return (

          <div className='dashboard__applications'>
          <h1 className='dash__application-h1'>Recent Applications</h1>
  
          <div className='table__cont'>
          <table style={{width: '100%'}}>
  
          <thead>
          <tr className='tableHeader'>
            <th className='tableHeader__sub'>Username</th>
            <th className='tableHeader__sub'>Doc Name</th>
            <th className='tableHeader__sub'>Date Created</th>
            <th className='tableHeader__sub'>Tracking ID</th>
            <th className='tableHeader__sub'>Status</th>
          </tr>
          </thead>
  <tbody>
  {filterData().map((dt, i) => {
  
    return (
      
    <tr key={i} className="tableRow" id="tbr">
   <td><p className='tableCont'>{dt.name}</p></td>
   <td><p className='tableCont'>{dt.documentName}</p></td>
   <td><p className='tableCont'>{dt.date.toLocaleDateString()}</p></td>
   <td><p className='tableCont'>{dt.trackingId}</p></td>
   <td><p className='tableCont'>{dt.status}</p></td>
 </tr>
  
) })}
  </tbody>
  </table>
          </div>
        </div>
  )
}

export default TableRow