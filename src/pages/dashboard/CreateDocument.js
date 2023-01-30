import { NavLink } from 'react-router-dom';
import './styles/createdocument.css'
import MobileNav from '../../components/mobilenavbar/MobileNav';
const CreateDocument = () => {
    return ( 
        <>
        <MobileNav title="My Documents"/>
        <div className="create-document-page-container">
            <p className='create-document-title'>My Documents</p>
            <p className='no-documents-text'>You Currently don't have any documents</p>
            <NavLink to="choose"><button className="create-document-btn">Create Document</button></NavLink> 
        </div>
        </>
     );
}
 
export default CreateDocument;