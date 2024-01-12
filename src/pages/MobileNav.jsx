import React from 'react'
import { GiCrossMark } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const MobileNav = ({isLoggedIn,setIsLoggedIn,setIsMobileMenuOpen}) => {
    function closeNav(){
        setIsMobileMenuOpen(false);
    }
  return (
    <div className='w-screen h-screen bg-black text-white '>
        <ul className='flex items-center justify-center flex-col py-10 gap-12'>
            <li className='text-md font-bold hover:text-red-800'><button onClick={closeNav}><GiCrossMark/></button></li>
            <li className='text-md font-bold hover:text-red-800'><Link to="/" onClick={closeNav}>Home</Link></li>
            <li className='text-md font-bold hover:text-red-800'><Link to="/about" onClick={closeNav}>About</Link></li>
            <li className='text-md font-bold hover:text-red-800'><Link to="/contact" onClick={closeNav}>Contact</Link></li>
            <li className={`text-md font-bold hover:text-red-800 ${isLoggedIn ? 'hidden':'block'}`}>
            {!isLoggedIn && <button onClick={closeNav}> <Link to="/signup">SignUp</Link></button>}
            </li>
            <li className={`text-md font-bold hover:text-red-800 ${isLoggedIn ? 'hidden':'block'}`}>
            {!isLoggedIn && <button onClick={closeNav}><Link to="/login">LogIn</Link></button> }
            </li>
            <li className='text-md font-bold hover:text-red-800'>
            {isLoggedIn && <button onClick={closeNav}><Link to="/dashboard">Dashboard</Link></button> }
            </li>
            <li className='text-md font-bold hover:text-red-800'>
            {isLoggedIn && <button onClick={()=>{
                setIsLoggedIn(false)
                closeNav();
                }}><Link to="/">LogOut</Link></button> }
            </li>
            
        </ul>
    </div>
  )
}

export default MobileNav