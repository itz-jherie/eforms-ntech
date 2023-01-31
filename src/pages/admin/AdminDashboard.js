import './styles/admindashboard.css'
import total from '../../assets/svglogos/total-documents-logo.svg'
import pending from '../../assets/svglogos/pending-logo.svg'
import completed from '../../assets/svglogos/completed-logo.svg'
import rejected from '../../assets/svglogos/rejected-logo.svg'
import { details } from '../../data/dashboardData'
import AdminHamburger from './AdminHamburger'

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <div className="mobile-admin-dashboard">
                <section className='hamburger'>
                    <AdminHamburger title="Dashboard" />
                </section>
                <section className="mobile-dashboard-content">
                    <section className='mobile-dashboard-search'>
                        <input type='text' placeholder='Search...' />
                    </section>
                    <section className='mobile-overview'>
                        <h3>Overviews</h3>
                        <div className='mobile-card'>
                            <><img src={total} alt='total' /></>
                            <div>
                                <span style={{fontWeight: 700, fontSize: '24px', lineHeight: '29px'}}>3</span>
                                <span style={{fontWeight: 400, fontSize: '12px', lineHeight: '15px'}}>Total Applied</span>
                            </div>
                        </div>
                        <div className='mobile-card'>
                            <><img src={pending} alt='pending' /></>
                            <div>
                                <span style={{fontWeight: 700, fontSize: '24px', lineHeight: '29px'}}>2</span>
                                <span style={{fontWeight: 400, fontSize: '12px', lineHeight: '15px'}}>Pending</span>
                            </div>
                        </div>
                        <div className='mobile-card'>
                            <><img src={completed} alt='approved' /></>
                            <div>
                                <span style={{fontWeight: 700, fontSize: '24px', lineHeight: '29px'}}>6</span>
                                <span style={{fontWeight: 400, fontSize: '12px', lineHeight: '15px'}}>Completed</span>
                            </div>
                        </div>
                        <div className='mobile-card'>
                            <><img src={rejected} alt='rejected' /></>
                            <div>
                                <span style={{fontWeight: 700, fontSize: '24px', lineHeight: '29px'}}>3</span>
                                <span style={{fontWeight: 400, fontSize: '12px', lineHeight: '15px'}}>Rejected</span>
                            </div>
                        </div>
                    </section>
                    <section className='mobile-recent-applications'></section>
                </section>
            </div>
            <div className="desktop-admin-dashboard">
                <header>
                    <div>Dashboard</div>
                    <><input type="search" placeholder="Search..." /></>
                </header>
                <section className='desktop-overview'>
                    <h3>Overviews</h3>
                    <div className='overview-card'>
                        <div className="desktop-card" id="total-btn">
                            <><img src={total}/></>
                            <div>
                                <span style={{fontWeight: 700, fontSize: '24px', lineHeight: '29px'}}>3</span>
                                <span style={{fontWeight: 400, fontSize: '12px', lineHeight: '15px'}}>Total Applied</span>
                            </div>
                        </div>
                        <div className="desktop-card" id="pending-btn">
                            <><img src={pending}/></>
                            <div>
                                <span style={{fontWeight: 700, fontSize: '24px', lineHeight: '29px'}}>2</span> 
                                <span style={{fontWeight: 400, fontSize: '12px', lineHeight: '15px'}}>Pending</span> 
                            </div>
                        </div>
                        <div className="desktop-card" id="completed-btn">
                            <><img src={completed}/></>
                            <div>
                                <span style={{fontWeight: 700, fontSize: '24px', lineHeight: '29px'}}>6</span>
                                <span style={{fontWeight: 400, fontSize: '12px', lineHeight: '15px'}}>Completed</span> 
                            </div>
                        </div>
                        <div className="desktop-card" id="rejected-btn">
                            <><img src={rejected}/></>
                            <div>
                                <span style={{fontWeight: 700, fontSize: '24px', lineHeight: '29px'}}>0</span>
                                <span style={{fontWeight: 400, fontSize: '12px', lineHeight: '15px'}}>Rejected</span> 
                            </div>
                        </div>                  
                    </div>
                </section>
                <section className='desktop-recent-applications'>
                    <h3>Recent Applications</h3>
                    <table className='desktop-table'>
                        <tr>
                            <th>Username</th>
                            <th>Doc Name</th>
                            <th>Date Created</th>
                            <th>Tracking ID</th>
                            <th>Status</th>
                        </tr>
                        {details?.map(detail => (
                                <tr className='desktop-details-row'>
                                    <th>{detail.userName}</th>
                                    <th>{detail.docName}</th>
                                    <th>{detail.dateCreated}</th>
                                    <th>{detail.trackingID}</th>
                                    <th>{detail.status}</th>
                                </tr>
                            ))}
                    </table>
                </section>
            </div>
        </div>
    )
}
export default AdminDashboard