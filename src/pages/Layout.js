import React from 'react'
import {Outlet} from "react-router-dom"
import Nav from '../components/nav/Nav'

const Layout = () => {
  return (
    <>
    <Nav />

    <section>
      <Outlet />
    </section>
    </>
  )
}

export default Layout