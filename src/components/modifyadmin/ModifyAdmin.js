import AdminHamburger from '../../pages/admin/AdminHamburger'
import './modifyadmin.css'

const ModifyAdmin = () => {
    return (
        <div className="modify-admin">
            <div className="mobile-modify-admin">
                <header>
                    <AdminHamburger title="Modify Admin" />
                </header>
                <section className='mobile-modify-admin-content'>
                    <section className='mobile-modify-admin-form'>
                        <form>
                            <label htmlFor="enter full name">
                                <b>Enter Full Name</b>
                                <input type="text" placeholder="John Doe" />
                            </label>
                            <label htmlFor="enter username">
                                <b>Enter Username</b>
                                <input type="text" placeholder="jdoe" />
                            </label>
                            <label htmlFor="enter password">
                                <b>Enter Password</b>
                                <input type="text" placeholder="********" />
                            </label>
                            <label htmlFor="role">
                                <b>Select Role</b>
                                <select name='role' id='role'>
                                    <option value="court admin">Court Admin</option>
                                    <option value="court admin">Court Admin</option>
                                    <option value="court admin">Court Admin</option>
                                </select>
                            </label>
                            <button className='mobile-modify-admin-button'>Modify Admin</button>
                        </form>
                    </section>
                </section>
            </div>
            <div className="desktop-modify-admin">
                <header>
                    <div>Modify Admin</div>
                </header>
                <div className="desktop-modify-admin-form">
                    <form>
                        <label htmlFor="enter full name">
                            <b>Enter Full Name</b>
                            <input type="text" placeholder="John Doe" />
                        </label>
                        <label htmlFor="enter username">
                            <b>Enter Username</b>
                            <input type="text" placeholder="jdoe" />
                        </label>
                        <label htmlFor="enter password">
                            <b>Enter Password</b>
                            <input type="text" placeholder="********" />
                        </label>
                        <label htmlFor="role">
                            <b>Select Role</b>
                            <select name='role' id='role'>
                                <option value="court admin">Court Admin</option>
                                <option value="court admin">Court Admin</option>
                                <option value="court admin">Court Admin</option>
                            </select>
                        </label>
                        <button className='desktop-modify-admin-button'>Modify Admin</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ModifyAdmin