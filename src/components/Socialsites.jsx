import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { CiSaveDown2 } from "react-icons/ci";
const Socialsites = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/amey-tari-a3a770279/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                   <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/AmeyTari2002',

        },
        {
            id: 3,
            child: (
                <>
                    <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:tariamey-inft@atharvacoe.ac.in',

        },
        {
            id: 4,
            child: (
                <>
                    <CiSaveDown2 size={30} />
                </>
            ),
            href: '/Resume_.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]
    return (
        <div  className='bg-gradient-to-b
                 from-gray-800 to-gray-900 w-full h-full'>
            {/* max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full  */}
            <div className='max-w-screen-lg  p-4 mx-auto 
                     flex flex-col justify-center  h-full text-white'>
                {/* className='pb-6 pt-10 md:p-0' */}
                <div className='flex flex-col' >
                    <ul className='flex justify-center'>
                        {
                            links.map(({ id, child, href, style, download }) => (
                                <li key={id} className={"flex justify-between items-center px-1 w-20 h-14  bg-transparent font-bold" + " " + style} >
                                    <a href={href}
                                        className='flex justify-between items-center w-full to-white'
                                        download={download}
                                        target='_blank'
                                    >
                                        {child}
                                    </a>


                                </li>
                            )
                            )
                        }

                    </ul>
                    <div className=' flex justify-center lg:py-3'>
                        @ copyrght 2024
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Socialsites;