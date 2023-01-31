import './styles/managecourt.css'
import edit from '../../assets/svglogos/edit.svg'
import minus from '../../assets/svglogos/minus.svg'
import courtLogo from '../../assets/images/courtLogo.png'
import seal from '../../assets/images/seal.png'
import { courts } from '../../data/court'
import { useNavigate } from 'react-router'

const ManageCourt = () => {
    const navigate = useNavigate()
    
    const handleAddCourtButton = () => {
        navigate("new-court")
    }

    const handleModifyCourtButton = () => {
        navigate("modify-court")
    }

    return (
        <div className="manage-court">
            <div className="mobile-manage-court"></div>
            <div className="desktop-manage-court">
                <header>
                    <h2>Manage Court</h2>
                </header>
                <section className="desktop-court-button">
                    <button onClick={handleAddCourtButton}>&#43;</button>
                </section>
                <section className="desktop-court-details">
                    <table>
                        <tr>
                            <th>S/N</th>
                            <th>Court Name</th>
                            <th>State</th>
                            <th>LGA</th>
                            <th>Action</th>
                        </tr>
                        {courts?.map(court => (
                            <tr className='state'>
                                <td>{court.id}</td>
                                <td>
                                    <img src={courtLogo} alt="court logo"  style={{verticalAlign: 'middle', marginRight: '8px'}} />
                                    <img src={seal} style={{verticalAlign: 'middle', marginRight: '8px'}} alt='court logo'  />
                                    {court.courtName}
                                </td>
                                <td>{court.stateName}</td>
                                <td>{court.lgaName}</td>
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
                                    onClick={handleModifyCourtButton}
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
export default ManageCourt