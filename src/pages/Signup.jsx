import React from 'react'
import Template from '../components/Template'
import signupImg from "../assets/signup.png"; 

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template 
        heading = "Join the millions learning to code with StudyNotion for free"
        desc1 ="Build skills for today, tomorrow, and beyond."
        desc2 = "Education to future-proof your career."
        type = "signup"
        button2 = "Sign up with Google"
        imgSrc = {signupImg}
        setIsLoggedIn = {setIsLoggedIn}
      />
    </div>
  )
}

export default Signup
