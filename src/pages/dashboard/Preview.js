import './styles/preview.css'
import timeline from '../../assets/svglogos/document_timeline.svg'
import Modal from '../../components/modal/Modal';
import { useState } from 'react';
import MobileNav from '../../components/mobilenavbar/MobileNav';
const Preview = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <MobileNav title='Document Preview'/>
            <div className="preview-page-container">
                <Modal show={showModal} onClose={() => setShowModal(false)}/>
                <div className='preview-page-content'>
                    <div className='timeline-container'><img src={timeline} /></div>
                    <div className='preview-file'>
                        
                    </div>
                    <button className='previewbtn modify'>Modify Information</button>
                    <button className='previewbtn save' onClick={() => setShowModal(true)}>Save & Preview</button>
                </div>
        </div></>
    );
}
 
export default Preview;