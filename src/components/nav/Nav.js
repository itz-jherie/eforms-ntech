import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {AiOutlineClose} from "react-icons/ai"
import {RxHamburgerMenu} from "react-icons/rx"
import logo from "../../assets/images/Logo_white.png"
import Button from "../cta/Button";
import "./nav.css"

const Nav = () => {

  const [toggleButton, setToggleButton] = useState(false);

  function toggle() {
    setToggleButton(prevState => !prevState);
  }
  return (
    <div className="navbar">

      <div className="navbar-lhs">
      <img src={logo} className='logo' alt="logo" />
      </div>

      <div className="navbar-rhs1">

    <nav className='obvious'>
      <Link to="/" className="lnks">Home</Link>
      <Link to="Personal" className="lnks">Personal</Link>
      <Link to="Business" className="lnks">Business</Link>
      <Link to="Official" className="lnks">Official</Link>
      <div className='nav2'>
      <Link to="signin" className="nakedBtn">Sign in</Link>
    <Link to="signup" className="lgBtn">Create Account</Link>
      </div>
    </nav>
      </div>
     {toggleButton ? 
   
   (
    <div className="navbar-rhs">

    <nav className='obvious'>
      <Link to="/" className="lnks">Home</Link>
      <Link to="Personal" className="lnks">Personal</Link>
      <Link to="Business" className="lnks">Business</Link>
      <Link to="Official" className="lnks">Official</Link>
      <div className='nav2'>
      <Link to="signin" className="nakedBtn">Sign in</Link>
    <Link to="signup" className="lgBtn">Create Account</Link>
      </div>
    </nav>

    <div className='menu'>
  <AiOutlineClose className='hiddenMenu'onClick={toggle}/>

</div>
    </div>
  )
  :
  <div className='menu2'>
  <RxHamburgerMenu className='hiddenMenu'onClick={toggle}/>

</div>
    
    }

     
      
    </div>
  )
}

export default Nav