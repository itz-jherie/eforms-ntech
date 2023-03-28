import React from 'react'

import table from "./table.css"

const TableRow = (props) => {


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
  {
    props.data.map((data, i) => (
      
         <tr key={i} className="tableRow" id="tbr" style={{borderLeft: '1px solid received'}}>
        <td>{data.userName}</td>
        <td>{data.docName}</td>
        <td>{data.dateCreated}</td>
        <td>{data.trackingID}</td>
        <td>{data.status}</td>
      </tr>
       
    ))
  }
  </tbody>
  </table>
          </div>
        </div>
  )
}

export default TableRow