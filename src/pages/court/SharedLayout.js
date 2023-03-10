import React from 'react';
import { Outlet } from 'react-router'
import Dashboard from './Dashboard'
import "././styles/sharedlayout.css";
import SideBar from './SideBar';


const SharedLayout = () => {
  return (
    <div className='sharedLayout'>
      <SideBar className="sideBar"/>
      <Outlet />
    </div>
  )
}

export default SharedLayout