import React from 'react';
import {useRef, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import logo from "../../../assets/images/Logo_black.png"
import "./signup.css"

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from '../../../schema/formSchema';

import { useNavigate } from 'react-router-dom';

const Signup = () => {

  let navigate = useNavigate();

  // REACT HOOK FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  })

  const formSubmitHandler = (data) => {
    console.log(data);
    navigate("/MultiStepForm");
  }  
  
  
  

  return (
    <div className='bdy'>
    
    <div className='sign--up'>

    <div className='sign--up-content1'>

  <div className='sign--up-logo'>
    <img src={logo} className="logo" alt="logo--header" />
  </div>

  <div className='sign--up-text'>
    <h1 className='sign--up-h1'>Create An Account</h1>
    <p className='sign--up-body'>sign up to create an account</p>
  </div>
  </div>

  <div className='sign--up-content2'>

    <form className='form--body' onSubmit={handleSubmit(formSubmitHandler)} autoComplete="off">

      {/* FIRST NAME */}
      <div className='Box'>
      <label htmlFor="firstName" className="lbs">First Name</label>
      
      <input
        {...register("firstName")} 
        className='inBox'
        type="text"
        name="firstName" 
        
      />
      {errors.firstName ? (
        <span className='redText'>{errors.firstName.message}</span>
      ) : (
        <></>
      )
      }
      </div>

      {/* MIDDLE NAME */}
      <div className='Box'>
      <label htmlFor="middleName" className="lbs">Middle Name</label>
      
      <input
        {...register("middleName")} 
        className='inBox'
        type="text"
        name="middleName"
        
      />
      {errors.middleName ? (
        <span className='redText'>{errors.middleName.message}</span>
      ) : (
        <></>
      )
      }
      </div>

      {/* LAST NAME */}
      <div className='Box'>
      <label htmlFor="lastName" className="lbs">Last Name</label>
      
      <input
        {...register("lastName")} 
        className='inBox'
        type="text"
        name="lastName"
      />
      {errors.lastName ? (
        <span className='redText'>{errors.lastName.message}</span>
      ) : (
        <></>
      )
      }
      </div>

        {/* EMail */}
      <div className='Box'>
      <label htmlFor="email" className="lbs">Email Address</label>
      
      <input
        {...register("email")} 
        className='inBox'
        type="email"
        name="email"
        
      />
      {errors.email ? (
        <span className="redText">{errors.email.message}</span>
      ): (
        <></>
      )}
      </div>

        {/* PASSWORD */}
      <div className='Box'>
      <label htmlFor="password" className='lbs'>Password</label>
      <input 
        {...register("password")}
        className='inBox inBox2'
        type="password"
        name="password"
        
      />
      {errors.password ? (
            <span className="redText">{errors.password.message}</span>
          ) : (
            <></>
          )}
     
      </div>

        {/* CONFIRM PASSWORD */}
      <div className='Box'>
        <label htmlFor="confirm password" className='lbs'>Confirm Password</label>

        <input
          {...register("confirmPassword")} 
          className='inBox inBox3'
          type="password"
          name="confirmPassword"
        
        />
        {errors.confirmPassword ? (
            <span className="redText">{errors.confirmPassword.message}</span>
          ) : (
            <></>
          )}
      </div>

        {/* CHECKBOX */}
      <div className='BoxCheck'>
        <div className="mvTop">
        <input
          {...register("remember")} 
          className='inBox4'
          type="checkbox"
          name="remember"
          value=""
          
        />
        <label>I agree to the terms of <Link to="Term">terms of use &#38; privacy policy</Link></label>
        </div>
        <div className="mvUnder">
        {errors.remember ? (
              <div className="redText">{errors.remember.message}</div>
            ) : (
              <></>
            )}
        </div>
      </div>


      <button type="submit" className='btn__sign--up'> Sign Up</button>

      

      <span className='acct'>Already had an account? <Link to="/signin">Sign in</Link></span>
    </form>
  </div>

    </div>

</div>

  )
}

export default Signup;