import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/cta/Button'
import logo from "../assets/images/Logo_black.png"
import "./signup.css"

const Signup = () => {

  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      middleName: "",
       lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkBOx: ""
    }
  )

  function handleChange(event) {
    event.preventDefault();

    console.log(formData);
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
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

    <form className='form--body' onSubmit={handleChange}>

      {/* FIRST NAME */}
      <div className='Box'>
      <label htmlFor="firstName" className="lbs">First Name</label>
      <input 
        className='inBox'
        type="text"
        onChange={handleChange}
        name="firstName" 
        value={formData.firstName}
      />
      </div>

      {/* MIDDLE NAME */}
      <div className='Box'>
      <label htmlFor="middleName" className="lbs">Middle Name</label>
      <input 
        className='inBox'
        type="text"
        onChange={handleChange}
        name="middleName" 
        value={formData.middleName}
      />
      </div>

      {/* LAST NAME */}
      <div className='Box'>
      <label htmlFor="lastName" className="lbs">Last Name</label>
      <input 
        className='inBox'
        type="text"
        onChange={handleChange}
        name="lastName" 
        value={formData.lastName}
      />
      </div>

      <div className='Box'>
      <label htmlFor="email" className="lbs">Email Address</label>
      <input 
        className='inBox'
        type="email"
        onChange={handleChange}
        name="email" 
        value={formData.email}
      />
      </div>


      <div className='Box'>
      <label htmlFor="password" className='lbs'>Password</label>
      <input 
        className='inBox inBox2'
        type="password"
        onChange={handleChange}
        name="password"
        value={formData.password}
      />
     
      </div>

      <div className='Box'>
        <label htmlFor="confirm password" className='lbs'>Confirm Password</label>

        <input 
          className='inBox inBox3'
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={formData.confirmPassword}
        />
      </div>

      <div className='BoxCheck'>
        <input 
          className='inBox4'
          type="checkbox"
          onChange={handleChange}
          name="checkBox"
          value={formData.checkBox}
        />
        <label>I agree to the terms of <Link to="Term">terms of use &#38; privacy policy</Link></label>
      </div>


      <Button className="lgBtn sBtn" content="Sign up" />

      

      <span className='acct'>Already had an account? <Link to="Signin">Sign in</Link></span>
    </form>
  </div>

    </div>

</div>

  )
}

export default Signup