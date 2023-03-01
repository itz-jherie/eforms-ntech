import React from 'react';
import {AiFillMessage} from "react-icons/ai"
import "./support.css"

const Support = () => {
  return (
    <div className='support'>
      <AiFillMessage className='message__icon'/>
      <p className='spt__text'>Support</p>
    </div>
  )
}

export default Support