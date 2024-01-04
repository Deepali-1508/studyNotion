import React from 'react'
import learning from '../assets/assets/learning.webp'
import ExploreCourse from '../components/ExploreCourse'
import Hero from '../components/Hero'
import ChooseUs from '../components/ChooseUs'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=' flex flex-col my-[5rem] justify-between items-center mx-auto w-full h-full'>
       <Hero />
       <ChooseUs />
       <Subscribe />
       <ExploreCourse />
       
    </div>
  )
}

export default Home
