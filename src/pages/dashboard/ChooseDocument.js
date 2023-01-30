import './styles/chooseDocument.css'
const ChooseDocument = () => {
    return ( 
        <div className="choose-document-page-container">
            <p>My Documents</p>
            <div className="choose-document-page-content-container">
                <ul className="choose-document-table-headers">
                    <li>Name of Document</li>
                    <li>Action</li>
                </ul>
                <ul className="choose-document-items">
                    <li>
                        <span>HOD Letter</span>
                        <button>Create Affidavit</button>
                    </li>
                    <li>
                        <span>HOD Letter</span>
                        <button>Create Affidavit</button>
                    </li>
                    <li>
                        <span>HOD Letter</span>
                        <button>Create Affidavit</button>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default ChooseDocument;