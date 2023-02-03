import { useRef } from "react";
import AdminHamburger from "../../pages/admin/AdminHamburger";
import './addnewstate.css'

const AddNewState = () => {
    const uploadedFile = useRef(null)


    const handleFileChange = (e) => {
        e.preventDefault()
        const [file] = e.target.files
        // const files = e.target.files[0]
        if(file) {
            console.log(file)
            const reader = new FileReader()
            const { current } = uploadedFile
            current.file = file
            reader.onload = (e) => {
                current.src = e.target.result
            }
            reader.readAsDataURL(file)
        }
    }
    return (
        <div className="new-state">
            <div className="mobile-new-state">
                <header className="hamburger">
                    <AdminHamburger title="Add New State" />
                </header>
                <section className="new-state-content">
                    <section className="new-state-form">
                        <form>
                            <label htmlFor="enter state name">
                                <b>Enter State Name</b>
                                <input type="text" placeholder="Enter state name" />
                            </label>
                            <label htmlFor="state logo">
                            <b>State Logo</b>
                            <div className='mobile-file-button'>
                                <button ref={uploadedFile}>Choose file</button>
                                <span>No file choosen</span>
                                <input 
                                    type="file" 
                                    multiple={false}
                                    placeholder="Choose File" 
                                    style={{display: 'none'}}
                                    onChange={handleFileChange}
                                />
                            </div>
                        </label>
                        <div className='mobile-background-removal'>
                            <p>Please use <b style={{color: '#FF0000'}}>Remove Background</b> to remove any unwanted background</p>
                        </div>
                        <button className='mobile-submit-button'>Create State</button>
                        </form>
                    </section>
                </section>
            </div>
            <div className="desktop-new-state">
                <header>
                    <div>Add New State</div>
                    {/* <><button onClick={handleButtonClick}>Go Back</button></> */}
                </header>
                <section className="desktop-new-state-form">
                    <form>
                        <label htmlFor="enter state name">
                            <b>Enter State Name</b>
                            <input type="text" placeholder="Enter state name" />
                        </label>
                        <label htmlFor="state logo">
                            <b>State Logo</b>
                            <div className='desktop-file-button'>
                                <button ref={uploadedFile}>Choose file</button>
                                <span>No file choosen</span>
                                <input 
                                    type="file" 
                                    multiple={false}
                                    placeholder="Choose File" 
                                    style={{display: 'none'}}
                                    onChange={handleFileChange}
                                />
                            </div>
                        </label>
                        <div className='desktop-background-removal'>
                            <p>Please use <b style={{color: '#FF0000'}}>Remove Background</b> to remove any unwanted background</p>
                        </div>
                        <button className='desktop-submit-button'>Create State</button>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default AddNewState