import { NavLink } from "react-router-dom"
import { useState } from "react"
import './mobilesidebaruser.css'
import eformLogo from '../../assets/svglogos/eform-logo-white.svg'
import doubleArrowClose from '../../assets/svglogos/doubleArrowClose.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  user  from '../../assets/svglogos/user.svg'
import  dashboard  from '../../assets/svglogos/dashboard.svg'
import  document  from '../../assets/svglogos/document.svg'
import  payment  from '../../assets/svglogos/payment.svg'
import  settings  from '../../assets/svglogos/settings.svg'

const MobileSidebarUser = (props) => {
   if (!props.show) {
    return null;
   }
    return (
        <div className="mobile-sidebar-container" onClick={ props.onClose}>
            <div className="mobile-sidebar" onClick={e => e.stopPropagation()}>
                <div className="mobile-sidebar-title">
                    <img src={eformLogo} alt="logo" className="eform-logo"/>
                    <span>E-Form ng</span>
                    <img src={doubleArrowClose} onClick={ props.onClose} className='double-arrow' alt="double backward arrow"/>
                </div>
                <NavLink to="/user-dashboard" className="nav-links">
                    <div className="icon-container">
                        <img src={dashboard} alt='dashboard icon'/>
                    </div>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="account" className="nav-links">
                    <div className="icon-container">
                        <img src={user} alt='user icon'/>
                    </div>
                    <span>Account</span>
                </NavLink>
                <NavLink to="documents" className="nav-links">
                    <div className="icon-container">
                        <img src={document} alt='dashboard icon'/>
                    </div>
                    <span>Documents</span>
                </NavLink>
                <NavLink to="payment" className="nav-links">
                    <div className="icon-container">
                        <img src={payment} alt='payment icon'/>
                    </div>
                    <span>Payments</span>
                </NavLink>
                <NavLink to="settings" className="nav-links">
                    <div className="icon-container">
                        <img src={settings} alt='settings icon'/>
                    </div>
                    <span>Settings</span>
                </NavLink>
                <div className="mobile-sidebar-logout-section">
                    <div className="user-profile">
                        <><img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="profile-photo" /></>
                        <span>Emmanuel</span>
                    </div>
                    <div className="logout-button">
                        <button><i className="fas fa-sign-out-alt"></i>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MobileSidebarUser