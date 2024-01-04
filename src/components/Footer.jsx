import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-600 flex flex-wrap justify-evenly py-10 px-20'>

      <div className='border-r-2  pr-5'>
        <Link to='/'>
            <img src={logo} alt="" width={180} height={180} />
        </Link>
        <p className='text-sm pt-4'>@2024 all rights reserved</p>
      </div>

      <div className='border-r-2 pr-5'>
        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Terms of Services</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
        </ul>
      </div>

      <div className='border-r-2 pr-5'>
        <h1>Follow us</h1>
        <ul>
            <li><FaFacebook/> Facebook</li>
            <li><FaTwitter /> Twitter</li>
            <li><FaInstagram/> Instagram</li>
        </ul>
      </div>

      <div className='border-r-2 pr-5'>
      <a href="#subscribe">
        <h1>Subscribe to our news</h1>
      </a>
      </div>

    </div>
  )
}

export default Footer

