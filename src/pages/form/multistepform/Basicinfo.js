import React, { useState, useEffect } from 'react'
import "./basicinfo/basicinfo.css"
import { Navigate, useNavigate } from 'react-router';
import states from '../../../assets/form/states';
import localGovt from '../../../assets/form/localGovt';


const Basicinfo = (props) => {

    const {datta, handleInputChange} = props;

    let navigate = useNavigate();

    // const dummyName = nstate;
        
    
       
    



  
    const listStates = states.map((option, index) => {
        return <option key={index}> {option} </option>  
        
      });
    
  const listLocalGovt=[];

  if(datta.nstate != "") {
    listLocalGovt = localGovt.find((local) => local.name === datta.nstate).lgas.map((local, index) => {
        return <option key={index}>{local}</option>
      })
  }

 

   
  
  return (

        <div className='basicinfo__body'>

        <div className="box">
        <label htmlFor="phone_no">Phone Numbers</label>
        <input 
          name="phoneNumber"
          value={datta.phoneNumber}
          type="number"
          className="fullInput"
          onChange={handleInputChange}
          required
        />
</div>

<div className="box">
  <label htmlFor="contact_address">Contact Address</label>
  <input
    value={datta.contactAddress}
    name="contactAddress"
    type="text"
    className="fullInput"
    onChange={handleInputChange}
    required
  />
  
</div>


<div className="box2">
  
  <div className="states">
  <label htmlFor="states"> State </label>
  <select 
  name="states"
  value={datta.nstate}
  className='selectInput'
  onChange={handleInputChange}
  required
    >
    <option value="">Select state</option>
    {listStates}
  </select>
  
  </div>


  <div className="lga">
  <label htmlFor="lga"> LGA </label>
  <select
  name="localGovt"
  value={datta.lGovtment}
  onChange={handleInputChange}
  className='selectInput'
  required
  >
    <option value="">Select local government</option>
    {listLocalGovt}
  </select>
  </div>
</div>

<div className="box">
  <label htmlFor="zip">Zip Code</label>
  <input
    name="zipCode"
    type="number"
    value={datta.zipCode}
    onChange={handleInputChange}
  />
</div>

</div>
  )
  }

export default Basicinfo;