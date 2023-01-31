import { useState } from "react"
import { NavLink } from "react-router-dom"


import './styles/adminhamburger.css'
import eformLogo from '../../assets/svglogos/eform-logo-white.svg'
import  user  from '../../assets/svglogos/user.svg'
import  dashboard  from '../../assets/svglogos/dashboard.svg'
import  document  from '../../assets/svglogos/document.svg'
import  payment  from '../../assets/svglogos/payment.svg'
import  settings  from '../../assets/svglogos/settings.svg'
import state from '../../assets/svglogos/state-logo.svg'
import lock from '../../assets/svglogos/lock.svg'
import folder from '../../assets/svglogos/folder.svg'
import { propNames } from "@chakra-ui/react"

const AdminHamburger = (props) => {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div style={{width: '100%', height: '100vh'}} className="admin-hamburger">
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div>{props.title}</div>
                </div>
            </nav>

            <div className={menu_class}>
                <div className="admin-hamburger-title">
                    <img src={eformLogo} alt="logo" className="eform-logo"/>
                    <span>E-Form ng</span>
                </div>
                <NavLink to="/admin" className="hamburger-nav-links">
                    <div className="hamburger-icon-container">
                        <img src={dashboard} alt='dashboard icon'/>
                    </div>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink to="state-management" className="hamburger-nav-links">
                    <div className="hamburger-icon-container">
                        <img src={state} alt='user icon'/>
                    </div>
                    <span>State Management</span>
                </NavLink>
                <NavLink to="lga-management" className="hamburger-nav-links">
                    <div className="hamburger-icon-container">
                        <img src={state} alt='dashboard icon'/>
                    </div>
                    <span>LGA Management</span>
                </NavLink>
                <NavLink to="change-password" className="hamburger-nav-links">
                    <div className="hamburger-icon-container">
                        <img src={lock} alt='payment icon'/>
                    </div>
                    <span>Change Password</span>
                </NavLink>
                <NavLink to="manage-admin" className="hamburger-nav-links">
                    <div className="hamburger-icon-container">
                        <img src={user} alt='payment icon'/>
                    </div>
                    <span>Manage Admin</span>
                </NavLink>
                <NavLink to="manage-court" className="hamburger-nav-links">
                    <div className="hamburger-icon-container">
                        <img src={settings} alt='settings icon'/>
                    </div>
                    <span>Manage Court</span>
                </NavLink>
                <NavLink to="manage-affidavit" className="hamburger-nav-links">
                    <div className="hamburger-icon-container">
                        <img src={folder} alt='settings icon'/>
                    </div>
                    <span>Manage Affidavit</span>
                </NavLink>
                <NavLink to="payment-history" className="hamburger-nav-links">
                    <div className="hamburger-icon-container">
                        <img src={payment} alt='settings icon'/>
                    </div>
                    <span>Payment History</span>
                </NavLink>
                <NavLink to="all-users" className="hamburger-nav-links">
                    <div className="hamburger-icon-container">
                        <img src={user} alt='settings icon'/>
                    </div>
                    <span>All Users</span>
                </NavLink>
                <div className="hamburger-logout-section">
                    <div className="hamburger-user-profile">
                        <><img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="profile-photo" /></>
                        <span>Emmanuel</span>
                    </div>
                    <div className="hamburger-logout-button">
                        <button><i className="fas fa-sign-out-alt"></i>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminHamburger