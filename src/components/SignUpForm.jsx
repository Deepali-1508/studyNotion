import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [formData,setFormData] = useState({fname:'',lname:'',email:'',password:'',confirmPassword:''})
  
  function handleChange(e){
   setFormData({...formData,[e.target.name]:e.target.value}) 
  //  setFormData((prevData)=>{
  //    return {...prevData,[e.target.name]:e.target.value}
  //  })  
 
  // setFormData([
  //   (prev) => [
  //     {
  //       ...prev,
  //       [event.target.name]: event.target.value,
  //     },
  //   ],
  // ]);
}

 function handleSubmit(e){
   e.preventDefault();
   setIsLoggedIn(true);
    navigate('/dashboard');
    setFormData({fname:'',lname:'',email:'',password:'',confirmPassword:''});
 }
  
  return (
    <div  className='flex flex-col gap-y-4 mt-3 w-full'>
    <form onSubmit={handleSubmit} className='flex flex-col gap-y-4 mt-3 w-full mb-1'>
    <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max">
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <div className='flex flex-col gap-1 '>
        <label htmlFor="fname" className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>First Name <sup className='text-pink-200'>*</sup></label>
        <input className=' bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5' type="text" name="fname" value={formData.fname} onChange={handleChange} placeholder='Enter your first name' id='fname' />
      </div>

      <div className='flex flex-col gap-1 '>
        <label htmlFor="lname"  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Last Name <sup className='text-pink-200'>*</sup></label>
        <input className=' bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5' type="text" name="lname" value={formData.lname} onChange={handleChange} placeholder='Enter your last name' id='lname' />
      </div>

      <div className='flex flex-col gap-1 '>
        <label htmlFor="email" className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Email Address <sup className='text-pink-200'>*</sup></label>
        <input className=' bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5' type="text" name="email" value={formData.email} onChange={handleChange} placeholder='Enter your email addresss' id='email' />
      </div>

      <div className='flex gap-[10px] '>
        <div>
        <label htmlFor="password" className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Password <sup className='text-pink-200'>*</sup></label>
        <input className=' bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5' type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter password' id='password' />
      </div>

      <div>
        <label htmlFor="confirmPassword" className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Confirm Password <sup className='text-pink-200'>*</sup></label>
        <input className=' bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5' type="confirmPassword" value={formData.confirmPassword} onChange={handleChange} name="confirmPassword" placeholder='Confirm Password' id='confirmPassword' />
      </div>
      </div>

       <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] w-full mt-6 font-medium text-richblack-900">Create Account</button>
      
    </form>
     
    </div>
  )
}

export default SignUp
