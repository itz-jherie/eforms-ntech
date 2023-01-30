import { NavLink } from 'react-router-dom';
import './styles/createdocument.css'

const CreateDocument = () => {
    return ( 
        <div className="create-document-page-container">
            <p>My Documents</p>
            <p className='no-documents-text'>You Currently don't have any documents</p>
            <NavLink to="choose"><button className="create-document-btn">Create Document</button></NavLink> 
        </div>
     );
}
 
export default CreateDocument;