import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'
import success from "./success/success.css"

const Success = () => {
  return (
    <div className='success__body'>

        <div className='success__content'>
            <h1>Success</h1>

            <div className='success__icon'>
              <IoMdCheckmark className="icon"/>
            </div>

            <p className='success__congrats'>Congratulations your account has been successfully created.</p>

            <button className='btn__success'> Done </button>
        </div>
    </div>
  )
}

export default Success