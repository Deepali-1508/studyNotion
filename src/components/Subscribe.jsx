import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const subscribe = () => {
  return (
    <div id='subscribe' className='w-full h-[250px] bg-white mt-20 text-black flex items-center flex-col gap-3 py-5'>
      <h1 className='text-3xl mt-4'>Subscribe!</h1>
      <p className='text-center text-sm md:text-md'>Be the first to know about new courses and exclusive offers.</p>
      <div className="py-2 mx-3 mt-3 px-4 w-[50%] lg:w-[30%] border border-black rounded focus:outline-none focus:border-gray-900 flex justify-between">
      <input type="email" name="email" placeholder='Email' className='w-full' />
      <FaLongArrowAltRight className='text-xl md:text-3xl lg:text-3xl ' />
      </div>
      
    </div>
  )
}

export default subscribe
