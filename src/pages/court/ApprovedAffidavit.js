import React from 'react'
import Searchbar from '../../components/searchbar/Searchbar'
import TableApproved from '../../components/table/tableapproved/TableApproved';
import approvedaffidavit from "././styles/approvedaffidavit.css"


const ApprovedAffidavit = () => {
  return (
    <div className='approvedAffidavit'>
       <div className='approvedAffidavit__upper-head'> <h1>APPROVED</h1> </div>
    
    <div className='approvedAffidavit__head'>
 
    <h1 className='approvedAffidavit__header'> APPROVED </h1>

    {/* <Searchbar className="searchbar"/> */}

     </div>

    <div className='approvedAffidavit__body'>
      <TableApproved />
    </div>
    </div>
  )
}

export default ApprovedAffidavit