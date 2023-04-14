import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import logo from '../../assets/images/Logo_black.png'
import loginForm from "././styles/loginForm.css"
import { FaFacebook } from 'react-icons/fa'
import { useAuth } from '../../utils/authentication/Auth'

const Login = ({onSaveForm = f => f}) => {

    const [formData, setFormData] = useState(
        {
        email: "", 
        password: "",
        role: ""
      }
    )
    const auth = useAuth();
    const navigate = useNavigate();

    function handleFormData(event) {
        // setFormData(prevFormData => {
        //     return {
        //         ...prevFormData,
        //         [event.target.name]: event.target.value
        //     }
        // })

        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {

      event.preventDefault();
        
           auth.login(formData);
        navigate('/court/')
        setFormData({
          email: "",
          password: ""
        })
        //console.log(formData);
        //  setFormData((prev) => {
        //   return {
        //     email: "",
        //     password: ""
        //   }
        // });

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

          <form className='form--body' onSubmit={handleSubmit}>

            <div className='Box'>

            <label htmlFor="email" className="lbs">Email Address</label>
         
            <input 
              value={formData.email}
              id='inBox'
              type="email"
              name="email"
              onChange={handleFormData}
              required 
            />
            </div>

            <div className='Box'>
                    <label htmlFor='role' className="lbs">Role</label>
                    <select id="inBox">
                        <option>User</option>
                        <option>Admin</option>
                        <option>Court</option>
                    </select>
                </div>

            <div className='Box'>
            <label htmlFor="password" className='lbs'>Password</label>
            
            <input 
              value={formData.password}
              id='inBox'
              type="password"
              name="password"
              onChange={handleFormData}
              required
            />
            <label htmlFor="forgot password" className='lbs-rhs'>FORGOT PASSWORD?</label>
            <div>
            
            </div>
            </div>

              <div className="btn__group">
              <button type="submit" className='btn__sign-in'> Sign in</button>

             
              </div>

            <span className='acct'>Don't have an account? <Link to="/signup">Sign up</Link></span>
          </form>
        </div>
      </div>

    </div>
  
  )

}

export default Login;