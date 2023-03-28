import React from 'react'
import Searchbar from '../../components/searchbar/Searchbar'
import pendingapplication from "././styles/pendingapplication.css"
import TableRow from '../../components/table/TableRow'

const PendingApplication = () => {
  return (
   <div className="pendingApplication">

<div className='pending__upper-head'> <h1>PENDING</h1> </div>
    
  <div className='pending__head'>
   
   <h1 className='pending__header'> PENDING </h1>

   <Searchbar className="searchbar"/>

   </div>

   <div className='pending__body'>
    <TableRow />
   </div>
   </div>
  )
}

export default PendingApplication