import React, { useState } from 'react'
import Card from '../pages/Card';

const Course = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses ,setLikedCourses] = useState([]);

    function getCourseData(){
    if(category === "All"){
        let allCourses = [];
        Object.values(courses).forEach(array =>{
        array.forEach((course)=>{
            allCourses.push(course);
        })
    })
    return allCourses;
    }
    
  else{
    //only show specific category data array
    return courses[category]; 
  }

};
  
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourseData().map((course) =>(
            <Card key={course.id} course={course} likedCourses ={likedCourses } setLikedCourses={setLikedCourses}/>
        ))
      }
      
    </div>
  )
}

export default Course
