import React from 'react';
import { Link } from 'react-router-dom';
import "./hero.css";
import img from "../../assets/images/manSitting.svg";

const Hero = () => {
  return (
    <div className='hero'>

      <div className='hero--lhs'>
      <h1 className="hero--title">Sign <span>and</span> Fill Nigerian courts Affidavit</h1>
      <p className="hero--text">Lorem ipsum dolor sit amet consectetur. Ut quis suscipit vestibulum in eu ma  dolor sit amet consectetur. Ut quis suscipit vestibulum</p>

      <Link to="/signup">
        <button className='signup__btn'>Register Now</button>

        </Link>
      </div>

     <div className="hero--rhs">
     <img src={img} className="hero--image" />
     </div>
    </div>
  )
}

export default Hero