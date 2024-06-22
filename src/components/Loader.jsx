import React,{useEffect,useState} from 'react';
import CountUp from 'react-countup';
import {motion} from 'framer-motion';
import FollowCursor from './FollowCursor';
import '../App.css'

function Loader() {
    
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 4000); 

    // Clear the timeout when component unmounts
    return () => clearTimeout(delay);
  }, []);
  return (
    <> <div style={{ position: 'relative' }}>
       <motion.div className='flex flex-col justify-around  lg:justify-between w-full h-screen z-50 bg-black absolute top-0 left-0'  initial={{ y: 0 }}
        animate={{ y: isLoading ? 0 : '-100%' }}
        transition={{ duration: 0.5 }}>
         <h3 className='text-lg text-slate-500 font-semibold lg:mt-10 ms-20'>The Portfolio</h3>
         <div className='flex flex-col lg:flex-row justify-between items-center px-20 pb-10'>
            <div className='flex flex-col justify-start items-start mb-4'>
                <h1 className=' text-xl lg:text-3xl w-full lg:w-[45%] font-bold text-white'>I AM A WEB DEVELOPER AND I CREATE SUPER AMAZING WEBSITES</h1>
                <h4 className='text-sm text-slate-500 mt-10'>Loading...</h4>
            </div>
            <div className=  ' text-3xl lg:text-7xl font-bold text-white'><CountUp start={0} end={100} duration={5}/>% </div>

         </div>
      </motion.div>
        </div>
    </>
  )
}

export default Loader
