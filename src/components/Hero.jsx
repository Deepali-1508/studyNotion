import React from 'react'
import homePage1 from '../assets/assets/homePage1.webp'
import arrow from '../assets/arrow.png'

const Hero = () => {
  return (
    <div className='flex w-11/12 max-w-[1160x] items-center justify-evenly gap-2 h-full'>
      <div className='flex flex-col z-10 mt-[5rem] gap-1 items-center text-center w-[900px]'>
        <p>Unlock Your Potential , shape your future</p>
        <div className="animate-drawLine"></div>
        <h1 className='text-4xl capitalize'>Welcome to <span className='text-red-600 font-bold '>StydyNotion</span> , where learning meets innovation!</h1>
        <p className='mt-3'>Our platform is dedicated to providing you with top-notch free courses in development, business, design, and lifestyle. Whether you're a seasoned professional looking to
         upskill or someone eager to dive into a new field, we have something for everyone.</p>
        <button>Start Learning</button>
      </div>

      <div className='relative pt-10  rounded-full' >
      <img src={homePage1} alt="image" width={500} height={500}  className='z-40'/>
      <img className='absolute top-[-5rem] left-[-12rem] md:rotate-[105deg] z-0' src={arrow} alt="" width={300} height={150} />
      </div>
      </div>
  )
}

export default Hero
