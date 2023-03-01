import React, { useEffect, useState } from "react";
import "./multistepform.css";
import logo from "../../../assets/images/Logo_black.png"
import PrBar from "../../../components/prBar/PrBar";

import "./Upload"
import "./Verifyemail"

import Basicinfo from "./Basicinfo";
import Verifyemail from "./Verifyemail";
import Upload from "./Upload";


import { registerSchema } from "../../../schema/multiFormSchema";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const MultiStepForm = () => {

  const [data, setData] = useState({})

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
      return <Basicinfo register={register} errors={errors}/>
    } else if (page === 2) {
      return <Upload />
    } else {
      return <Verifyemail updateDate={updateData}/>
    }
  }
  
  const {
    register,
    handleValue,
    
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const formSubmitHandler = (data) => {
      updateData(data);
  };
  
  return (
   <div className="multiform">

<div className="createAccount__header">
  <img src="" alt="logo" />
  <h1>Create Account</h1>
    <p>{headers[page]}</p>
</div>

<div className="createAccount__body">


  <PrBar step={page} className="bar"/>

  <form className="display" onSubmit={handleSubmit(formSubmitHandler)}>
  
    {pageDisplay()}
    
   {page === 3 &&  <button type="submit" className="btn"> Verify</button>}
  </form>

  <div className="createAccount__footer">

  <button disabled={page == 1} onClick={prev} className="btn">Previous</button>
  <button disabled={page == testlength - 1} onClick={next} className="btn">Next</button>

</div>

</div>

</div>
  )

}
export default MultiStepForm;