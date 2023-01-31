import './styles/fillform.css'
import MobileNav from '../../components/mobilenavbar/MobileNav';
const FillForm = () => {
    return (
        <>
        <MobileNav title="Fill Form"/>
        <div className="fillform-page-container">
            <p>
                Fill Form - Affidavit as to loss of Vehicles Particulars <br/>
                including Driver's License
            </p>
            <div className="fillform-container">
                <div className="form-container">
                    <form>
                        <div className='fill-form-item'>
                            <label>State</label>
                                <select>
                                    <option value="">Select State</option>
                                    <option value="Ondo">akure north </option>
                                    <option value="Ekiti">akure south</option>
                                </select>
                        </div>
                        <div className='fill-form-item'>
                            <label>L.G.A</label>
                            <select>
                                <option value="">Select LGA</option>
                                <option value="Ondo">akure north </option>
                                <option value="Ekiti">akure south</option>
                            </select>
                        </div>
                        <div className='fill-form-item'>
                            <label>Court Name (For Pickup)</label>
                                <select>
                                    <option value="">Select Court Name</option>
                                    <option value="Ondo">akure north </option>
                                    <option value="Ekiti">akure south</option>
                                </select>
                        </div>
                        <div className='create-form-btn'>
                            <button>Create Document</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
      );
}
 
export default FillForm;