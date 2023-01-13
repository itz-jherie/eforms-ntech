import React from 'react';
import "./hero.css";
import img from "../../assets/images/guy_working.png";

const Hero = () => {
  return (
    <div className='hero'>

      <div className='hero--lhs'>
      <h1 className="hero--title">Sign and Fill Nigerian courts Affidavit</h1>
      <p className="hero--text">From The Comfort Of Your Home</p>
      </div>

     <div className="hero--rhs">
     <img src={img} className="hero--image" />
     </div>
    </div>
  )
}

export default Hero