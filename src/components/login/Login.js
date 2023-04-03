import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/images/Logo_black.png';
import "./logon.css";
import Swal from 'sweetalert2';



const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState(
        {
        email: "", 
        password: "",
        role: ""
        });

        const [formErrors, setFormErrors] = useState({});

      const handleInputChange = (event) => {

      const { name, value, type} = event.target;

      setFormData((prevData) => ({
        ...prevData,
        [name] : value,
      }));
    }        

   
    

    function handleSubmit(event) {

      console.log(formData);

      event.preventDefault();

      const errors = {};

      // Perform validation check here
      if (!formData.email) {
        errors.email = 'Email is required';
      } else if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) {
        errors.email = "Invalid Email"
      }

      if (!formData.role)
        return errors.role = 'role is required';

      if(!formData.password) {
        errors.password = 'Password is required';
      } else if (formData.password < 8) {
        errors.password = "Password must be atleast 8 characters";
      }

           
           
           setFormErrors(errors);

           // Submit form if there are no errors
           if (Object.keys(errors).length === 0) {

            //Perform form submission

          // Display SweetAlert on successful
            Swal.fire({
              icon: 'success',
              title: 'Welcome back!',
              text: 'You have successfully logged in.',
            })

            if (formData.role === "Admin"){
              navigate('/admin');
                setFormData({
                  email: "",
                  password: "",
                  role: ""
                });
          } else if (formData.role === "Court") {
              navigate('/court');
              setFormData({
                email: "",
                password: "",
                role: ""
               });
          } else {
            navigate('/user');
            setFormData({
              email: "",
              password: "",
              role: ""
             });
          }

          
           }

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
              name="email" 
              value={formData.email}
              type="email"
              placeholder='Email'
              className='inBox'
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            {formErrors.email && <span>{formErrors.email}</span>}
            </div>

            <div className='Box'>
                    <label htmlFor='role' className="lbs">Role</label>
                    <select
                      name="role"
                      className='inBox'
                      value={formData.role}
                      onChange={handleInputChange}
                      required 
                    >
                        <option value="">Choose...</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                        <option value="Court">Court</option>
                    </select>
                    {formErrors.role && <span>{formErrors.role}</span>}
                </div>

            <div className='Box'>
            <label htmlFor="password" className='lbs'>Password</label>
            
            <input 
              name="password"
              value={formData.password}
              type="password"
              className='inBox'
              placeholder='password'
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            <label htmlFor="forgot password" className='lbs-rhs'>FORGOT PASSWORD?</label>
            {formErrors.password && <span>{formErrors.password}</span>}
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