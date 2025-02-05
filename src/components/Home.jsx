import React from 'react'
// import HeroImage from '../assets/heroImage.png';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll';
import Social from './Social';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '
    >

      <div className='max-w-screen-lg mx-auto flex flex-col items-center h-full px-4  md:flex-row'>
        <div className='flex flex-col justify-center h-full '>
            <h2 className='text-4xl sm:text-6xl font-bold text-white'>Hello, <br></br>This is Krishi Gandhi, <br /> I'm a  Web Developer 
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>
             I focus on creating intuitive user experiences and visually appealing interfaces that bring ideas to life. Let’s build something amazing together!
            </p>
            <p className='bg-gradient-to-b from-black via-black to-gray-800'>
            {Social}
            </p>
                
            <div>
                <Link to='portfolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                PORTFOLIO
                <span className='group-hover:rotate-90 duration-300 '>
                    <MdOutlineKeyboardArrowRight size={23} className='ml-1'/>
                </span>
                </Link>
            </div>
            </div>
            {/* <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full '/>
            </div> */}
      </div>
    </div>
  )
}

export default Home