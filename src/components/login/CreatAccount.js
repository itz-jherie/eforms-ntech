import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./createaccount.css"
import logo from "../../assets/images/Logo_black.png"
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'



const CreatAccount = () => {

     const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        isChecked: false,
        
    })

    const [formError, setFormError] = useState({});

    const handleFormData = (event) => {
     const {name, type, value, checked} = event.target
      
     if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
     } else {
      setFormData(prevState => ({
        ...prevState,
        [name] : value
      }))
     }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        // Perform validation checks here

        if (!formData.firstName) {
          errors.firstName = "firstName is required"
        } else if (!/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/) {
          errors.firstName = "Invalid Name"
        }

        if (!formData.lastName) {
          errors.lastName = "lastName is required"
        } else if (!/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/) {
          errors.lastName = "Invalid Name"
        }

        if (!formData.middleName) {
          errors.middleName = "Name is required"
        } else if (!/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/) {
          errors.middleName = "Invalid Name"
        }

        if (!formData.email) {
          errors.email = "Email is required";
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) {
          errors.email = "Invalid email";
        }

        if (!formData.password) {
          errors.password = "Password is required";
        } else if (formData.password.length  < 8) {
          errors.password = "Password must be atleast 8 characters";
        }

        if(!formData.confirmPassword){
          errors.confirmPassword = "Confirm password is required"
        }else if (formData.password != formData.confirmPassword) {
          errors.confirmPassword = "Password do not match";
        }

        if (!formData.isChecked) {
          errors.isChecked = "Required checkbox not checked"
        }

        setFormError(errors);

        // Submit form if there are no errors

        if (Object.keys(errors).length === 0){
          console.log(formData);
          console.log("success");
          setFormData({
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            isChecked: "",
          });

          // Display SweetAlert on successful
          Swal.fire({
            icon: 'success',
            title: 'Welcome!!!',
            text: 'Enter your details.',
          })

          navigate('/MultiStepForm')

        }
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

    <form className='form--body' onSubmit={handleSubmit}>

      {/* FIRST NAME */}
      <div className='Box'>
      <label htmlFor="firstName" className="lbs">First Name</label>
      
      <input
        className='inBox'
        type="text"
        name="firstName" 
        value={formData.firstName}
        onChange={handleFormData}
        
      />

      {formError.firstName && <span className='errorMsg'>{formError.lastName}</span>}
      
      </div>

      {/* MIDDLE NAME */}
      <div className='Box'>
      <label htmlFor="middleName" className="lbs">Middle name</label>
      
      <input 
        className='inBox'
        type="text"
        name="middleName"
        value={formData.middleName}
        onChange={handleFormData}
        
      />
      {formError.middleName && <span className='errorMsg'>{formError.middleName}</span>}
      
      </div>

      {/* LAST NAME */}
      <div className='Box'>
      <label htmlFor="lastName" className="lbs">Last Name</label>
      
      <input 
        className='inBox'
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleFormData}
        
      />
      {formError.lastName && <span className='errorMsg'>{formError.lastName}</span>}

      </div>

        {/* EMail */}
      <div className='Box'>
      <label htmlFor="email" className="lbs">Email Address</label>
      
      <input 
        className='inBox'
        type="email"
        name="email"
        value={formData.email}
        onChange={handleFormData}
        
      />
      {formError.email && <span className='errorMsg'>{formError.email}</span>}

      </div>

        {/* PASSWORD */}
      <div className='Box'>
      <label htmlFor="password" className='lbs'>Password</label>
      <input 
        className='inBox inBox2'
        type="password"
        name="password"
        value={formData.password}
        onChange={handleFormData}
        
      />
        {formError.password && <span className='errorMsg'>{formError.password}</span>}
     
      </div>

        {/* CONFIRM PASSWORD */}
      <div className='Box'>
        <label htmlFor="confirm password" className='lbs'>Confirm Password</label>

        <input 
          className='inBox inBox3'
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleFormData}
          
        />
        {formError.confirmPassword && <span className='errorMsg'>{formError.confirmPassword}</span>}

      </div>

        {/* CHECKBOX */}
      <div className='BoxCheck'>
        <div className="mvTop">
        <input 
          className='inBox4'
          type="checkbox"
          name="isChecked"
          checked={formData.isChecked }
          onChange={handleFormData}
              
          />
        <label>I agree to the terms of <Link to="Term">terms of use &#38; privacy policy</Link></label>
        
        </div>
        <div className="mvUnder">
        {formError.isChecked && <span className='errorMsg'>{formError.isChecked}</span>}
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

export default CreatAccount;