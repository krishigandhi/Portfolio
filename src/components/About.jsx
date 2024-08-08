import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me</p>
        </div>
        <p className="text-xl mt-10 md:mt-20">
        I'm Krishi Gandhi.A  Web Developer
        . A recently graduated B.E. Computer Science Engineer student from Gujarat Technological University
        </p>
        <br />
        <p className='text-xl mb-10'>
        
 I am a enthusiast software engineer 👨🏻‍💻 who always loves to explore and work with the new technologies. 
 
        </p>
      </div>
    </div>
  );
}

export default About;
