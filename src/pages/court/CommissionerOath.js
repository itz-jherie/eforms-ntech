import React, {useEffect, useState, useRef} from 'react'
import { useNavigate, useLocation } from 'react-router';

import Searchbar from '../../components/searchbar/Searchbar'

import commissioneroathe from "././styles/commissioneroath.css"
import {IoIosAdd} from "react-icons/io";
import {BiEditAlt} from "react-icons/bi";
import {IoIosRemove} from "react-icons/io"
import TableCommission from '../../components/table/tablecommission/TableCommission';


const CommissionerOath = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const dataRow = location.state;


  // console.log(dataRow);
 
  function handleAddCommission() {
    navigate('addcommissioneroath');
  }

  // const [nowDate, setNowDate] = useState(new Date());

  // const handleAddUsersData = () => {

  //   setUsers([...users, dataRow]);
    
  // }

  return (
    <div className='commission'>
{/* 
      <div className='commission__upper-head'> <h1>Commissioner of Oath Management</h1> </div> */}
    
        <div className='commission__head'>
     
        <h1 className='commission__header'> Commissioner of Oath Management </h1>
  
        {/* <Searchbar className="searchbar"/> */}
  
         </div>
  
        <div className='commission__body'>
          {/* <TableRow /> */}

          <button className='commission_button'> <IoIosAdd className='add_button' onClick={handleAddCommission}/></button>

   <div className='comm__cont'>
    <table style={{width: '100%'}}>

    <thead>
    <tr className='tableHeader'>
      <th className='tableHeader__sub r1'>S/N</th>
      <th className='tableHeader__sub r2'>Commissioner Name</th>
      <th className='tableHeader__sub r3'>Commissioner Id</th>
      <th className='tableHeader__sub r4'>Date Added</th>
      <th className='tableHeader r5'>Action</th>
      <th className='tableHeader__sub r6'>Action2</th>
    </tr>
    </thead>
<tbody>
{/* {dataRow.length > 0 ? dataRow.map((user, index) => (
  <tr key={index}>
    <td>{index}</td>
    <td>{user.name}</td>
    <td>{user.id}</td>
    <td></td>
  </tr>
)): null} */}
</tbody>
</table>
    </div>
        </div>
    </div>
  )
}

export default CommissionerOath