import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";
import {FiFacebook, FiInstagram, FiTwitter, FiYoutube} from "react-icons/fi";


const Footer = ({logo, name, link1, link2, link3, link4, term1, term2, term3, term4, contact1, contact2, copyright}) => {
  return (
    <div className="footer">

     <div className='footer--content1'>

     <div className='footer--about'>
        <img src={logo} className="logoI" alt="logo"/>

            <span className='footer--content'>{name}</span>
    
      </div>

      <div className='footer--link'>
          <h3 className='header'>Permalinks</h3>
          <Link to="/" id="lnks">{link1}</Link>
          <Link to="personal" id="lnks">{link2}</Link>
          <Link to="business" id="lnks">{link3}</Link>
          <Link to="official" id="lnks">{link4}</Link>
      </div>

      <div className='footer--term'>
        <h3 className='header'>Privacy</h3>
          <Link to="Terms" id="lnks">{term1}</Link>
          <Link to="Terms" id="lnks">{term2}</Link>
          <Link to="Terms" id="lnks">{term3}</Link>
          <Link to="Terms" id="lnks">{term4}</Link>
      </div>

      <div className='footer--contact'>
       <div className="contacts">
       <h3 className='header'>Contact Us</h3>
        <p id="lnks">{contact1}</p>
        <p id="lnks">{contact2}</p>
       </div>
        <div className='contact--icons'>
          <FiFacebook className='icons' color="white"/>
          <FiInstagram className='icons' color="white" />
          <FiTwitter className='icons' color="white" />
          <FiYoutube className='icons' color="white" />
        </div>
      </div>
     </div>
     <hr className='hr'/>
     
    <div className='footer--content2'>
    <p className="cp__text">{copyright}</p>
    </div>

    </div>
  )
}

export default Footer;