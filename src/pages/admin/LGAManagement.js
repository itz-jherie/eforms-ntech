import './styles/lgamanagement.css'
import edit from '../../assets/svglogos/edit.svg'
import minus from '../../assets/svglogos/minus.svg'
import { lgaData } from '../../data/lgaData'
import NewLGA from '../../components/newlga/NewLGA'

import { useNavigate } from 'react-router-dom'
import AdminHamburger from './AdminHamburger'

const LGAManagement = () => {
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('create-lga')
    }

    const handleEditButtonClick = () => {
        navigate('modify-lga')
    }

    return (
        <div className="lga-management">
            <div className="mobile-lga-management">
                <section className='hamburger'>
                    <AdminHamburger title="LGA Management" />
                </section>
                <section className='mobile-lga-content'> 
                    <section className='mobile-lga-details'>
                        <button onClick={handleButtonClick}>&#43;</button> 
                        <table>
                            <tr>
                                <th>S/N</th>
                                <th>LGA</th>
                                <th>State</th>
                                <th>Action</th>
                            </tr>
                            {lgaData?.map(lga => (
                                <tr className='state'>
                                    <td>{lga.id}</td>
                                    <td>{lga.lgaName}</td>
                                    <td>{lga.stateName}</td>
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
                                        onClick={handleEditButtonClick}
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
                </section>
            </div>
            <div className="desktop-lga-management">
                <header>
                    <h2>LGA Management</h2>
                </header>
                <section className="desktop-lga-add-button">
                    <button onClick={handleButtonClick}>&#43;</button>
                </section>
                <section className='desktop-lga-details'>
                    <table>
                        <tr>
                            <th>S/N</th>
                            <th>LGA</th>
                            <th>State</th>
                            <th>Action</th>
                        </tr>
                        {lgaData?.map(lga => (
                            <tr className='state'>
                                <td>{lga.id}</td>
                                <td>{lga.lgaName}</td>
                                <td>{lga.stateName}</td>
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
                                    onClick={handleEditButtonClick}
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
export default LGAManagement