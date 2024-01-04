import React from 'react'
import illustration from '../assets/assets/illustration.webp'
import students from '../assets/assets/students.webp'
import {Parallax, useParallax} from 'react-scroll-parallax'
import { ParallaxProvider } from 'react-scroll-parallax';
import design from '../assets/design.jpeg';
import business from '../assets/business.png';
import lifestyle from '../assets/lifestyle.webp'
import development from '../assets/Software-Development.jpg'

const ExploreCourse = () => {

  return (
    <>
    <h2 className='text-5xl font-inter mb-20 font-semibold mt-[10rem]'>Explore Our Courses</h2>
   
    <div className='flex gap-36 relative h-[600px]'>


      <div className='w-[250px] h-[300px] bg-white relative text-center'>
        <img src={development} alt="" className='w-[250px] h-[300px]  object-cover absolute top-2 left-2 z-50'/>
        <div className='z-100 absolute bottom-[-10rem] right-[10px] left-0'>
        <h1 className='text-3xl font-semibold pb-1'>Development</h1>
        <p className='text-sm'>Master web and app development skills.</p>
        <p className='text-sm'>Build a career in tech with hands-on projects.</p>
        </div>
      </div>


      <div className='w-[250px] h-[300px] bg-white relative text-center'>
        <img src={design} alt="" className='w-[250px] h-[300px] object-cover absolute top-2 left-2 z-50'/>
         <div className='z-100 absolute bottom-[-10rem] right-[10px] left-0'>
        <h1 className='text-3xl font-semibold pb-1'>Design</h1>
        <p className='text-sm'>Unleash creativity with graphic design fundamentals..</p>
        <p className='text-sm'>Animate in 3D ,stunning visuals and graphics and bring ideas to life.</p>
        </div>
      </div>

      <div className='w-[250px] h-[300px] bg-white relative text-center'>
        <img src={business} alt="" className='w-[250px] h-[300px] absolute object-cover top-2 left-2 z-50'/>
        <div className='z-100 absolute bottom-[-10rem] right-[10px] left-0'>
        <h1 className='text-3xl font-semibold pb-1'>Business</h1>
        <p className='text-sm'>Entrepreneurship essentials for startup success..</p>
        <p className='text-sm'>Grow and scale your business with expert guidance.</p>
        </div>
      </div>

      <div className='w-[250px] h-[300px] bg-white relative text-center'>
        <img src={lifestyle} alt="" className='w-[250px] h-[300px] absolute object-cover bg-right-top top-2 left-2 z-50'/>
         <div className='z-100 absolute bottom-[-10rem] right-[10px] left-0'>
        <h1 className='text-3xl font-semibold pb-1'>Lifestyle</h1>
        <p className='text-sm'>Cultivate mindfulness and well-being.</p>
        <p className='text-sm'>Transform your lifestyle with practical tips.</p>
        </div>
      </div>
     
      </div>
    </>
  )
}



export default ExploreCourse
