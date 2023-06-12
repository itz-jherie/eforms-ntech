import React, { useEffect, useState } from "react";
import "./multistepform.css";

import logo from "../../../assets/images/Logo_black.png"

import PrBar from "../../../components/prBar/PrBar";

import "./Upload"
import "./Verifyemail"

import Basicinfo from "./Basicinfo";
import Verifyemail from "./Verifyemail";
import Upload from "./Upload";
import Success from "./Success";
import { Navigate } from "react-router";




const MultiStepForm = () => {

  const [datta, setData] = useState({
      phoneNumber: "",
      contactAddress: "",
      state: "",
      localG: "",
      zipCode: "",
      imgFile: null
  });


  const [mulError, setMulError] = useState({});

  const handleValidation = () => {

    const errors = {}


    if(!datta.phoneNumber){
      errors.phoneNumber = "Please enter a valid phone number";
    } else if(!/^(\+234|234|0)(701|702|703|704|705|706|707|708|709|802|803|804|805|806|807|808|809|810|811|812|813|814|815|816|817|818|819|909|908|901|902|903|904|905|906|907)([0-9]{7})$/) {
      errors.phoneNumber = "Invalid phone number Input";
    }

    if (!datta.contactAddress){
      errors.contactAddress = "Please enter a valid address";
    } else if (!/^[#.0-9a-zA-Z\s,-]+$/) {
      errors.contactAddress = "Invalid address input"
    }

    if (!datta.state) {
      errors.state = 'Please select your state'
    }

    if (!datta.localG) {
      errors.localG = 'Please select your local government'
    }

    if (!datta.zipCode) {
      errors.zipCode = 'Please enter your zip code'
    } else if (!/^\d{5}(-\d{4})?$/){
      errors.zipCode = "Invalid zip code"
    }

  if (!datta.imgFile || datta.imgFile === null) {
    errors.imgFile = 'Please select an image file'
  }

    setMulError(errors);
    return Object.keys(errors).length === 0;
  }

  const handleInputChange = (event) => {
    const {name, value} = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  function handleImageUpload(event) {

    console.log("Trigger!!!");
    setData(prevData => ({
      ...prevData,
      imgFile: event.target.files[0]
    }));

  }

  const handleSubmit = (event) => {

   

    event.preventDefault();

    const isValid = handleValidation();

    if (isValid) {
      console.log(datta);
      Navigate("/user-dashboard")
    }

  }

  const testlength = 4;
  const [page, setPage] = useState(1);

  const  headers = ["Basic Information", "Upload Passport", "Confirm Account sent to your Email Address"];

  const next = () => {
    setPage((page) => {
     return  page + 1;
    });
  };

  const prev = () => {
       setPage( (page) => {
        return page - 1;
      }); 
  }

  const pageDisplay = () => {
    if (page === 1) {
      return <Basicinfo mulError={mulError} datta={datta} handleInputChange={handleInputChange} />
    } else if (page === 2) {
      return <Upload mulError={mulError} datta={datta.imgFile} handleImageUpload={handleImageUpload}/>
    } else {
        return <Success handleSubmit={handleSubmit}/>;// return <Verifyemail updateDate={updateData}/>
    }
  }
  
  
  // const formSubmitHandler = (data) => {
  //     updateData(data);
  // };

  // const buttons = () => {
  //   return if (page === 1){
  //     <button disabled={page == 1} onClick={prev} className="btn">Previous</button>
  //     <button disabled={page == testlength - 1} onClick={next} className="btn ">Next</button>
    
  //   } else if ( page === 2) {

  //     <button disabled={page == 1} onClick={prev} className="btn">Previous</button>
  //     <button disabled={page == testlength - 1} onClick={next} className="btn ">Next</button>
    
  //   } else {
  //     <button disabled={page == 1} onClick={prev} className="btn">Previous</button>
  //     //<button disabled={page == testlength - 1} onClick={next} className="btn ">Next</button>
    
  //     <button type="submit" className="btn" onClick={handleSubmit}> Submit </button>
  //   }
  // }


  
  return (
   <div className="multiform">

<div className="createAccount__header">
  <img src={logo} alt="logo" className="logo"/>
  <h1>Create Account</h1>
    <p>{headers[page]}</p>
</div>

<div className="createAccount__body">


  <PrBar step={page} className="bar"/>

  <form className="display" onSubmit={handleSubmit}>
  
    {pageDisplay()}

  <div className="createAccount__footer">
  {page === 1 && <div className="pageButts">      <button disabled={page == 1} onClick={prev} className="btn">Previous</button> <button disabled={page == testlength - 1} onClick={next} className="btn ">Next</button></div>}
  {page ===2 && <div className="pageButts"><button disabled={page == 1} onClick={prev} className="btn">Previous</button><button disabled={page == testlength - 1} onClick={next} className="btn ">Next</button> </div>}
  {page === 3 && <div className="pageButts"><button disabled={page == 1} onClick={prev} className="btn">Previous</button> <button type="submit" onClick={handleSubmit} className="btn"> Submit </button> </div>}

  </div>

  </form>

  

</div>

</div>
  )

}
export default MultiStepForm;