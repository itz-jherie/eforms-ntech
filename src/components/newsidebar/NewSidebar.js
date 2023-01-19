import { NavLink } from "react-router-dom"
import './newsidebar.css'
import eformLogo from '../../assets/svglogos/eform-logo-white.svg'
import doubleArrowClose from '../../assets/svglogos/doubleArrowClose.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  user  from '../../assets/svglogos/user.svg'
import  dashboard  from '../../assets/svglogos/dashboard.svg'
import  document  from '../../assets/svglogos/document.svg'
import  payment  from '../../assets/svglogos/payment.svg'
import  settings  from '../../assets/svglogos/settings.svg'

const NewSidebar = ({ isActive }) => {
    return (
        <div className={isActive ? 'sidebar__container--active' : 'sidebar__container'}>
            <div className="sidebar">
                <div className="sidebar-title">
                    <img src={eformLogo} alt="logo" className="eform-logo"/>
                    <span>E-Form ng</span>
                    <img src={doubleArrowClose} className='double-arrow' alt="double backward arrow"/>
                </div>
                <NavLink to="/dashboard" className="nav-links">
                    <div className="icon-container">
                        <img src={dashboard} alt='dashboard icon'/>
                    </div>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="/account" className="nav-links">
                    <div className="icon-container">
                        <img src={user} alt='user icon'/>
                    </div>
                    <span>Account</span>
                </NavLink>
                <NavLink to="/documents" className="nav-links">
                    <div className="icon-container">
                        <img src={document} alt='dashboard icon'/>
                    </div>
                    <span>Documents</span>
                </NavLink>
                <NavLink to="/payment" className="nav-links">
                    <div className="icon-container">
                        <img src={payment} alt='payment icon'/>
                    </div>
                    <span>Payments</span>
                </NavLink>
                <NavLink to="/new-settings" className="nav-links">
                    <div className="icon-container">
                        <img src={settings} alt='settings icon'/>
                    </div>
                    <span>Settings</span>
                </NavLink>
                <div className="sidebar-logout-section">
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
export default NewSidebar