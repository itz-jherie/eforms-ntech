import React from 'react'
import Button from '../../../components/cta/Button'
import "./basicinfo/basicinfo.css"

const Basicinfo = ({values, saveAndContinue, handleFormData}) => {

  const options = ["Ondo", "Oyo", "Ekiti"];
  const localGov = ["Akoko", "Akure north", "Akure South"];

  const localGovElement = localGov.map((local, index) => {
    return <option key={index}>{local}</option>
  })

  const optionsElement = options.map((option, index) => {
    return <option key={index}> {option} </option>
  });

  const submitFormData = e => {

    e.preventDefault();

    saveAndContinue();
  }
  return (

        <form className='basicinfo__body' onSubmit={submitFormData}>

        <div className="box">
  <label htmlFor="phone_no">Phone Numbers</label>
  <input 
    name="phoneNumber"
    type="number"
    className="fullInput"
    defaultValue={values.phoneNumber}
    onChange={handleFormData("phoneNumber")}
    required
  />
</div>

<div className="box">
  <label htmlFor="contact_address">Contact Address</label>
  <input
    name="contactAddress"
    type="text"
    className="fullInput"
    defaultValue={values.contactAddress}
    onChange={handleFormData("contactAddress")}
    required
  />
</div>


<div className="box2">
  
  <div className="states">
  <label htmlFor="states"> State </label>
  <select className='selectInput'>
    <option>select L.G.A</option>
    <option>{optionsElement}</option>
  </select>
  </div>

  <div className="lga">
  <label htmlFor="lga"> LGA </label>
  <select className='selectInput'>
    <option>Select State</option>
    <option>{localGovElement}</option>
  </select>
  </div>
</div>

<div className="box">
  <label htmlFor="zip">Zip Code</label>
  <input
    name="zipCode"
    type="number"
    defaultValue={values.zipCode}
    onChange={handleFormData("zipCode")} 
    className="fullInput"
    required
  />
</div>


  <button type="submit" className='btn__save'> Save and Continue</button>

  {/*
  <Button content="Save and Continue" className="btn" />
  */}
</form>
  )
}

export default Basicinfo