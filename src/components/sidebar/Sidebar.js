import './sidebar.css'
import { NavLink, Link } from 'react-router-dom'
import  user  from '../../assets/svglogos/user.svg'
import  dashboard  from '../../assets/svglogos/dashboard.svg'
import  document  from '../../assets/svglogos/document.svg'
import  payment  from '../../assets/svglogos/payment.svg'
import  settings  from '../../assets/svglogos/settings.svg'
import eformLogo from '../../assets/svglogos/eform-logo-white.svg'
import doubleArrowClose from '../../assets/svglogos/doubleArrowClose.svg'
import logout from '../../assets/svglogos/logout.svg'

const Sidebar = () => {
    return ( 
        <nav className="sidebar-container">
            <div className='sidebar-title'>
                <img src={eformLogo}/>
                <span>E-Form ng</span>
                <img src={doubleArrowClose} className='double-arrow'/>
                </div>
            <ul className='sidebar-list'>
                <li><a href='/dashboard'><img src={dashboard}/>Dashboard</a></li>
                <li><a href='/account'><img src={user}/>Account</a></li>
                <li><a href='/documents'><img src={document}/>My Documents</a></li>
                <li><a href='/payment'><img src={payment}/>Payment</a></li>
                <li><a href='/settings'><img src={settings}/>Settings</a></li>
                
            </ul>
            <div>Emmanuel</div>
            <button>
                <img src={logout}/>
                <span>Logout</span>
            </button>

        </nav>
     );
}
 
export default Sidebar;