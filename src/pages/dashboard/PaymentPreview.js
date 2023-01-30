import './styles/paymentpreview.css'
const PaymentPreview = () => {
    return (
        <div className="payment-preview-page-container">
            <div className='payment-preview-page-content'>
                <p className='payment-title'>Payment Preview</p>
                <ul>
                    <li><span>Description</span><p>Affidavit as to loss of vehicle particulars including Drivers license</p></li>
                    <li><span>Amount</span><p>#5,000.00</p></li>
                    <li><span>Document Reference</span><p>2398884562673876</p></li>
                    <li><span>Tracking ID</span><p>358395867329586</p></li>
                    <li><span>Amount</span><p>#5000</p></li>
                    <li><span>Transaction Reference</span><p>564356792968743</p></li>
                    <li><span>Transaction Date</span><p>Sun 15, Jan 2023 05:49pm</p></li>
                </ul>
                
                
                <p className='payment-note'><span>NOTE: </span>Please write down your Transaction reference incase of a failed transaction</p>
                <button className="proceed-btn">Proceed to Payment</button>
            </div>
        </div>
      );
}
 
export default PaymentPreview;