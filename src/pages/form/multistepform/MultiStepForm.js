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




const MultiStepForm = () => {

  const [datta, setData] = useState({
      phoneNumber: "",
      contactAddress: "",
      nstate: "",
      localGovtment: "",
      zipCode: ""
  });

  console.log(datta.nstate);

  const [mulError, setMulError] = useState({});

  const handleInputChange = (event) => {
    const {name, type, value} = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {

    console.log("Submit the form!!!");

    event.preventDefault();

    // Validate Forms
    const errors = {};




  }
  const updateData = (values) => {
    setData((preValues) => ({
      ...preValues,
      ...values
    }));
    }; 

  const testlength = 4;
  const [page, setPage] = useState(1);

  const  headers = ["Basic Information", "Upload Passport", "Confirm Account sent to your Email Address"];

  const next = () => {
    setPage((page) => {
     return  page + 1;
    })
  };

  const prev = () => {
       setPage( (page) => {
        return page - 1;
      }); 
  }

  const pageDisplay = () => {
    if (page === 1) {
      return <Basicinfo datta={datta} handleInputChange={handleInputChange} />
    } else if (page === 2) {
      return <Upload />
    } else {
        return <Success />;// return <Verifyemail updateDate={updateData}/>
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
  <img src={logo} alt="logo" />
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