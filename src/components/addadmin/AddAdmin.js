import AdminHamburger from '../../pages/admin/AdminHamburger'
import './addadmin.css'

const AddAdmin = () => {
    return (
        <div className="add-admin">
            <div className="mobile-add-admin">
                <header>
                    <AdminHamburger title="Add Admin" />
                </header>
                <section className='mobile-add-admin-content'>
                    <section className='mobile-add-admin-form'>
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
                                    <option value="select role" disabled>Select Role</option>
                                    <option value="role">Role</option>
                                    <option value="role">Role</option>
                                    <option value="role">Role</option>
                                </select>
                            </label>
                            <button className='mobile-add-admin-button'>Add Admin</button>
                        </form>
                    </section>
                </section>
            </div>
            <div className="desktop-add-admin">
                <header>
                    <div>Add Admin</div>
                </header>
                <div className="desktop-add-admin-form">
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
                                <option value="select role" disabled>Select Role</option>
                                <option value="role">Role</option>
                                <option value="role">Role</option>
                                <option value="role">Role</option>
                            </select>
                        </label>
                        <button className='desktop-add-admin-button'>Add Admin</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddAdmin