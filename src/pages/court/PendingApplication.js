import React, {useState} from 'react'
import Searchbar from '../../components/searchbar/Searchbar'
import pendingapplication from "././styles/pendingapplication.css"

import FakerData from '../../assets/dashboard/FackerJs'

import TablePending from '../../components/table/tablepending/TablePending'

const PendingApplication = () => {

  return (
   <div className="pendingApplication">

<div className='pending__upper-head'> <h1>PENDING</h1> </div>
    
  <div className='pending__head'>
   
   <h1 className='pending__header'> PENDING </h1>

   {/* <Searchbar className="searchbar"/> */}

   </div>

   <div className='pending__body'>
    
    <TablePending />
   </div>
   </div>
  )
}

export default PendingApplication