import './styles/dashboard.css'
import total from '../../assets/svglogos/total-documents-logo.svg'
import pending from '../../assets/svglogos/pending-logo.svg'
import completed from '../../assets/svglogos/completed-logo.svg'
import rejected from '../../assets/svglogos/rejected-logo.svg'
import { details } from '../../data/dashboardData'
import MobileNav from '../../components/mobilenavbar/MobileNav'

const TheDashboard = () => {
    const handleViewDocumentDetails = () => {
        document.getElementById("total-documents").style.display = 'flex'
        document.getElementById("pending").style.display = 'none'
        document.getElementById("completed").style.display = 'none'
        document.getElementById("rejected").style.display = 'none'
        //boxshadow
        document.getElementById("total-btn").style.boxShadow = '1px 1px 4px 1px rgba(0, 0, 0, 0.25)'
        document.getElementById("pending-btn").style.boxShadow = 'none'
        document.getElementById("completed-btn").style.boxShadow = 'none'
        document.getElementById("rejected-btn").style.boxShadow = 'none'
    }
    const handleViewPending = () => {
        document.getElementById("total-documents").style.display = 'none'
        document.getElementById("pending").style.display = 'flex'
        document.getElementById("completed").style.display = 'none'
        document.getElementById("rejected").style.display = 'none'
        //boxshadow
        document.getElementById("total-btn").style.boxShadow = 'none'
        document.getElementById("pending-btn").style.boxShadow = '1px 1px 4px 1px rgba(0, 0, 0, 0.25)'
        document.getElementById("completed-btn").style.boxShadow = 'none'
        document.getElementById("rejected-btn").style.boxShadow = 'none'
        

    }
    const handleViewCompleted = () => {
        document.getElementById("total-documents").style.display = 'none'
        document.getElementById("pending").style.display = 'none'
        document.getElementById("completed").style.display = 'flex'
        document.getElementById("rejected").style.display = 'none'
         //boxshadow
         document.getElementById("total-btn").style.boxShadow = 'none'
         document.getElementById("pending-btn").style.boxShadow = 'none'
         document.getElementById("completed-btn").style.boxShadow = '1px 1px 4px 1px rgba(0, 0, 0, 0.25)'
         document.getElementById("rejected-btn").style.boxShadow = 'none'
         
    }
    const handleViewRejected = () => {
        document.getElementById("total-documents").style.display = 'none'
        document.getElementById("pending").style.display = 'none'
        document.getElementById("completed").style.display = 'none'
        document.getElementById("rejected").style.display = 'flex'
         //boxshadow
         document.getElementById("total-btn").style.boxShadow = 'none'
         document.getElementById("pending-btn").style.boxShadow = 'none'
         document.getElementById("completed-btn").style.boxShadow = 'none'
         document.getElementById("rejected-btn").style.boxShadow = '1px 1px 4px 1px rgba(0, 0, 0, 0.25)'
         
    }
    return (
        <>
        <MobileNav title="Dashboard"/>
        <div className="dashboard">
            <div className="mobile-dashboard">
                {/* <header>
                    <div>DashBoard</div>
                    <><button>Create Document</button></>
                    <><input type='search' placeholder="Search" /></>
                </header> */}
            </div>

            <div class="main-container">
                <div class="main">
                    <div class='dashboard-header'>
                        <span>Dashboard</span>
                        <button>Create Document</button>
                        <input  
                            type='input'
                            placeholder="Search..."
                        />
                    </div>
                    <div className="overviews">
                        <span>Overviews</span>
                        <div>
                            <div className="total-documents" id="total-btn" onClick={handleViewDocumentDetails}>
                                <img src={total}/>
                                <span><span style={{fontWeight:'bold'}}>10</span> <br/> Total Documents</span> 
                            </div>
                            <div className="pending" id="pending-btn" onClick={handleViewPending}>
                                <img src={pending}/>
                                <span><span style={{fontWeight:'bold'}}>2</span> <br/> Pending</span> 
                            </div>
                            <div className="completed" id="completed-btn" onClick={handleViewCompleted}>
                                <img src={completed}/>
                                <span><span style={{fontWeight:'bold'}}>6</span> <br/> completed</span> 
                            </div>
                            <div className="rejected" id="rejected-btn" onClick={handleViewRejected}>
                                <img src={rejected}/>
                                <span><span style={{fontWeight:'bold'}}>2</span> <br/> rejected</span> 
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-details">
                        <div className="total-documents-details" id="total-documents">
                            <span>Total Documents</span>
                            <ul>
                                <li>Name</li>
                                <li>Date Created</li>
                                <li>Tracking ID</li>
                                <li>Status</li>
                                <li>Action</li>
                            </ul>
                            <ul className="dashboard-items total-items">
                                <li>
                                    <span>Affidavit as to loss of Vehicle Particulars including Drivers license</span>
                                    <span> Wed 21, Dec 2022 12:27PM</span>
                                    <span>2245-2564-5634-2476</span>
                                    <span>Completed</span>
                                    <span>View</span>
                                </li>
                            </ul>
                        </div>
                        <div className="total-documents-details initial-display" id="pending">
                            <span>Pending</span>
                            <ul>
                                <li>Name</li>
                                <li>Date Created</li>
                                <li>Tracking ID</li>
                                <li>Status</li>
                                <li>Action</li>
                            </ul>
                            <ul className="dashboard-items pending-items">
                                <li>
                                    <span>Affidavit as to loss of Vehicle Particulars including Drivers license</span>
                                    <span> Wed 21, Dec 2022 12:27PM</span>
                                    <span>2245-2564-5634-2476</span>
                                    <span>Completed</span>
                                    <span>View</span>
                                </li>
                            </ul>
                        </div>
                        <div className="total-documents-details initial-display" id="completed">
                            <span>Completed</span>
                            <ul>
                                <li>Name</li>
                                <li>Date Created</li>
                                <li>Tracking ID</li>
                                <li>Status</li>
                                <li>Action</li>
                            </ul>
                            <ul className="dashboard-items completed-items">
                                <li>
                                    <span>Affidavit as to loss of Vehicle Particulars including Drivers license</span>
                                    <span> Wed 21, Dec 2022 12:27PM</span>
                                    <span>2245-2564-5634-2476</span>
                                    <span>Completed</span>
                                    <span>View</span>
                                </li>
                            </ul>
                        </div>
                        <div className="total-documents-details initial-display" id="rejected">
                            <span>Rejected</span>
                            <ul>
                                <li>Name</li>
                                <li>Date Created</li>
                                <li>Tracking ID</li>
                                <li>Status</li>
                                <li>Action</li>
                            </ul>
                            <ul className="dashboard-items rejected-items">
                                <li>
                                    <span>Affidavit as to loss of Vehicle Particulars including Drivers license</span>
                                    <span> Wed 21, Dec 2022 12:27PM</span>
                                    <span>2245-2564-5634-2476</span>
                                    <span>Completed</span>
                                    <span>View</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div></>
    )
}
export default TheDashboard