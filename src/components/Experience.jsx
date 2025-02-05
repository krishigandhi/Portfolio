import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/react.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import php from '../assets/php.png';
import mysql from '../assets/mysql.png';
import angular from '../assets/angular.png';



const Experience = () => {

    const techs = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: reactImage,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        {
            id:5,
            src: tailwind,
            title: 'TAILWIND',
            style: 'shadow-sky-400'
        },
        {
            id:6,
            src: php,
            title: 'PHP',
            style: 'shadow-violet-500'
        },
        {
            id:7,
            src: mysql,
            title: 'MYSQL',
            style: 'shadow-blue-500'
        },
        {
            id:8,
            src: github,
            title: 'GITHUB',
            style: 'shadow-gray-500'
        },
        {
          id:9,
          src: angular,
          title: 'ANGULAR',
          style: 'shadow-red-500'
      }
    ];

    return (
        <div
          name="experience"
          className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div className=' pt-4 md:pt-24 lg:pt-36 '>
                {/* here comes the padding */}
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2  inline">
                EXPERIENCE
              </p>
              <p className="py-6">These are the technologies I've worked with</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default Experience;
  