import React, { useState } from 'react'
import map from '../assets/contact/map.avif'
import Footer from '../components/Footer'

const Contact = () => {
  const [formData ,setFormData] = useState({fname:'',email:'',phone:'',message:''});

  const handleChange = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log('submitted',formData)
  }

  return (
    <div className='flex flex-col items-center justify-center h-full w-full bg-black my-10'>
    <div className=' w-full relative h-[700px]'>
     <img src={map} alt="image" className='w-full h-[500px] object-cover'/>
     <div className='absolute bg-white w-[600px] h-[600px] top-10 right-[27rem] rounded-md'>
       <form onSubmit={handleSubmit} className='text-black p-20'>

       <input type="text" id='name' name='fname' value={formData.fname} onChange={handleChange} placeholder='Name' 
       required className='placeholder:text-black focus:border-b-2 outline-none border-b-2 border-black w-full'/>

       <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder='Email' 
       required className='placeholder:text-black focus:border-b-2 outline-none border-b-2 border-black w-full mt-16 '/>

       <input type="number" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder='Phone Number' 
       required className='placeholder:text-black focus:border-b-2 outline-none border-b-2 border-black w-full mt-16 '/>

       <input type="text" name="message" id="phone" value={formData.message} onChange={handleChange} placeholder='Message' 
       required className='placeholder:text-black focus:border-b-2 outline-none border-b-2 border-black w-full mt-16'/>

      <button className='mt-16 bg-black text-white py-4 px-5 rounded-sm mx-auto  '>Send Message</button>

       </form>

       
     </div>

    </div>
      <Footer/>
    </div>
  )
}

export default Contact
