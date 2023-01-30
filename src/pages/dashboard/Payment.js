import './styles/payment.css'
import MobileNav from '../../components/mobilenavbar/MobileNav'

const Payment = () => {
    return (
        <>
        <MobileNav/>
        <div className="payment-page-container">
            <p>Payment History</p>
            <div className="payment-page-content-container">
                <ul className="payment-table-headers">
                    <li>TRACKING ID</li>
                    <li>DATE</li>
                    <li>STATUS</li>
                    <li>Payment</li>
                    <li>AMOUNT</li>
                    <li>ACTION</li>
                </ul>
                <ul className="payment-items">
                    <li>
                        <span>2222-4444-5363-3425</span>
                        <span>Wed 21, Dec 2023</span>
                        <span>Completed</span>
                        <span>System</span>
                        <span>#20,000</span>
                        <span>View</span>
                    </li>
                </ul>
            </div>
        </div>
        
        </>
    )
}
export default Payment