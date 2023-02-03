import AdminHamburger from '../../pages/admin/AdminHamburger'
import './newlga.css'

const NewLGA = () => {
    return (
        <div className="new-lga">
            <div className="mobile-new-lga">
                <header>
                    <AdminHamburger title="Add New LGA" />
                </header>
                <section className='mobile-new-lga-content'>
                    <section className='mobile-new-lga-form'>
                        <form>
                            <label htmlFor="state">
                                <b>State</b>
                                <select name='state' id='state'>
                                    <option value="select state" disabled>Select state</option>
                                    <option value="lagos">Lagos</option>
                                    <option value="ogun">Ogun</option>
                                    <option value="osun">Osun</option>
                                    <option value="ondo">Ondo</option>
                                    <option value="oyo">Oyo</option>
                                </select>
                            </label>
                            <label htmlFor="enter state's lga">
                                <b>Enter State's LGA</b>
                                <input type="text" placeholder="Enter lga's name" />
                            </label>
                            <button className='mobile-lga-submit-button'>Create LGA</button>
                        </form>
                    </section>
                </section>
            </div>
            <div className="desktop-new-lga">
                <header>
                    <div>Add New LGA</div>
                </header>
                <section className="desktop-lga-form">
                    <form>
                        <label htmlFor="state">
                            <b>State</b>
                            <select name='state' id='state'>
                                <option value="select state" disabled>Select state</option>
                                <option value="lagos">Lagos</option>
                                <option value="ogun">Ogun</option>
                                <option value="osun">Osun</option>
                                <option value="ondo">Ondo</option>
                                <option value="oyo">Oyo</option>
                            </select>
                        </label>
                        <label htmlFor="enter state's lga">
                            <b>Enter State's LGA</b>
                            <input type="text" placeholder="Enter lga's name" />
                        </label>
                        <button className='desktop-lga-submit-button'>Create LGA</button>
                    </form>
                </section>
            </div>
        </div>
    )
}
export default NewLGA