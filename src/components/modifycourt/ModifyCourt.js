import AdminHamburger from '../../pages/admin/AdminHamburger'
import './modifycourt.css'

const ModifyCourt = () => {
    return (
        <div className="modify-court">
            <div className="mobile-modify-court">
                <header className='hamburger'>
                    <AdminHamburger title="Modify Court" />
                </header>
                <section className='modify-court-content'>
                    <section className='mobile-modify-court-form'>
                        <form>
                            <label htmlFor="state">
                                <b>Select Role</b>
                                <select name='role' id='role'>
                                    <option value="lagos">Lagos</option>
                                    <option value="ondo">Ondo</option>
                                    <option value="oyo">Oyo</option>
                                </select>
                            </label>
                            <label htmlFor="lga">
                                <b>Select Role</b>
                                <select name='role' id='role'>
                                    <option value="ikeja">Ikeja</option>
                                    <option value="alimosho">Alimosho</option>
                                    <option value="agege">Agege</option>
                                </select>
                            </label>
                            <label htmlFor="enter court name">
                                <b>Enter Court Name</b>
                                <input type="text" placeholder="Federal High Court of Nigeria" />
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
                            <button className='mobile-modify-court-button'>Modify Court</button>
                        </form>
                    </section>
                </section>
            </div>
            <div className="desktop-modify-court">
                <header>
                    <div>Modify Court</div>
                </header>
                <div className="desktop-modify-court-form">
                <form>
                        <label htmlFor="state">
                            <b>Select Role</b>
                            <select name='role' id='role'>
                                <option value="lagos">Lagos</option>
                                <option value="ondo">Ondo</option>
                                <option value="oyo">Oyo</option>
                            </select>
                        </label>
                        <label htmlFor="lga">
                            <b>Select Role</b>
                            <select name='role' id='role'>
                                <option value="ikeja">Ikeja</option>
                                <option value="alimosho">Alimosho</option>
                                <option value="agege">Agege</option>
                            </select>
                        </label>
                        <label htmlFor="enter court name">
                            <b>Enter Court Name</b>
                            <input type="text" placeholder="Federal High Court of Nigeria" />
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
                        <button className='desktop-new-court-button'>Modify Court</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ModifyCourt