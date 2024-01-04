import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignUpForm'
import frame from "../assets/frame.png";
import { FcGoogle} from "react-icons/fc";


const Template = (props) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between'>
      <div className='w-11/12 max-w-[450px] mx-0 text-white flex flex-col gap-3'>
      <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] capitalize'>{props.heading}</h1>
      <p className="text-[1.125rem] leading-[1.625rem]"> 
      <span className="text-richblack-100">{props.desc1}</span>
       <span className='text-blue-100 italic'>{props.desc2}</span></p>
      {
        props.type === "login" ? <LoginForm setIsLoggedIn = {props.setIsLoggedIn}/> : <SignupForm setIsLoggedIn = {props.setIsLoggedIn}/> 
      }
      
      <div className='flex w-full items-center my-4 gap-x-2'>
        <div className='w-full h-[1px] bg-richblack-700'></div>
        <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
        <div className='w-full h-[1px] bg-richblack-700'></div>
      </div>

      <button
      className='w-full flex items-center justify-center gap-x-3 border-richblack-700 border rounded-[8px] font-medium text-richblack-100 px-[12px] py-[8px] mt-2  transition-all  hover:bg-richblack-700 hover:text-white'
      > 
       <FcGoogle />
      <p>{props.button2}</p>
      </button>
    </div>

    <div className='relative w-11/12 max-w-[450px]'>
    <img src={frame}   
          width={558}
          height={504}
          loading="lazy"
          />

       <img src={props.imgSrc}  
          width={558}
          height={504}
          loading="lazy"
          className='absolute -top-4 right-4 z-50 '
          />

       
    </div>
    </div>
    
  )
}

export default Template
