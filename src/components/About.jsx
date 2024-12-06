import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>WHO I AM?</p>
        </div>
        <p className="text-xl mt-10 md:mt-10">
  I'm Krishi Gandhi, a Web Developer and a recent graduate with a B.E. in Computer Science from Gujarat Technological University.
</p>
<br />
<p className='text-xl mb-10'>
  I’m an enthusiastic software engineer 👨🏻‍💻 with a passion for exploring and working with new technologies.
</p>

<p className='text-xl mb-10'>
  A quick learner with a self-driven attitude, I enjoy diving into new technologies and solving problems. My core expertise lies in JavaScript, and I love using it for various aspects of web development. I am eager to contribute to projects that align with my skills and interests, and I am open to exciting job opportunities.
</p>

      </div>
    </div>
  );
}

export default About;
