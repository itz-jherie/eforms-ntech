import React from 'react'
import { Link } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from '../../../assets/images/Logo_black.png'
import { registerSchema } from '../../../schema/formSchema';

import "./signin.css"
import { FaFacebook } from 'react-icons/fa'

const Signin = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const formSubmitHandler = (data) => {
    console.log(data);
  }

  return (

    <div className='sign--in'>

      <div className='sign--in-content1'>

        <div className='sign--in-logo'>
          <img src={logo} className="logo" alt="logo--header" />
        </div>

        <div className='sign--in-text'>
          <h1 className='sign--in-h1'>Welcome back!</h1>
          <p className='sign--in-body'>eForm.ng can help you fill your form efficiently from the comfort of your home</p>
        </div>

        <div className='sign--in-content2'>

          <form className='form--body' onSubmit={handleSubmit(formSubmitHandler)}>

            <div className='Box'>

            <label htmlFor="email" className="lbs">Email Address</label>
         
            <input 
              {...register("email")}
              className='inBox'
              type="email"
              name="email" 
            />
            {errors.email ? (
            <span className="text-red-900">{errors.email.message}</span>
          ) : (
            <></>
          )}

            </div>


            <div className='Box'>
            <label htmlFor="password" className='lbs'>Password</label>
            
            <input 
              {...register("password")}
              className='inBox inBox2'
              type="password"
              name="password"
            />
            <label htmlFor="forgot password" className='lbs-rhs'>FORGOT PASSWORD?</label>
            <div>
            {errors.password ? (
            <span className="text-red-900">{errors.password.message}</span>
          ) : (
            <></>
          )}
            </div>
            </div>

              <div className="btn__group">
              <button type="submit" className='btn__sign-in'> Sign in</button>

              {/*
              <button type="submit" className='btn__social'> <FcGoogle /> Sign in with Google</button>
              <button type="submit" className='btn__social'> <FaFacebook className='facebk'/> Sign in with Facebook</button>
              */}
              </div>
            {/*
           
  */}
            <span className='acct'>Don't have an account? <Link to="/signup">Sign up</Link></span>
          </form>
        </div>
      </div>

    </div>
  
  )

}

export default Signin;