import React from 'react';
import { Link } from 'react-router-dom';
import {RxHamburgerMenu} from "react-icons/rx"
import logo from "../../assets/images/Logo_white.png"
import Button from "../cta/Button";
import "./nav.css"

const Nav = () => {
  return (
    <div className="navbar">

      <img src={logo} className='logo' alt="logo" />
      
      <div className="navbar-rhs">

      <nav>
        <Link to="/" className="lnks">Home</Link>
        <Link to="Personal" className="lnks">Personal</Link>
        <Link to="Business" className="lnks">Business</Link>
        <Link to="Official" className="lnks">Official</Link>
      </nav>
      <Button className="nakedBtn" content="Sign in"/>
      <Button className="lgBtn" content="Create Account"/>
      </div>
      <RxHamburgerMenu className='menu'/> 

      <div className='hiddenMenu'></div>
    </div>
  )
}

export default Nav