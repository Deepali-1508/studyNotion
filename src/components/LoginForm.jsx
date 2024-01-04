import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {
  
  const [formData,setFormData] = useState({email:'',password:''});
  const navigate = useNavigate();
  function handleChange(e){
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/dashboard');
    setFormData({email:'',password:''});
  }
  
  return (
    <div >
    <form onSubmit={handleSubmit} className='flex flex-col gap-y-4 mt-3 w-full mb-1'>
    <div  className='flex flex-col gap-1 '>
         <label htmlFor="email" className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Email Address <sup className='text-pink-200'>*</sup></label>
         <input 
         className=' bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5'
        required type="email" name="email" onChange={handleChange} placeholder='Enter your email address' id='email' />
       </div>

       <div className='flex flex-col gap-1 mt-1'>
         <label htmlFor="password" className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Password <sup className='text-pink-200'>*</sup></label>
         <input 
           className='bg-richblack-800 focus:bg-richblack-800 placeholder-richblack-5 border rounded-[0.75rem] w-full p-[12px] text-richblack-5'
           required 
           type="password" 
           name="password" 
           onChange={handleChange} 
           placeholder='Enter Password' 
           id='password' 
         />
       </div>
 
     <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] w-full mt-6 font-medium text-richblack-900">Sign in</button>
    </form>
       
    </div>
  )
}

export default LoginForm
