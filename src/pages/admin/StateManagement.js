import './styles/statemanagement.css'
import ps from '../../assets/svglogos/ps.svg'
import edit from '../../assets/svglogos/edit.svg'
import minus from '../../assets/svglogos/minus.svg'
import { stateData } from '../../data/stateData'

import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import AddNewState from '../../components/newstate/AddNewState'
import AdminHamburger from './AdminHamburger'

const StateManagement = () => {
    const navigate = useNavigate()
    const [isShown, setIsShown] = useState(false)

    const handleButtonClick = () => {
        navigate('create')
    }
    
    const handleEditButtonClick = () => {
        navigate('modify-state')
    }
    return (
            <div className="state-management">
                <div className="mobile-state-management">
                    <section className='hamburger'>
                        <AdminHamburger title="State Management" />
                    </section>
                    <section className='mobile-state-content'>
                        <section className='mobile-state-details'>
                            <button onClick={handleButtonClick}>&#43;</button>
                            <table>
                                <tr>
                                    <th>S/N</th>
                                    <th>LGA</th>
                                    <th>State</th>
                                    <th>Action</th>
                                </tr>
                                {stateData?.map(state => (
                                    <tr className='state'>
                                        <td>{state.id}</td>
                                        <td>{state.stateName}</td>
                                        <td>{state.lga}</td>
                                        <td style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '15px',
                                        }}>
                                            <button style={{
                                                width: '39px',
                                                height: '25px',
                                                borderRadius: '10px',
                                                background: 'linear-gradient(297.9deg, #757575 71.41%, rgba(117, 117, 117, 0) 105.29%)',
                                                border: 'none',
                                                outline: 'none',
                                                cursor: 'pointer',
                                            }}
                                            onClick={handleEditButtonClick}
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
                <div className="desktop-state-management">
                    <header>
                        <h2>State Management</h2>
                    </header>
                    <section className="desktop-add-button">
                        <button onClick={handleButtonClick}>&#43;</button>
                    </section>
                    <section className='desktop-state-details'>
                        <table>
                            <tr>
                                <th>S/N</th>
                                <th>LGA</th>
                                <th>State</th>
                                <th>Action</th>
                            </tr>
                            {stateData?.map(state => (
                                <tr className='state'>
                                    <td>{state.id}</td>
                                    <td>{state.stateName}</td>
                                    <td>{state.lga}</td>
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
export default StateManagement