import React from 'react';
import Footer from '../../components/footer/Footer';
import Hero from "../../components/hero/Hero"
import Main from "../../components/main/Main"
import Maincontent from '../../components/maincontent/Maincontent';
import data from '../../assets/dataFiles/footerData';
import Nav from '../../components/nav/Nav';
import "./home.css"

const Home = () => {
  return (
    <>
    <Nav /> 
    <Hero />
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

export default Home