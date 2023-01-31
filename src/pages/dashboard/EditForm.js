import './styles/editform.css'
import MobileNav from '../../components/mobilenavbar/MobileNav';
const EditForm = () => {
    return ( 
        <>
        <MobileNav title="Edit Template"/>
        <div className="edit-form-page-container">
            <div className='edit-page-content'>
                <p className='editform-title'>Fill Form - Affidavit as to Next of Kin</p>
                <div className='edit-form-alert'>Success your request has been saved successfully</div>
                <p className='edit-note'><span>Please Note: </span>Edit the form below with your appropriate details</p>
                <div className='editable-content-container'>
                    <hr className='rule'></hr>
                    <p contentEditable='true'>
                        IN THE HIGH COURT OF JUSTICE
                        ONDO STATE OF NIGERIA
                        IN THE ONDO JUDICIAL DIVISION
                        HOLDEN AT ONDO
                        AFFIDAVIT OF NEXT- OF- KIN
                        I, MRS. FOLASADE OYESILE (NEE MAKINWA), Female, Christian, Yoruba, Nigerian Citizen residing at No. 1, Makinwa Street, Road 1, Funbi Fagun Crescent, Ondo, do hereby make Oath and state as follows:-
                        That I am the declarant herein.

                    </p>
                </div>
                
                <button>Save & Continue</button>
            </div>
        </div>
        </>
     );
}
 
export default EditForm;