import React from 'react'
import {Outlet} from "react-router-dom"
import data from '../../assets/dataFiles/footerData'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import App from "../../App.css"

const Layout = () => {
  return (
    <>
    

    <section >
      <Outlet />
    </section>

 
    </>
  )
}

export default Layout