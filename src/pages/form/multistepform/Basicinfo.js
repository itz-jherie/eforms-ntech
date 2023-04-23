import React, { useState, useEffect } from 'react'
import "./basicinfo/basicinfo.css"
import { Navigate, useNavigate } from 'react-router';
import states from '../../../assets/form/states';
import dataGovt from '../../../assets/form/localGovt.json'


const Basicinfo = (props) => {

    const {datta, handleInputChange, mulError} = props;

    let navigate = useNavigate();

  
    const listStates = states.map((option, index) => {
        return <option key={index} value={option}> {option} </option>  
        
      });
   
      const lCGovt = [];

   const liss = dataGovt.filter((local, i) => local.name === datta.state);
    
   for(var i = 0; i < dataGovt.length; i++){
      if(dataGovt[i].name === datta.state){

    const govtList22 = dataGovt[i].lgas;
    lCGovt.push(...govtList22);
   }
  }

const ListLocalGovernment = lCGovt.map((local, i) => (
  <option key={i}>{local}</option>
))
  
  
 
  
  return (

        <div className='basicinfo__body'>

        <div className="box">
        <label htmlFor="phone_no">Phone Numbers</label>
        <input 
          name="phoneNumber"
          value={datta.phoneNumber}
          type="tel"
          className="fullInput"
          onChange={handleInputChange}
          required
        />

        {mulError.phoneNumber && <span className="errorMsg">{mulError.phoneNumber}</span>}
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
  {mulError.contactAddress && <span className="errorMsg">{mulError.contactAddress}</span>}
  
</div>


<div className="box2">
  
  <div className="states">
  <label htmlFor="states"> State </label>
  <select 
  name="state"
  value={datta.state}
  className='selectInput'
  onChange={handleInputChange}
  required
    >
    <option value="">Select state</option>
    {listStates}
  </select>
  {mulError.state && <span className="errorMsg">{mulError.state}</span>}
  </div>


  <div className="lga">
  <label htmlFor="lga"> LGA </label>
  <select
  name="localG"
  value={datta.localG}
  onChange={handleInputChange}
  className='selectInput'
  required
  >
    <option value="">Select local government</option>
      {ListLocalGovernment}
  </select>
  {mulError.localG && <span className="errorMsg">{mulError.localG}</span>}
  </div>
</div>

<div className="box">
  <label htmlFor="zip">Zip Code</label>
  <input
    name="zipCode"
    type="text"
    value={datta.zipCode}
    onChange={handleInputChange}
  />
  {mulError.zipCode && <span className="errorMsg">{mulError.zipCode}</span>}
</div>

</div>
  )
  }

export default Basicinfo;