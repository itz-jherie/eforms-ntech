import React from 'react'
import Searchbar from '../../components/searchbar/Searchbar'
import TableRow from '../../components/table/TableRow'
import commissioneroathe from "././styles/commissioneroath.css"

const CommissionerOath = () => {
  return (
    <div className='commission'>

      <div className='commission__upper-head'> <h1>CommissionerOath</h1> </div>
    
        <div className='commission__head'>
     
        <h1 className='commission__header'> COMMISSION </h1>
  
        <Searchbar className="searchbar"/>
  
         </div>
  
        <div className='commission__body'>
          <TableRow />
        </div>
    </div>
  )
}

export default CommissionerOath