import './styles/manageadmin.css'
import edit from '../../assets/svglogos/edit.svg'
import minus from '../../assets/svglogos/minus.svg'
import { admin } from '../../data/admin'
import { useNavigate } from 'react-router-dom'
import AdminHamburger from './AdminHamburger'

const ManageAdmin = () => {
    const navigate = useNavigate()

    const handleNewAdminButton = () => {
        navigate('new-admin')
    }

    const handleModifyAdminButton = () => {
        navigate('modify-admin')
    }
    return (
        <div className="manage-admin">
            <div className="mobile-manage-admin">
                <section className='hamburger'>
                    <AdminHamburger title="Admin Management" />
                </section>
                <section className='mobile-admin-content'>
                    <section className='mobile-admin-details'>
                        <button onClick={handleNewAdminButton}>&#43;</button>
                        <table>
                            <tr>
                                <th>S/N</th>
                                <th>Full Name</th>
                                <th>Username</th>
                                <th>Action</th>
                            </tr>
                            {admin?.map(data => (
                                <tr className='state'>
                                    <td>{data.id}</td>
                                    <td>{data.fullName}</td>
                                    <td>
                                        <p>{data.userName}</p><br/>
                                        <p style={{color: '#20A352'}}>Role: {data.role}</p>
                                    </td>
                                    <td style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '15px',
                                    }}>
                                        <button 
                                        style={{
                                            width: '39px',
                                            height: '25px',
                                            borderRadius: '10px',
                                            background: 'linear-gradient(297.9deg, #757575 71.41%, rgba(117, 117, 117, 0) 105.29%)',
                                            border: 'none',
                                            outline: 'none',
                                            cursor: 'pointer',
                                        }}
                                        onClick={handleModifyAdminButton}
                                        ><img src={edit} alt="edit icon" /></button>
                                        <button style={{
                                            width: '39px',
                                            height: '25px',
                                            borderRadius: '10px',
                                            background: 'linear-gradient(300.1deg, #EE4D1D 59.13%, rgba(238, 77, 29, 0) 103.65%)',
                                            border: 'none',
                                            outline: 'none',
                                            cursor: 'pointer',
                                        }}><img src={minus} alt="edit icon" /></button>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </section>
                </section>
            </div>
            <div className="desktop-manage-admin">
                <header>
                    <h2>Manage Admin</h2>
                </header>
                <section className="desktop-ma-add-button">
                    <button onClick={handleNewAdminButton}>&#43;</button>
                </section>
                <section className='desktop-admin-details'>
                    <table>
                        <tr>
                            <th>S/N</th>
                            <th>Full Name</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                        {admin?.map(data => (
                            <tr className='state'>
                                <td>{data.id}</td>
                                <td>{data.fullName}</td>
                                <td>
                                    <p>{data.userName}</p><br/>
                                    <p style={{color: '#20A352'}}>Role: {data.role}</p>
                                </td>
                                <td style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '15px',
                                }}>
                                    <button 
                                    style={{
                                        width: '52px',
                                        height: '36px',
                                        borderRadius: '10px',
                                        background: 'linear-gradient(297.9deg, #757575 71.41%, rgba(117, 117, 117, 0) 105.29%)',
                                        border: 'none',
                                        outline: 'none',
                                        cursor: 'pointer',
                                    }}
                                    onClick={handleModifyAdminButton}
                                    ><img src={edit} alt="edit icon" /></button>
                                    <button style={{
                                        width: '52px',
                                        height: '36px',
                                        borderRadius: '10px',
                                        background: 'linear-gradient(300.1deg, #EE4D1D 59.13%, rgba(238, 77, 29, 0) 103.65%)',
                                        border: 'none',
                                        outline: 'none',
                                        cursor: 'pointer',
                                    }}><img src={minus} alt="edit icon" /></button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </section>
            </div>
        </div>
    )
}
export default ManageAdmin