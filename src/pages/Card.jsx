import React from 'react'
import {FcLike ,FcLikePlaceholder} from 'react-icons/fc';
import {toast} from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;



    function handleLikeBtn(){
      if(likedCourses.includes(course.id)){
        //phele se like hai
        setLikedCourses((prev)=> prev.filter((cid) => cid !== course.id))
        toast.warning("Like removed")
      }
      else{
        //phele se like nahi hai 
        //insert karna hai course likedCourses array me
        if(likedCourses.length === 0){
            setLikedCourses([course.id])
        }
        else{
            //non-empty phele se 
            setLikedCourses((prev) => [...prev ,course.id])
        }
        toast.success("Liked")
      }

    }

  return (
    <div className='w-[300px] bg-[#2C2B44] rounded-md  bg-opacity-80 overflow-hidden'>
      <div className='relative'>
        <img  src={course.image.url} />

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]  grid place-items-center'>
        <button onClick={handleLikeBtn}>
        {
            likedCourses.includes(course.id) ? <FcLike fontSize={"1.75rem"}/> : <FcLikePlaceholder fontSize={"1.75rem"}/>
        }
        
        </button>
      </div>
      </div>
     

      <div className='p-4'>
        <p className='text-white font-semibold text-lg laoding-6'>{course.title}</p>
        <p className='mt-2 text-white'>
        {course.description.length >100 ? (course.description.substr(0,100)+"..."): (course.description)}</p>
      </div>

    </div>
  )
}

export default Card
