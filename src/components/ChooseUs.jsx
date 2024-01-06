import React from 'react'
import { GiBookshelf,GiSandsOfTime,GiTeacher,GiNotebook } from "react-icons/gi";

const ChooseUs = () => {
  return (
    <div className='w-11/12 max-w-[1160x] pb-10 pt-10 mt-10'>
        <h2 className='text-5xl font-inter my-10 pb-10 font-semibold text-center'>Why Choose Us</h2>
      <div className='flex items-center justify-center gap-20 z-150 w-full mt-10 text-center '>
      

        <div className='transition-[bg-gradient-to-r] duration-300 ease-in-out w-[300px] h-[250px] flex gap-4 flex-col items-center justify-center text-white  p-4 rounded-md '>
          <GiBookshelf fontSize={'3rem'}/>
          <h3 className='text-xl font-semibold'>Expert-Led Courses</h3>
          <div className='font-light text-sm'>Learn from industry experts who bring real-world experience into the virtual classroom. Our instructors are passionate about sharing their knowledge and guiding you towards success.</div>
        </div>
        
        <div className=' w-[300px] h-[250px] flex gap-4 flex-col items-center justify-center text-white transition-all '>
        <GiNotebook fontSize={'3rem'}/>
          <h3 className='text-xl font-semibold'>Comprehensive Curriculum</h3>
          <div className='font-light text-sm'>Our courses are meticulously designed to cover the latest trends and technologies in development, business strategies, design principles, and lifestyle enhancements. Stay ahead of the curve with our cutting-edge content.</div>
        </div>

        <div className=' w-[300px] h-[250px] flex gap-4 flex-col items-center justify-center text-white transition-all  '>
        <GiSandsOfTime fontSize={'3rem'}/>
        <h3 className='text-2xl font-semibold'>Interactive Learning</h3>
        <div className='font-light text-sm'>Engage in dynamic and interactive learning experiences. From hands-on projects to group discussions, our courses ensure that you not only understand the concepts but also apply them in practical scenarios.</div>
        </div>

        <div className=' w-[300px] h-[250px] flex gap-4 flex-col items-center justify-center text-white transition-all  '>
        <GiTeacher fontSize={'3rem'}/>
         <h3 className='text-xl font-semibold'> Flexible Schedule</h3>
         <div className='font-light text-sm'>Life is busy, and we understand that. That's why we offer flexible scheduling options. Learn at your own pace, from anywhere in the world. Our courses are designed to accommodate your lifestyle.</div>
        </div>


     </div>
    </div>
  )
}

export default ChooseUs




