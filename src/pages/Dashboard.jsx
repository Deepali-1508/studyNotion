import React from 'react'
import { apiUrl , filterData } from '../data'
import Course from '../components/Course';
import CourseName from '../components/CourseName';
import { useEffect, useState } from 'react'

import {toast} from 'react-toastify';
 import Spinner from './Spinner';
import Footer from '../components/Footer';

const Dashboard = () => {

  const [courses ,setCourses] = useState([]);
  const [loading ,setLoading] = useState(true);
  const [category ,setCategory] = useState(filterData[0].title);

  const fetchCourses = async() =>{
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output =  await response.json();
      setCourses(output.data);
    } catch (error) {
     toast.error("Something went wrong");
    }
   setLoading(false);
  }

  useEffect(()=>{
    fetchCourses();
  },[])

  return (
    // <div className='flex items-center justify-center h-full'>
      <div className=" bg-black min-h-screen flex flex-col">
   
   <div className="bg-black">
   <div>
    <CourseName category={category} setCategory={setCategory} filterData={filterData}/>
    </div>
   
   <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
  {loading ? <Spinner/> : <Course category={category} courses={courses}/>}
   </div>
   </div>
    
    <Footer/>
    </div>
    // </div>
  )
}

export default Dashboard
