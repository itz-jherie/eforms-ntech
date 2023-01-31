import './styles/uploaddocs.css'
import MobileNav from '../../components/mobilenavbar/MobileNav';
const UploadDocs = () => {
    return ( 
        <>
        <MobileNav title="Upload Signature & Passport"/>
        <div className="upload-page-container">
            <div className='upload-page-content'>
                <p className='upload-title'>Fill Form - Affidavit as to Next of Kin</p>
                <p className='upload-note'><span>Please Note: </span>Kindly render your signature on apiece of a paper and upload. <br/>
                File must not be more than 2MB</p>
                <div className='choose-file'>
                    <p>Signature</p>
                    <div>
                        <form>
                            <input type='file'/>
                        </form>
                    </div>
                </div>
                <div className='choose-file'>
                    <p>Passport</p>
                    <div>
                        <form>
                            <input type='file' className='choose-file-btn'/>
                        </form>
                    </div>
                </div>
                <button>Save & Preview</button>
            </div>
        </div>
        </>
     );
}
 
export default UploadDocs;