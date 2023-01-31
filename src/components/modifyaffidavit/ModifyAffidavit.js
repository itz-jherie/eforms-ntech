import './modifyaffidavit.css'

const ModifyAffidavit = () => {
    return (
        <div className="modify-affidavit">
            <div className="mobile-modify-affidavit"></div>
            <div className="desktop-modify-affidavit">
                <header>
                    <div>Modify Affidavit</div>
                </header>
                <div className="desktop-modify-affidavit-form">
                    <form>
                        <label htmlFor="affidavit name">
                            <b>Affidavit Name</b>
                            <input type="text" placeholder="Enter affidavit name" />
                        </label>
                        <label htmlFor="amount">
                            <b>Amount</b>
                            <input type="text" placeholder="Enter amount" />
                        </label>
                        <label htmlFor="court logo"  style={{marginBottom: '30px'}}>
                            <b>Court Logo</b>
                            <div className='desktop-affidavit-file-button'>
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
                        <label htmlFor="affidavit content">
                            <b>Current Affidavit Content</b>
                            <textarea />
                        </label>
                        <button className='desktop-modify-affidavit-button'>Modify Affidavit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ModifyAffidavit