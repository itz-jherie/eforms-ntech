import './styles/changepassword.css'

const ChangePassword = () => {
    return (
        <div className="change-password">
            <div className="mobile-change-password">
                <header>
                    <h3>Change Password</h3>
                </header>
                <div className="mobile-form"></div>
            </div>
            <div className="desktop-change-password">
                <header>
                    <h3>Change Password</h3>
                </header>
                <div className="desktop-form">
                    <form>
                        <label htmlFor='old password'>
                            <b>Old Password</b>
                            <input type="password" placeholder="********" />
                        </label>
                        <label htmlFor='old password'>
                            New Password
                            <input type="password" placeholder="********" />
                        </label>
                        <label htmlFor='old password'>
                            Confirm Password
                            <input type="password" placeholder="********" />
                        </label>
                        <button>Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ChangePassword