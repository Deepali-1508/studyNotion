// import React from 'react'
// import Development from '../assets/explore/development.webp'
// import Design from '../assets/explore/design2.png'
// import Business from '../assets/explore/business.webp'
// import Lifestyle from '../assets/explore/lifestyle.webp'

// const ExploreCourse = () => {

//   return (
//     <>
//     <h2 className='text-5xl font-inter mb-20 font-semibold mt-[10rem]'>Explore Our Courses</h2>
   
//     <div className='flex flex-wrap gap-36 relative  w-11/12 max-w-[1200px] mb-10'>

//       <div className="flex-1 h-[500px] bg-red-900">
//         <img src={Development} alt="devimage" width={190} />
//         <div className='text-center'>
//         <h1 className='text-3xl font-semibold pb-3 uppercase'>DEVELOPMENT</h1>
//         <p className='text-md'>Master web and app development skills.Build a career in tech with hands-on projects.</p>
//         </div>
//       </div>

//       <div className="flex-1">
//         <img src={Design} alt="designimage" width={300}  />
//         <div className='text-center'>
//         <h1 className='text-3xl font-semibold pb-3'>DESIGN</h1>
//         <p className='text-md'>Unleash creativity with graphic design fundamentals.Animate in 3D ,stunning visuals and graphics and bring ideas to life.</p>
//         </div>
//       </div>

//       <div className="flex-1">
//         <img src={Business} alt="businessimage" width={300} />
//         <div className='text-center'>
//         <h1 className='text-3xl font-semibold pb-3'>BUSINESS</h1>
//         <p className='text-md'>Entrepreneurship essentials for startup success.Grow and scale your business with expert guidance.</p>
//         </div>
//       </div>

//       <div className="flex-1">
//         <img src={Lifestyle} alt="lifeimage" width={300}/>
//         <div className='text-center'>
//         <h1 className='text-3xl font-semibold pb-3'>LIFESTYLE</h1>
//         <p className='text-md'>Cultivate mindfulness and well-being.Transform your lifestyle with practical tips.</p>
//         </div>
//       </div>
//       </div>
//     </>
//   )
// }



// export default ExploreCourse
import React from 'react';
import Development from '../assets/explore/development.webp';
import Design from '../assets/explore/design2.png';
import Business from '../assets/explore/business.webp';
import Lifestyle from '../assets/explore/lifestyle.webp';

const ExploreCourse = () => {
  return (
    <>
      <h2 className='text-3xl md:text-4xl xl:text-5xl text-center font-inter mb-10 font-semibold mt-[10rem] md:mt-20 md:mb-20'>
        Explore Our Courses
      </h2>

      <div className='grid md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-46 max-w-[1200px] gap-12 sm:gap-24 mb-10 place-content-center'>
        <div className='w-[250px] sm:w-[350px] object-contain'>
          <img src={Development} alt='devimage' className='hidden sm:block w-full h-[300px] object-contain' />
          <div className='text-center'>
            <h1 className='text-xl md:text-3xl font-semibold pb-3 uppercase'>DEVELOPMENT</h1>
            <p className='text-md '>
              Master web and app development skills. Build a career in tech with hands-on projects.
            </p>
          </div>
        </div>

       
        <div className='w-[250px] sm:w-[300px] '>
          <img src={Design} alt='designimage' className='hidden sm:block w-full h-[300px] object-contain' />
          <div className='text-center'>
            <h1 className='text-xl md:text-3xl font-semibold pb-3'>DESIGN</h1>
            <p className='text-md '>
              Unleash creativity with graphic design fundamentals. Animate in 3D, stunning visuals and graphics and bring ideas to life.
            </p>
          </div>
        </div>

        <div className='w-[250px] sm:w-[300px]'>
          <img src={Business} alt='businessimage' className='hidden sm:block w-full h-[300px] object-contain' />
          <div className='text-center'>
            <h1 className='text-xl md:text-3xl font-semibold pb-3'>BUSINESS</h1>
            <p className='text-md '>
              Entrepreneurship essentials for startup success. Grow and scale your business with expert guidance.
            </p>
          </div>
        </div>

        <div className='w-[250px] sm:w-[300px]'>
          <img src={Lifestyle} alt='lifeimage' className='hidden sm:block w-full h-[300px] object-contain' />
          <div className='text-center'>
            <h1 className='text-xl md:text-3xl font-semibold pb-3'>LIFESTYLE</h1>
            <p className='text-md '>
              Cultivate mindfulness and well-being. Transform your lifestyle with practical tips.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreCourse;
