import hamburgerMenu from '../../assets/svglogos/hamburger-menu.svg'
import './mobilenav.css'
import MobileSidebarUser from '../mobilesidebaruserdashboard/MobileSidebarUser';
import { useState } from 'react';

const MobileNav = (props) => {
    const [show, setShow] = useState(false)
    return ( 
        <>
        <MobileSidebarUser show={show} onClose={() => setShow(false)}/>
        <div className="mobile-nav-container">
            <div onClick={() => setShow(!show)}className="hamburger"><img src={hamburgerMenu}/></div>
            <div className='navbar-title'>{props.title}</div>
        </div>
        </>
     );
}
 
export default MobileNav;