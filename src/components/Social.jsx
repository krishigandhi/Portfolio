import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Social = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={30} />
                    <span className="ml-2 ">LinkedIn</span>
                </>
            ),
            href: 'https://www.linkedin.com/in/krishigandhi/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={30} />
                    <span className="ml-2">GitHub</span>
                </>
            ),
            href: 'https://github.com/krishigandhi/',
        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={30} />
                    <span className="ml-2">Mail</span>
                </>
            ),
            href: 'mailto:krishigandhi2601@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    <BsFillPersonLinesFill size={30} />
                    <span className="ml-2">Resume</span>
                </>
            ),
            href: '/Resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ];

    return (
        <div className='   lg:hidden bg-gray-800 flex items-center h-20 px-4 text-white'>
            <ul className='flex flex-wrap justify-center items-center w-full space-x-6 lg:hidden md:flex gap-4'>
                {links.map(({ id, style, child, download, href }) => (
                    <li
                        key={id}
                        className={`flex items-center bg-gray-500 hover:bg-gray-600 p-3 rounded-md
                             ${style}`}
                    >
                        <a
                            href={href}
                            className='flex items-center text-white'
                            download={download}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Social;
