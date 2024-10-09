 import React from 'react'
import { FaUser,FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
 function Login() {
   return (
     <div className='login'>
        <h1>Login</h1>
        <form action='' method='post'>
            <div className='input-box'>
                <label className='label'>
                  Email : 
                
             <input type='email' placeholder='Email' id='email' required/>
             <FaUser className='icon'/>
             </label>
            </div>
            <div className='input-box'>
                <label className='label'>
                    Password : 
               
             <input type='password' placeholder='password' id='password' required/>
             <FaLock className='icon'/>
             </label>
            </div>
            <div className='login-btn'>
                <button type='submit'>Login</button>
            </div>
            <div className='forgot'>
                <label><input type='checkbox'/> remember me</label>
                <a href='/forgot'>forgot password</a>
            </div>
            <div className='account'>
                <label>Don't have an account?</label>
                <Link to='/register'>
            <button type='button' className='register-btn'>Register</button>
          </Link>
            </div>

        </form>
     </div>
   )
 }
 
 export default Login;