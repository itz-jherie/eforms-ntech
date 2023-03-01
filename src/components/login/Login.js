import React from 'react';
import './login.css'

const Login = () => {
  return (
    <div className="login">

        <div className='login__header'>

        </div>

        <div className='login__body'>

            <form>

                <fieldset>
                    <label htmlFor='username'>Username</label>
                    <input 
                    type="text"
                    className='userName'
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor='password'>Password</label>
                    <input 
                    type="text"
                    className='passWord'
                    />
                </fieldset>
            </form>
        </div>
    </div>
  )
}

export default Login