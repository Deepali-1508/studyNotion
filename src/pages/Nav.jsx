import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi';
import MobileNav from './MobileNav';


const Nav = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className={`flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto }`}>
       <div className={`${isMobileMenuOpen ? 'hidden':'block'}`}>
            <Link to='/'>
              <img src={Logo} width={150} height={150} loading='lazy'/>
            </Link>
       </div>

        <nav className= {`gap-5 hidden lg:flex lg:items-center`}>
            <ul className='flex gap-8'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                   <Link to="/about">About</Link>
                </li>
                <li>
                   <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
       

     <div className= {`gap-5 hidden lg:flex lg:items-center ${isMobileMenuOpen ?'flex':'hidden'}`}>
       {!isLoggedIn &&  <Link to='/login'>
          <button>login</button>
        </Link>}

        {!isLoggedIn && <Link to='/signup'>
          <button>sign up</button>
        </Link>}

        {isLoggedIn && (
          <Link to='/' 
            onClick={()=>{
            setIsLoggedIn(false)
            }}
            >
            <button>Log out</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to='/dashboard'>
            <button>Dasboard</button>
          </Link>
        )}
     </div>



     {/* mobile menu button */}
     <button
     className={`lg:hidden flex flex-end transition duration-500 ease-in-out ${isMobileMenuOpen ? 'hidden':'flex'}`}
     onClick={()=>{
      setIsMobileMenuOpen(!isMobileMenuOpen)}}
     >
      <GiHamburgerMenu />
     </button>

     {isMobileMenuOpen && <MobileNav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setIsMobileMenuOpen={setIsMobileMenuOpen}/>}

    </div>
  )
}

export default Nav
