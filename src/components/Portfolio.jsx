import React from 'react';
import UsabilityHubUI from '../assets/portfolio/UsabilityHubUI.png';
import CurrencyConvertor from '../assets/portfolio/CurrencyConvertor.png';
import PassGenApp from '../assets/portfolio/PassGenApp.png';
import CodeBin from '../assets/portfolio/CodeBin.png';

const Portfolio = () => {

  const portfolios =[
    {
      id: 1,
      src: UsabilityHubUI,
      code: 'https://github.com/krishigandhi/website-landing-page',
      demo:'https://website-landing-page-4a8wp3ln6-krishi-gandhis-projects.vercel.app/' ,
    },
    {
      id: 2,
     src:CurrencyConvertor  ,
     code: 'https://github.com/krishigandhi/React-JS/tree/main/06CurrencyConvertor',
      demo:' ' ,
    },
    {
      id: 3,
      src: PassGenApp,
      code: 'https://github.com/krishigandhi/React-JS/tree/main/05passGen',
      demo:' ' ,
    },
    {
      id: 4,
      src: CodeBin,
      code: 'https://github.com/krishigandhi/Code_Bin',
      demo:'' ,
    }
  ];
  const openCode = (code) =>{
    window.open(code,"_blank");
  };
  const openDemo = (demo) =>{
    window.open(demo,"_blank");
  };
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8 mt-10 md:mt-11'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500  '>PORTFOLIO</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 pb-4'>  
          {/* Here comes the padding */}
        {
          
          portfolios.map(({id,src,demo,code}) => (
           
          <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt=""  className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center '>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' 
            onClick={() => openDemo(demo)}
            >Demo
              </button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
              onClick={() => openCode(code)}
              >Code
              </button>
            </div>
          </div>

))
}
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
