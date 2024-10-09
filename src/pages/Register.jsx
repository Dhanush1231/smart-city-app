import React from 'react'
import { FaUser,FaLock, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
 function Register() {
   return (
     <div className='Register'>
        <h1>Sign UP</h1>
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
                    Full Name :   
             <input type='text' placeholder='Full Name' id='name' required/>
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
             <div className='input-box'>
                <label className='label'>
                   Confirm Password : 
               
             <input type='password' placeholder='confirm password' id='password1' required/>
             <FaLock className='icon'/>
             </label>
            </div>
            <div className='input-box'>
                <label className='label'>
                  mobile : 
               
             <input type='number' placeholder='mobile' id='mobile' required/>
             <FaPhone className='icon'/>
             </label>
             
            </div>
            <div className='login-btn'>
                <button type='submit'>Register</button>
            </div>
            <div className='account'>
                <label> Have an account?</label>
                <Link to='/signin'>
            <button type='button' className='login-btn'>Login</button>
          </Link>
            </div>

        </form>
     </div>
   )
 }
 
 export default Register;