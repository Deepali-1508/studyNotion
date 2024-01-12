import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full gap-10 lg:gap-0 bg-black flex flex-col lg:flex-row justify-evenly py-10 px-20 z-100'>

      <div className='border-b-2 pb-4 lg:border-b-0 lg:pb-0 lg:border-r-2  flex-1 flex items-center justify-center flex-col'>
        <Link to='/'>
            <img src={logo} alt="" width={180} height={180} />
        </Link>
        <p className='text-sm pt-4 hidden lg:block'>@2024 all rights reserved</p>
      </div>

      <div className='border-b-2 pb-4 lg:border-b-0 lg:pb-0 lg:border-r-2 pt-2 flex-1 text-center gap-2'>
        <ul className='flex gap-4 justify-between flex-wrap items-center text-center lg:gap-0 lg:flex-col lg:justify-normal'>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Terms of Services</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
        </ul>
      </div>

      <div className='border-b-2 pb-4 lg:border-b-0 lg:pb-0 lg:border-r-2 flex-1 flex flex-col items-center'>
        <h1 className='text-xl font-bold hidden lg:block'>Follow us</h1>
        <ul className='flex gap-10 justify-between flex-wrap items-center text-center lg:gap-0 lg:flex-col lg:justify-normal'>
            <li className='flex items-center justify-start gap-3 pt-1'><FaFacebook/> Facebook</li>
            <li className='flex items-center justify-start gap-3 pt-1'><FaTwitter /> Twitter</li>
            <li className='flex items-center justify-start gap-3 pt-1'><FaInstagram/> Instagram</li>
        </ul>
      </div>

      <div className='  flex-1 flex items-center justify-center pointer mt-4 lg:mt-0'>
      <a href="#subscribe">
        <h1>Subscribe to our news</h1>
      </a>
      </div>

    </div>
  )
}

export default Footer

