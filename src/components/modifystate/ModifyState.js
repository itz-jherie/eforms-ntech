import { useRef } from "react";
import './modifystate.css'
import abuja from '../../assets/images/abuja.png'
import { useNavigate } from 'react-router'
import AdminHamburger from "../../pages/admin/AdminHamburger";

const ModifyState = () => {
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
        <div className="modify-state">
            <div className="mobile-modify-state">
                <header>
                    <AdminHamburger title="Modify State" />
                </header>
                <section className="mobile-modify-state-content">
                    <section className="mobile-modify-form">
                        <form>
                            <label htmlFor="state name">
                                <b>State Name</b>
                                <input type="text" placeholder="Lagos" />
                            </label>
                            <label htmlFor="State Logo (Leave empty if you are not changing this logo)">
                                <b>State Logo <i>(Leave empty if you are not changing this logo)</i></b>
                                <div><button>Choose File</button></div>
                                <input 
                                    type="file" 
                                    placeholder="Choose File" 
                                    style={{
                                        display: 'none'
                                    }}
                                    onChange={handleFileChange}
                                />
                            </label>
                            <div className='mobile-current-logo'>
                                <p>Current Logo</p>
                                <img src={abuja} alt="state logo" />
                            </div>
                            <div className='mobile-modify-button'>
                                <button>Modify State</button>
                            </div>
                        </form>
                    </section>
                </section>
            </div>
            <div className="desktop-modify-state">
                <header>
                    <div>Modify State</div>
                </header>
                <div className="desktop-modify-form">
                    <form>
                        <label htmlFor="state name">
                            <b>State Name</b>
                            <input type="text" placeholder="Lagos" />
                        </label>
                        <label htmlFor="State Logo (Leave empty if you are not changing this logo)">
                            <b>State Logo <i>(Leave empty if you are not changing this logo)</i></b>
                            <div><button>Choose File</button></div>
                            <input 
                                type="file" 
                                placeholder="Choose File" 
                                style={{
                                    display: 'none'
                                }}
                                onChange={handleFileChange}
                            />
                        </label>
                        <div className='desktop-current-logo'>
                            <p>Current Logo</p>
                            <img src={abuja} alt="state logo" />
                        </div>
                        <div className='desktop-modify-button'>
                            <button>Modify State</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ModifyState