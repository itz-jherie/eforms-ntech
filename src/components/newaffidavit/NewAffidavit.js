import './newaffidavit.css'

const NewAffidavit = () => {
    return (
        <div className="new-affidavit">
            <div className="mobile-new-affidavit"></div>
            <div className="desktop-new-affidavit">
                <header>
                    <div>Create New Affidavit</div>
                </header>
                <div className='desktop-new-affidavit-form'>
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
                        <label 
                            htmlFor='Allow user to upload passport when filling Affidavit'
                            style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}
                        >
                            <><input type="checkbox" name='affidavit' id='affidavit' /></>
                            <span>Allow user to upload passport when filling affidavit</span>
                        </label>
                        <button className='desktop-new-affidavit-button'>Create Affidavit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default NewAffidavit