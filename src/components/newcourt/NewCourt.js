import AdminHamburger from '../../pages/admin/AdminHamburger'
import './newcourt.css'

const NewCourt = () => {
    return (
        <div className="new-court">
            <div className="mobile-new-court">
                <header>
                    <AdminHamburger title="Add New Court" />
                </header>
                <section className='new-court-content'>
                    <section className='mobile-new-court-form'>
                        <form>
                            <label htmlFor="state">
                                <b>Select State</b>
                                <select name='state' id='state'>
                                    <option value="select state" disabled>Select state</option>
                                    <option value="lagos">Lagos</option>
                                    <option value="ondo">Ondo</option>
                                    <option value="oyo">Oyo</option>
                                </select>
                            </label>
                            <label htmlFor="lga">
                                <b>Select LGA</b>
                                <select name='lga' id='lga'>
                                    <option value="select lga" disabled>Select LGA</option>
                                    <option value="ikeja">Ikeja</option>
                                    <option value="alimosho">Alimosho</option>
                                    <option value="agege">Agege</option>
                                </select>
                            </label>
                            <label htmlFor="enter court name">
                                <b>Enter Court Name</b>
                                <input type="text" placeholder="Court Name" />
                            </label>
                            <label htmlFor="court logo"  style={{marginBottom: '30px'}}>
                                <b>Court Logo</b>
                                <div className='mobile-court-file-button'>
                                    <button>Choose file</button>
                                    {/* <span>No file choosen</span> */}
                                    <input 
                                        type="file" 
                                        multiple={false}
                                        placeholder="Choose File" 
                                        style={{display: 'none'}}
                                    />
                                </div>
                            </label>
                            <label htmlFor="court seal">
                                <b>Court seal</b>
                                <div className='mobile-court-file-button'>
                                    <button>Choose file</button>
                                    {/* <span>No file choosen</span> */}
                                    <input 
                                        type="file" 
                                        multiple={false}
                                        placeholder="Choose File" 
                                        style={{display: 'none'}}
                                    />
                                </div>
                            </label>
                            <div className='mobile-court-background-removal'>
                                <p>Please use <b style={{color: '#FF0000'}}>Remove Background</b> to remove any unwanted background</p>
                            </div>
                            <button className='mobile-new-court-button'>Create Court</button>
                        </form>
                    </section>
                </section>
            </div>
            <div className="desktop-new-court">
                <header>
                    <div>Create New Court</div>
                </header>
                <div className="desktop-new-court-form">
                    <form>
                        <label htmlFor="state">
                            <b>Select Role</b>
                            <select name='role' id='role'>
                                <option value="select state" disabled>Select state</option>
                                <option value="lagos">Lagos</option>
                                <option value="ondo">Ondo</option>
                                <option value="oyo">Oyo</option>
                            </select>
                        </label>
                        <label htmlFor="lga">
                            <b>Select Role</b>
                            <select name='role' id='role'>
                                <option value="select lga" disabled>Select LGA</option>
                                <option value="ikeja">Ikeja</option>
                                <option value="alimosho">Alimosho</option>
                                <option value="agege">Agege</option>
                            </select>
                        </label>
                        <label htmlFor="enter court name">
                            <b>Enter Court Name</b>
                            <input type="text" placeholder="Court Name" />
                        </label>
                        <label htmlFor="court logo"  style={{marginBottom: '30px'}}>
                            <b>Court Logo</b>
                            <div className='desktop-court-file-button'>
                                <button>Choose file</button>
                                <span>No file choosen</span>
                                <input 
                                    type="file" 
                                    multiple={false}
                                    placeholder="Choose File" 
                                    style={{display: 'none'}}
                                />
                            </div>
                        </label>
                        <label htmlFor="court seal">
                            <b>Court seal</b>
                            <div className='desktop-court-file-button'>
                                <button>Choose file</button>
                                <span>No file choosen</span>
                                <input 
                                    type="file" 
                                    multiple={false}
                                    placeholder="Choose File" 
                                    style={{display: 'none'}}
                                />
                            </div>
                        </label>
                        <div className='desktop-court-background-removal'>
                            <p>Please use <b style={{color: '#FF0000'}}>Remove Background</b> to remove any unwanted background</p>
                        </div>
                        <button className='desktop-new-court-button'>Create Court</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default NewCourt