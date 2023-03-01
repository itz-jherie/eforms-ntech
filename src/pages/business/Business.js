import React from 'react';
import Footer from '../../components/footer/Footer';
import Main from '../../components/main/Main';
import Maincontent from '../../components/maincontent/Maincontent';
import data from '../../assets/dataFiles/footerData';
import Nav from '../../components/nav/Nav';
import img from "../../assets/images/guy_working.png";
import "./business.css";

const Business = () => {
  return (
    <>
    <Nav />
    <div className='hero'>

      <div className='hero--lhs'>
      <h1 className="hero--title">Business Document</h1>
      <p className="hero--text">Users could submit their personal information.These forms typically include fields for the individual's name, address, phone number, email, and other personal information.</p>
      </div>

     <div className="hero--rhs">
     <img src={img} className="hero--image" />
     </div>
    </div>
    <Main />
    <Maincontent />
    <Footer
      logo={data.logo}
      name={data.name}
      link1={data.link1}
      link2={data.link2}
      link3={data.link3}
      link4={data.link4}
      term1={data.term1}
      term2={data.term2}
      term3={data.term3}
      term4={data.term4}
      contact1={data.contact1}
      contact2={data.contact2}
      copyright={data.copyright}
    />
    </>
  )
}

export default Business