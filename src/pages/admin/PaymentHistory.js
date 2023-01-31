import './styles/paymenthistory.css'
import view from '../../assets/svglogos/view.svg'
import { paymentHistory } from "../../data/paymentHistory"
import { useNavigate } from 'react-router'

const PaymentHistory = () => {
    const navigate = useNavigate()

    const handleViewButton = () => {
        navigate("user")
    }

    return (
        <div className="payment-history">
            <div className="mobile-payment-history"></div>
            <div className="desktop-payment-history">
                <header>
                    <h2>Payment History</h2>
                </header>
                <section className="desktop-history-details">
                    <table>
                        <tr>
                            <th>S/N</th>
                            <th>User Details</th>
                            <th>Descriptions</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        {paymentHistory.map(history => (
                            <tr className='state'>
                                <td>{history.id}</td>
                                <td>{history.user}</td>
                                <td>{history.description}</td>
                                <td>{history.amount}</td>
                                <td style={{textTransform: 'uppercase', color: 'green'}}>{history.status}</td>
                                <td>
                                    <button style={{
                                        background: 'none',
                                        outline: 'none',
                                        border: 'none',
                                        textAlign: 'justify',
                                        cursor: 'pointer',
                                        color: 'green',
                                        cursor: 'pointer',
                                    }}
                                    onClick={handleViewButton}
                                    >VIEW <img src={view} alt="view" style={{margin: 'auto', verticalAlign: 'middle'}}/></button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </section>
            </div>
        </div>
    )
}
export default PaymentHistory