import './styles/documents.css'
import { NavLink, useNavigate } from 'react-router-dom';

const Document = () => {
    const navigate = useNavigate()

    const handleButton = () => {
        navigate('create')
    }
    return ( 
        <div className="document-page-container">
            <p>My Documents</p>
            <div className="document-page-content-container">
                <ul className="document-table-headers">
                    <li>AFFIDAVIT NAME</li>
                    <li>TRACKING ID</li>
                    <li>AMOUNT(#)</li>
                    <li>STATUS</li>
                    <li>PAYMENT STATUS</li>
                    <li>DATE CREATED</li>
                    <li>ACTION</li>
                </ul>
                <ul className="document-items">
                    <li>
                        <span>HOD Letter</span>
                        <span>2222-4444-5363-3425</span>
                        <span>#2,000</span>
                        <span>PENDING</span>
                        <span>PENDING</span>
                        <span>Wed 21, Dec 2022</span>
                        <span>View</span>
                    </li>
                </ul>
            </div>
            <button onClick={handleButton} className="create-document-btn">Create Document</button>
        </div>
     );
}
 
export default Document;