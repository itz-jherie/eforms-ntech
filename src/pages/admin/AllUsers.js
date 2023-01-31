import './styles/allusers.css'
import { users } from '../../data/users'

const AllUsers = () => {
    return (
        <div className="all-users">
            <div className="mobile-all-users"></div>
            <div className="desktop-all-users">
                <header>
                    <h2>All Users</h2>
                </header>
                <section className="desktop-user-details">
                    <table>
                        <tr>
                            <th>S/N</th>
                            <th>User Details</th>
                            <th>Email/Location</th>
                            <th>Document Statistics</th>
                        </tr>
                        {users?.map(user => (
                            <tr className='state'>
                                <td>{user.id}</td>
                                <td>
                                    <b>{user.userName}</b>
                                    <p style={{color: '#EE4D1D'}}>{user.phone}</p>
                                    <p style={{color: '#395EBF', fontWeight: 400, fontSize: '10px', lineHeight: '12px'}}>{user.lga}</p>
                                    <p style={{color: '#395EBF', fontWeight: 400, fontSize: '10px', lineHeight: '12px'}}>(Zip Code: {user.zipCode})</p>
                                </td>
                                <td>
                                    <p>{user.email}</p>
                                    <p>{user.location}</p>
                                </td>
                                <td>
                                    <p>Total: {user.total}</p>
                                    <p style={{color: '#EE4D1D'}}>Pending: {user.pending}</p>
                                    <p style={{color: 'var(--green)'}}>Approved: {user.approved}</p>
                                    <p style={{color: '#FF0000'}}>Cancelled: {user.cancelled}</p>
                                </td>
                            </tr>
                        ))}
                    </table>
                </section>
            </div>
        </div>
    )
}
export default AllUsers