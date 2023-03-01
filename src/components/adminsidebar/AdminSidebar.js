import { NavLink } from "react-router-dom"
import './adminsidebar.css'
import eformLogo from '../../assets/svglogos/eform-logo-white.svg'
import doubleArrowClose from '../../assets/svglogos/doubleArrowClose.svg'
import  user  from '../../assets/svglogos/user.svg'
import  dashboard  from '../../assets/svglogos/dashboard.svg'
import  document  from '../../assets/svglogos/document.svg'
import  payment  from '../../assets/svglogos/payment.svg'
import  settings  from '../../assets/svglogos/settings.svg'
import state from '../../assets/svglogos/state-logo.svg'
import lock from '../../assets/svglogos/lock.svg'
import folder from '../../assets/svglogos/folder.svg'

const AdminSidebar = ({ isActive }) => {
    return (
        <div className={isActive ? 'sidebar__container--active' : 'sidebar__container'}>
            <div className="admin-sidebar">
                <div className="admin-sidebar-title">
                    <img src={eformLogo} alt="logo" className="eform-logo"/>
                    <span>E-Form ng</span>
                </div>
                <NavLink to="/admin" className="nav-links">
                    <div className="icon-container">
                        <img src={dashboard} alt='dashboard icon'/>
                    </div>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="state-management" className="nav-links">
                    <div className="icon-container">
                        <img src={state} alt='user icon'/>
                    </div>
                    <span>State Management</span>
                </NavLink>
                <NavLink to="lga-management" className="nav-links">
                    <div className="icon-container">
                        <img src={state} alt='dashboard icon'/>
                    </div>
                    <span>LGA Management</span>
                </NavLink>
                <NavLink to="change-password" className="nav-links">
                    <div className="icon-container">
                        <img src={lock} alt='payment icon'/>
                    </div>
                    <span>Change Password</span>
                </NavLink>
                <NavLink to="manage-admin" className="nav-links">
                    <div className="icon-container">
                        <img src={user} alt='payment icon'/>
                    </div>
                    <span>Manage Admin</span>
                </NavLink>
                <NavLink to="manage-court" className="nav-links">
                    <div className="icon-container">
                        <img src={settings} alt='settings icon'/>
                    </div>
                    <span>Manage Court</span>
                </NavLink>
                <NavLink to="manage-affidavit" className="nav-links">
                    <div className="icon-container">
                        <img src={folder} alt='settings icon'/>
                    </div>
                    <span>Manage Affidavit</span>
                </NavLink>
                <NavLink to="payment-history" className="nav-links">
                    <div className="icon-container">
                        <img src={payment} alt='settings icon'/>
                    </div>
                    <span>Payment History</span>
                </NavLink>
                <NavLink to="all-users" className="nav-links">
                    <div className="icon-container">
                        <img src={user} alt='settings icon'/>
                    </div>
                    <span>All Users</span>
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
export default AdminSidebar