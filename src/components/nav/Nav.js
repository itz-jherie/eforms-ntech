import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {FaTimes, FaBars} from 'react-icons/fa';
import logo from "../../assets/images/Logo_white.png";
import Button from "../cta/Button";
import "./nav.css"

const Nav = () => {

  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileButton = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  /*window.addEventListener('resize', showButton);
  */

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => {
      window.removeEventListener('resize', showButton);
    }
  }, []);


  return (
  
    <nav className="navbar">

      <div className='nav__brand'>
        <Link to="/" className="nav__logo">
          <img src={logo} className="logo"/>
        </Link>
      </div>
      
      <div className={click ? 'nav__links active' : 'nav__links'}>
      <Link  className="navbar__link" to="/"> Home </Link>
    <Link className="navbar__link" to="/official"> Official </Link>
    <Link className="navbar__link" to="/business"> Business </Link>
    <Link className="navbar__link" to="/personal"> Personal </Link>
      
    <div className='nav__cta'>
        <Link to="/signin">
          <button className='signin__btn'>Sign in</button>
          {/*
        <Button className="bn" buttonStyle="btn--outline" buttonColor="transparent" content="sign in" size="btn--medium" />
  */}
        </Link>
        
        <Link to="/signup">
        <button className='signup__btn'>Create Account</button>
          {/*
        <Button className="bn" buttonStyle="btn--success" buttonColor="green" content="sign up" size="btn--medium"/>
  */}
        </Link>
      </div>
      </div>

      

      <div className='menutButton' onClick={handleClick}>
        {click ? <FaTimes className='fa-times'/> : <FaBars className='fa-bars'/>}
      </div>
    </nav>
    
  )
}

export default Nav