import './styles/accountpage.css'
import img from '../../assets/images/guy_working.png'
import editProfilePicbtn from '../../assets/svglogos/change-profile-img.svg'

const Account = () => {
    return (
        <div className='rer'>
            <div className="account-page-container">
                <p>Account Info</p>
                <div className='username-pic-container'>
                    <div className='img-container'> 
                        <img src={img}   alt="user profile image" />
                        <button>
                            <img src={editProfilePicbtn} />
                        </button>
                    </div>
                    <div className='username-container'>
                        <p>Emmanuel Smith Lakes</p>
                        <p style={{fontWeight: 300, fontSize: "16px"}}>Akure, Ondo</p>
                    </div>
                    
                </div>

                <form>
                    <div className='form-item firstname'>
                        <label>First Name</label>
                        <input placeholder="Enter First Name"/>
                    </div>

                    <div className='form-item lastname'>
                        <label>Last Name</label>
                        <input placeholder="Enter Last Name"/>
                    </div>
                    
                    <div className='form-item middlename'>
                        <label>Middle Name</label>
                        <input placeholder="Enter Middle Name"/>
                    </div>
                    
                    <div className='form-item email'>
                        <label>Email Address</label>
                        <input placeholder="emmanuel@gmail.com"/>
                    </div>

                    <div className='form-item phone'>
                        <label>Phone Number</label>
                        <input placeholder="Enter phone number"/>
                    </div>
                    
                    <div className='form-item state'>
                        <label>States</label>
                        <select>
                            <option value="">Choose a state</option>
                            <option value="Ondo">Ondo </option>
                            <option value="Ekiti">Ekiti</option>
                        </select>
                    </div>
                    
                    <div className='form-item lga'>
                        <label>L.G.A</label>
                        <select>
                            <option value="">Choose a state</option>
                            <option value="Ondo">akure north </option>
                            <option value="Ekiti">akure south</option>
                        </select>
                    </div>
                    
                    <div className='form-item zipcode'>
                        <label>Zip Code</label>
                        <input placeholder="Enter zipcode"/>
                    </div>
                    

                    <div className='form-item contact'>
                        <label>Contact Address</label>
                        <input placeholder="Enter Contact Address" />
                        
                    </div>
                    <button className='savebtn'>Save Changes</button>
                </form>
                
                
            </div>
        </div>
    )
}
export default Account