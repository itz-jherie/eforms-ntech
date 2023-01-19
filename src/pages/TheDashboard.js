import './thedashboard.css'
import total from '../assets/svglogos/total-documents-logo.svg'
import pending from '../assets/svglogos/pending-logo.svg'
import completed from '../assets/svglogos/completed-logo.svg'
import rejected from '../assets/svglogos/rejected-logo.svg'
import { details } from '../data/dashboardData'

const TheDashboard = () => {
    return (
        <div className="dashboard">
            <div className="mobile-dashboard">
                {/* <header>
                    <div>DashBoard</div>
                    <><button>Create Document</button></>
                    <><input type='search' placeholder="Search" /></>
                </header> */}
            </div>
            <div className="desktop-dashboard">
                    <header>
                        <div style={{color: '#111111', fontSize: '28px', fontWeight: '600', lineHeight: '34px'}}>Dashboard</div>
                        <div className='button-input'>
                            <><button>Create Document</button></>
                            <><input type='search' placeholder="Search..." /></>
                        </div>
                    </header>
                    <div className='desktop-dashboard-overview'>
                        <p>Overviews</p>
                        <div className='overview-tags'>
                            <div className="overview-card">
                                <><img src={total}/></>
                                <div className='overview-span'>
                                    <span style={{fontSize: '24px', lineHeight: '29px', fontweight: '700px', color:'#000000'}}>10</span>
                                    <span style={{fontSize: '12px', lineHeight: '15px', fontweight: '400px', color:'#000000'}}>Total Documents</span>
                                </div> 
                            </div>
                            <div className="overview-card">
                                    <><img src={pending}/></>
                                    <div  className='overview-span'>
                                        <span style={{fontSize: '24px', lineHeight: '29px', fontweight: '700px', color:'#000000'}}>2</span>
                                        <span style={{fontSize: '12px', lineHeight: '15px', fontweight: '400px', color:'#000000'}}>Pending</span>
                                    </div>
                            </div>
                            <div className="overview-card">
                                <><img src={completed}/></>
                                <div className='overview-span'>
                                    <span style={{fontSize: '24px', lineHeight: '29px', fontweight: '700px', color:'#000000'}}>6</span>
                                    <span style={{fontSize: '12px', lineHeight: '15px', fontweight: '400px', color:'#000000'}}>Completed</span>
                                </div>
                            </div>
                            <div className="overview-card">
                                <><img src={rejected}/></>
                                <div className='overview-span'>
                                <span  style={{fontSize: '24px', lineHeight: '29px', fontweight: '700px', color:'#000000'}}>2</span> 
                                <span style={{fontSize: '12px', lineHeight: '15px', fontweight: '400px', color:'#000000'}}>Rejected</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='desktop-completed-details'>
                        <div className='details-header'>
                            <div>Name</div>
                            <div>Date Created</div>
                            <div>Tracking ID</div>
                            <div>Status</div>
                            <div>Action</div>
                        </div>
                        <div>
                            {details?.map(detail => (
                                <div className='details-card'>
                                    <div><p>{detail.name}</p></div>
                                    <div>{detail.dateCreated}</div>
                                    <div>{detail.trackingID}</div>
                                    <div>{detail.status}</div>
                                    <div>{detail.action}</div>
                                </div>
                            ))}
                        </div>
                    </div> */}
            </div>
        </div>
    )
}
export default TheDashboard