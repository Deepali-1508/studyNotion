import React from 'react'
import degree from '../assets/about/degree.webp'
import vision from '../assets/about/vision.webp'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-[100%] mt-20 bg-white'>
      
      <div  className='flex items-center  gap-42 justify-center text-center w-full h-[500px] bg-black rounded-br-lg lg:rounded-br-full '>
      <div className='w-[700px] '>
        <h1 className='text-3xl lg:text-4xl capitalize pb-6'>About <span className='text-red-600 font-bold pl-2'>StudyNotion</span> </h1>
        <p className='text-sm md:text-md'>Welcome to StudyNotion, where passion meets education! We are on a mission to empower individuals through comprehensive courses in development, design, business, and lifestyle. Our commitment is to provide a dynamic and enriching learning experience that goes beyond traditional boundaries.
        </p>
      </div>
      
      <img src={degree} alt='degree' className='hidden lg:flex' />
      </div>

      <div className='flex flex-col xl:flex-row items-center justify-center text-center  w-11/12 max-w-[1200px] text-black'>
        <img src={vision} alt="vision" className='w-[380px] lg:w-[480px]' />

        <div className='w-[300px] md:w-[600px]'>
        <h1 className='text-xl md:text-3xl font-bold pb-6'>Our Vision</h1>
        <p className='text-sm md:text-md'>At StudyNotion, we envision a world where knowledge is a catalyst for positive change. Through accessible and engaging courses, we aim to inspire, educate, and empower individuals to reach their full potential in the ever-evolving landscape of technology, creativity, entrepreneurship, and personal development.</p>
        </div>
       
      </div>

      <div className='text-black flex flex-col xl:flex-row  text-center mb-16 items-start max-w-[1200]'>
      <div className='hidden xl:block bg-black text-white text-center xl:rounded-tl-full xl:rounded-bl-full mr-16 py-10 px-16'>
        <ul>
          <li>Expert Instructors</li>
          <li>Cutting Edge Content</li>
          <li>Interactive Learning</li>
          <li>Flexibility</li>
          <li>Hands on Practice</li>
          <li>24 hr Doubt Support</li>
          <li>Practical learning</li>
        </ul>
      </div>
      <div className='w-[300px] md:w-[700px] mt-24 xl:mt-0'>
        <h1 className='text-xl md:text-3xl font-bold pb-6'>Our Community</h1>
        <p className='text-sm md:text-md'>Join a vibrant and supportive community of learners, where networking, collaboration, and mentorship thrive. Connect with like-minded individuals, share experiences, and grow together as you progress through your learning journey.</p>
        <Link to='/login'>
        <button className='text-white bg-black rounded-full mt-6 py-3 px-4'>Get Started Today</button>
        </Link>
       
      </div>
      <div className='hidden xl:block bg-black text-white text-center rounded-tr-full rounded-br-full ml-16 py-10 px-16'>
        <ul>
          <li>Expert Instructors</li>
          <li>Cutting Edge Content</li>
          <li>Interactive Learning</li>
          <li>Flexibility</li>
          <li>Hands on Practice</li>
          <li>24 hr Doubt Support</li>
          <li>Practical learning</li>
        </ul>
      </div>
      </div>

      
     <Footer/> 
    </div>
  )
}

export default About
