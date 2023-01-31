import './styles/manageaffidavit.css'
import edit from '../../assets/svglogos/edit.svg'
import minus from '../../assets/svglogos/minus.svg'
import { affidavit } from '../../data/affidavit'
import { useNavigate } from 'react-router'

const ManageAffidavit = () => {
    const navigate = useNavigate()

    const handleNewAffidavitButton = () => {
        navigate("new")
    }

    const handleModifyAffidavitButton = () => {
        navigate("modify")
    }

    return (
        <div className="manage-affidavit">
            <div className="mobile-manage-affidavit"></div>
            <div className="desktop-manage-affidavit">
                <header>
                    <h2>Manage Affidavit</h2>
                </header>
                <section className="desktop-affidavit-button">
                    <button onClick={handleNewAffidavitButton}>&#43;</button>
                </section>
                <section className="desktop-affidavit-details">
                    <table>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Date Added</th>
                            <th>Action</th>
                        </tr>
                        {affidavit?.map(data => (
                            <tr className='state'>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.dateAdded}</td>
                                <td style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '15px',
                                }}>
                                    <button style={{
                                        width: '52px',
                                        height: '36px',
                                        borderRadius: '10px',
                                        background: 'linear-gradient(297.9deg, #757575 71.41%, rgba(117, 117, 117, 0) 105.29%)',
                                        border: 'none',
                                        outline: 'none',
                                        cursor: 'pointer',
                                    }}
                                    onClick={handleModifyAffidavitButton}
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
export default ManageAffidavit