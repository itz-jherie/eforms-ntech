import './styles/settings.css'
const NewSettings = () => {
    return (
        <div className="settings-page-container">
            <p>Password Reset</p>
            <div className="password-container">
                <div className="reset-container">
                    <form>
                        <div className='password-form-item'>
                            <label>Old Password</label>
                            <input type='password'/>
                        </div>
                        <div className='password-form-item'>
                            <label>New Password</label>
                            <input type='password'/>
                        </div>
                        <div className='password-form-item'>
                            <label>Confirm New Password</label>
                            <input type='password'/>
                        </div>
                        <div className='reset-btn'>
                            <button>Change My Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default NewSettings