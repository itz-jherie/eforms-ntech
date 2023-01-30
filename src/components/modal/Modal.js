import './modal.css'
import logo from '../../assets/svglogos/modal-confirm-logo.svg'
const Modal = (props) => {
    if(!props.show) {
        return null
    }
    return ( 
        <div className='modal' onClick={props.onClose}>
            <div className='modal-content-container' onClick={e => e.stopPropagation()}>
                <img src={logo}/>
                <p className='modal-confirm'>Confirm</p>
                <p className='modal-text'>
                    You are about to submit your affidavit, 
                    Kindly ensure that all information provided 
                    are true and valid. Once submitted, you won’t be
                     able to modify this affidavit
                </p>
                <div className='modal-btn-container'>
                    <button className='modal-btn-ok' onClick={() => props.onClose()}>OK</button>
                    <button className='modal-btn-cancel'>Cancel</button>
                </div>
                
            </div>
        </div>
     );
}
 
export default Modal;