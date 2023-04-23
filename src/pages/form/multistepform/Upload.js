import React, { useState} from 'react'
import {BsPersonPlus} from "react-icons/bs"
import Button from '../../../components/cta/Button'
import PrBar from '../../../components/prBar/PrBar'
import "././uploadpassport/upload.css"
import Webcam from 'react-webcam'
import axios from 'axios'

const Upload = (props) => {
    const {datta, handleImageUpload, mulError} = props


    console.log(datta);

  return (
        
     <div className='upload'>

<div className="upload__body">

<div className='image'>
    {datta ? <img src={URL.createObjectURL(datta)} alt="Selected Image" className='imgDisplay' /> : <BsPersonPlus className='icon'/> }
</div>

<div className='buttons'>

   <div className='btn__mini'>
   
   <button className='btn__red'> Take Photo </button>
   <input className="btn__gray" type="file" name="imgFile" onChange={handleImageUpload} />
   </div>

   {mulError.imgFile && <span className='errorMsg'>{mulError.imgFile}</span>}
   
</div>
</div>

     </div>

  )
}

export default Upload