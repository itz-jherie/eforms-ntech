import './admindashboard.css'
import total from '../../assets/svglogos/total-documents-logo.svg'
import pending from '../../assets/svglogos/pending-logo.svg'
import completed from '../../assets/svglogos/completed-logo.svg'
import rejected from '../../assets/svglogos/rejected-logo.svg'
import { details } from '../../data/dashboardData'

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <div className="mobile-admin-dashboard">
                <header>
                    <div>Dashboard</div>
                    <><input type="search" placeholder="Search..." /></>
                </header>
                <section className='overview'>
                    <h3>Overviews</h3>
                    <div className='overview-card'>
                        <div className="total-documents" id="total-btn">
                            <><img src={total}/></>
                            <div>
                                <span style={{fontWeight:'bold'}}>10</span>
                                <span>Total Documents</span>
                            </div>
                        </div>
                        <div className="pending" id="pending-btn">
                            <><img src={pending}/></>
                            <div>
                                <span style={{fontWeight:'bold'}}>2</span> 
                                <span>Pending</span> 
                            </div>
                        </div>
                        <div className="completed" id="completed-btn">
                            <><img src={completed}/></>
                            <div>
                                <span style={{fontWeight:'bold'}}>6</span>
                                <span>Completed</span> 
                            </div>
                        </div>
                        <div className="rejected" id="rejected-btn">
                            <><img src={rejected}/></>
                            <div>
                                <span style={{fontWeight:'bold'}}>2</span>
                                <span>Rejected</span> 
                            </div>
                        </div>                    
                    </div>
                </section>
                <section className='recent-application'></section>
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
                    <div></div>
                </section>
            </div>
        </div>
    )
}
export default AdminDashboard