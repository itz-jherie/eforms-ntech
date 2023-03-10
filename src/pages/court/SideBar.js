import React from 'react';
import  "./styles/sidebar.css";
import {FaBars} from "react-icons/fa";
import logo from "../../assets/svglogos/eform-logo-white.svg";
import { Link } from 'react-router-dom';

// icons
import {TbLogout} from "react-icons/tb"
import { RxDashboard } from "react-icons/rx";
import {  SlReload } from "react-icons/sl";
import {AiOutlineUserAdd} from "react-icons/ai";
import {BsFolder2Open} from "react-icons/bs";

const SideBar = () => {

  return (
  <div className='sidebar'>
      <div className='sidebar__header'> 
        <img src={logo} className="logo" />
      </div>

      <div className='sidebar__content'>
        <div className='lnk'>
        <RxDashboard className='links__icon'/>
        <Link to="/court" className='links'><span className='link__cont'>Admin Dashboard</span></Link>
        </div>

        <div className='lnk'>
        <SlReload className='links__icon'/>
        <Link to="/court/pendingapplication" className='links'>Pending Application</Link>
        </div>
        

        <div className='lnk'>
        <AiOutlineUserAdd className='links__icon'/>
        <Link to="/court/commisionerofoath" className='links'>Commisioner of Oath</Link>
        </div>
        
        <div className='lnk'>
        <BsFolder2Open className='links__icon'/>
        <Link to="/court/approvedaffidavit" className='links'>Approved Affidavit</Link>
        </div>
        
      </div>

      <div className='sidebar__footer'>
        <div className='profile'>
          <img src="" className='profileImage'/>
          <span className="profile__text">Ntech Systems </span>
        </div>
        <button className='logout__Button'><TbLogout /> Logout</button>
      </div>
  </div>     
  )
}

export default SideBar;