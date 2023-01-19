import React from 'react'
import { Link } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import logo from '../../assets/images/Logo_black.png'
import Button from "../../components/cta/Button"
import ButtonIcon from "../../components/cta/ButtonIcon"
import "./signin.css"
import { FaFacebook } from 'react-icons/fa'

const Signin = () => {

  const [formData, setFormData] = React.useState(
    {
      email: "",
      password: ""
    }
  )

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
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

          <form className='form--body'>

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
            <label htmlFor="forgot password" className='lbs-rhs'>FORGOT PASSWORD?</label>
            </div>


            <Button className="lgBtn sBtn" content="Sign in" />

            <ButtonIcon className="lgtransparent sBtn" content="Sign in with Google" icon={<FcGoogle />} />

            <ButtonIcon className="lgtransparent sBtn" content="Sign in with Facebook" icon={<FaFacebook className='facebk'/>}/>

            <span className='acct'>Don't have an account? <Link to="Signup">Sign up</Link></span>
          </form>
        </div>
      </div>

    </div>
  
  )

}

export default Signin;