import './modifylga.css'

const ModifyLGA = () => {
    return (
        <div className="modify-lga">
            <div className="mobile-modify-lga"></div>
            <div className="desktop-modify-lga">
                <header>
                    <div>Rename LGA</div>
                </header>
                <div className="desktop-rename-form">
                    <form>
                        <label htmlFor="lga name">
                            <b>LGA Name</b>
                            <input type='text' placeholder='baruten' />
                        </label>
                        <label htmlFor="state">
                            <b>State</b>
                            <select name='state' id='state'>
                                <option value="select state">Kwara</option>
                                <option value="lagos">Lagos</option>
                                <option value="ogun">Ogun</option>
                                <option value="osun">Osun</option>
                                <option value="ondo">Ondo</option>
                                <option value="oyo">Oyo</option>
                            </select>
                        </label>
                        <button className='desktop-lga-submit-button'>Rename LGA</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ModifyLGA