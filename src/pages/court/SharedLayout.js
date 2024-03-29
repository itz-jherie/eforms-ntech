import React, {useState} from 'react';
import { Outlet } from 'react-router'
import "././styles/sharedlayout.css";
import { FaTimes, FaBars } from 'react-icons/fa'
import SideBar from './SideBar'
import OverlaySideBar from '../../components/overlaySideBar/OverlaySideBar'


const SharedLayout = () => {

  const [menu, setMenu] = useState(false);

  function collapseSidebar(){
    setMenu((c) => !c);
  }

  function collapseSidebarUsingDashboard() {
    if (menu == true){
      setMenu(false);
    }
  }

  return (
    <div className='sharedLayout' onClick={collapseSidebarUsingDashboard}>
       <SideBar className="sharedSideBar"/> 
       <div className="hamBurgs">
       {menu ? <FaTimes className="menuSideButton-times" onClick={collapseSidebar}/> : <FaBars className='menuSideButton-bars'  onClick={collapseSidebar} />}
     {menu ? <OverlaySideBar className="overlaySideBar" /> : <></>}
       </div>
      <Outlet />
    </div>
  )
}

export default SharedLayout;