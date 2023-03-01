import React, { useState} from 'react'
import {BsPersonPlus} from "react-icons/bs"
import Button from '../../../components/cta/Button'
import PrBar from '../../../components/prBar/PrBar'
import "././uploadpassport/upload.css"
import Webcam from 'react-webcam'
import axios from 'axios'

const Upload = () => {
    
    const [image, setImage] = useState('');

    const [submit, setSubmit] = useState(false);

    function handleImage(e) {
        console.log(e.target.files)
        setImage(e.target.files[0]);
    }


    function handleApi(e) {
        
        const formData = new FormData();
        formData.append('image', image)
        axios.post('url', formData).then((res) => {
            console.log(res)
     })
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmit(true);

        setTimeout(() => {
            setSubmit(false);
        }, 3000)
    }

  return (
        
        <div className="upload__body">

            <div className='image'>
                <BsPersonPlus className='icon'/>
            </div>

            <form className='buttons' onSubmit={handleSubmit}>

               <div className='btn__mini'>
               
               <button className='btn__red'> Take Photo </button>
               <input className="btn__gray" type="file" name="file" onChange={handleImage} />
               
               </div>

                <button onClick={handleApi} className='btn__submit'> Save and continue </button>
            </form>
        </div>

  )
}

export default Upload