import React, { useState } from 'react';
import  sidebar from "././styles/sidebar.css"
import {FaBars} from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/eform_green.png"

// icons
import {TbLogout} from "react-icons/tb"
import { RxDashboard } from "react-icons/rx";
import {  SlReload } from "react-icons/sl";
import {AiOutlineUserAdd} from "react-icons/ai";
import {BsFolder2Open} from "react-icons/bs";

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/authentication/Auth';

const SideBar = () => {

  const [isActive, setIsActive] = useState(false);

  //const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    //auth.logout();
    navigate('/');
  }

  return (
  <div className="sideBBar">
      <div className='sidebar__header'> 
        <img src={logo} className="logo" />
      </div>

      <div className='sidebar__content'>
        <div className='lnk'>
        <RxDashboard className='links__icon' size="20px"/>
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
        <button className='logout__Button' onClick={handleLogout}><TbLogout /> Logout</button>
      </div>
  </div>     
  )
}

export default SideBar;