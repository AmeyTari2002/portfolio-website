import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { CiSaveDown2 } from "react-icons/ci";
const SocialLinks = () => {
    const links = [
        {
            id:1,
            child:(
                <>
                    LinkedIn  <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/amey-tari-a3a770279/',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                    Github  <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/AmeyTari2002',
            
        },
        {
            id:3,
            child:(
                <>
                    Mail  <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:tariamey-inft@atharvacoe.ac.in',
           
        },
        {
            id:4,
            child:(
                <>
                    Resume  <CiSaveDown2 size={30}/>
                </>
            ),
            href: '/Resume_.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]
    return (
        // <FaGithub />
        // <FaLinkedin />
        // <HiOutlineMail />
        // <CiSaveDown2 />
        
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed text-white'>
            <ul>
                {
                    links.map(({ id, child, href, style, download }) => (
                        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 font-bold" + " " + style} >
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
        </div>
    )
}

export default SocialLinks