import React from 'react';
import { AiOutlineMail} from "react-icons/ai";
import "././verifyemail/verifyemail.css";

const Verifyemail = () => {
  return (
    <div className="verifyEmail">

        <div className='verifyEmail__header'>
            <img src="" />

            <h1>Create An Account</h1>
            <p>Confirm Account Sent to Your Email Address</p>
        </div>

        <div className="verifyEmail__body">

            <div className="box__img">
                <AiOutlineMail className="icon"/>
            </div>

            <div className='verifyEmail__content'>
                <h1>Verify your email address</h1>
                <p>In order to start using your e-forms account, you need to confirm your email address</p>
            </div> 
        </div>
    </div>
  )
}

export default Verifyemail