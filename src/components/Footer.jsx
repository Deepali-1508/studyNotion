import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-600 flex flex-wrap justify-evenly py-10 px-20'>

      <div className='border-r-2  flex-1 flex items-center justify-center flex-col'>
        <Link to='/'>
            <img src={logo} alt="" width={180} height={180} />
        </Link>
        <p className='text-sm pt-4'>@2024 all rights reserved</p>
      </div>

      <div className='border-r-2 pt-2 flex-1 text-center gap-2'>
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Terms of Services</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
        </ul>
      </div>

      <div className='border-r-2  flex-1 flex flex-col items-center'>
        <h1 className='text-xl font-bold'>Follow us</h1>
        <ul>
            <li className='flex items-center justify-start gap-3 pt-1'><FaFacebook/> Facebook</li>
            <li className='flex items-center justify-start gap-3 pt-1'><FaTwitter /> Twitter</li>
            <li className='flex items-center justify-start gap-3 pt-1'><FaInstagram/> Instagram</li>
        </ul>
      </div>

      <div className='  flex-1 flex items-center justify-center pointer'>
      <a href="#subscribe">
        <h1>Subscribe to our news</h1>
      </a>
      </div>

    </div>
  )
}

export default Footer

