import './paymentdetails.css'
import { paymentHistory } from '../../data/paymentHistory'
import { details } from '../../data/dashboardData'

const PaymentHistoryDetails = () => {
    return (
        <div className="payment-details">
            <div className="mobile-payment-details"></div>
            <div className="desktop-payment-details">
                <header>
                    <div>Payment History</div>
                </header>
                <div className='desktop-details-container'>
                    <div>
                        <span>Client Name</span>
                        <span>Ogundowole Raheem</span>
                    </div>
                    <div>
                        <span>Phone Number</span>
                        <span>09033024846</span>
                    </div>
                    <div>
                        <span>Email Address</span>
                        <span>oluwatayoadeyemi@yahoo.com</span>
                    </div>
                    <div>
                        <span>Affidavit Type</span>
                        <span>Affidavit as to Loss of Vehicle Particulars including Driver's license</span>
                    </div>
                    <div>
                        <span>Tracking ID</span>
                        <span>23010414177966</span>
                    </div>
                    <div>
                        <span>Amount</span>
                        <span>₦5000</span>
                    </div>
                    <div>
                        <span>Payment Reference</span>
                        <span>468990243436</span>
                    </div>
                    <div>
                        <span>Paystack Reference</span>
                        <span>gtnh4pt6h8</span>
                    </div>
                    <div>
                        <span>Status</span>
                        <span style={{color: '#20A352'}}>COMPLETED</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PaymentHistoryDetails