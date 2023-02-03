import React from 'react'
import {BsPersonPlus} from "react-icons/bs"
import Button from '../../../components/cta/Button'
import PrBar from '../../../components/prBar/PrBar'
import "././uploadpassport/upload.css"
import Webcam from 'react-webcam'


const Upload = () => {
    
  return (
        
        <div className="upload__body">

            <div className='image'>
                <BsPersonPlus className='icon'/>
            </div>

            <div className='buttons'>

                <Button content="Take Photo" />
                <Button content="Choose File" />
            </div>

            <Button content="Save and Continue" />
        </div>

  )
}

export default Upload