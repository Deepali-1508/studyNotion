import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/Logo.svg'


const Nav = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
       <div>
            <Link to='/'>
              <img src={Logo} width={150} height={150} loading='lazy'/>
            </Link>
       </div>

        <nav>
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
       

     <div className='flex gap-5'>
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

    </div>
  )
}

export default Nav
