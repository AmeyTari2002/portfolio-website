import React from 'react';
import heroImage from '../assets/amey.jpg'
import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
    return (
        <div name="Home" className='h-screen w-full 
            bg-gradient-to-b from-black via-black to-gray-800 '>
            <div className='max-w-screen-lg mx-auto flex 
            flex-col items-center justify-center h-full px-4 md:flex-row '>
                <div className='flex flex-col justify-center  h-full'>
                    <h2 className='text-3xl sm:text-7xl font-bold text-white'>
                        I'm a Full Stack Developer
                    </h2>
                    <p className='text-gray-400 py-4 max-w-md'>
                        A dedicated and an aspiring Software Developer with an <br /> objective of working in an organization that provide
                        opportunities for technical and personal advancement, <br />I love working on technologies like React, Node, <br />
                         Express, MongoDB and Mysql. <br /> Programming Languages like C, C++, Java, Javascript. 
                    </p>
                    <div>
                        <button className='hover:scale-105  text-white w-fit px-7 py-3 
                        my-2 flex items-center rounded-md 
                        bg-gradient-to-r from-cyan-500 to-blue-500 sm:py-2 text-sm'>
                            <a className='flex' href='/resume.pdf'
                                download='Amey Resume'
                                target='_blank'
                                name='Amey Resume'
                            >
                                Resume
                                <span className='hover:scale-105 duration-300'>
                                    <MdOutlineFileDownload size={20} />
                                </span>
                            </a>

                        </button>
                    </div>
                </div>
                <div>
                    <img src={heroImage} alt="my profile" className='rounded-2xl  mx-auto w-2/3 md:w-full
' />
                </div>
            </div>
        </div>
    )
}

{/* <div name="Home" className='h-screen w-full 
bg-gradient-to-b from-black to-gray-800 '>
    <div className='max-w-screen-lg mx-auto flex 
    flex-col items-center justify-center h-full px-4 md:flex-row '> 
        <div>
            <h2>
                I'm a Full Stack Developer
            </h2>
            <p>
                A dedicated and an aspiring Software Developer with an objective of working in an organization that provide
                opportunities for technical and personal advancement,I love working on technologies like React, Node, Express
                and MongoDB.
            </p>
            <div>
                <button>
                    Projects
                    <span>
                        <MdKeyboardArrowRight />
                    </span>
                </button>
            </div>
        </div>
        <div>
        <img  src={heroImage} alt="my profile" className='rounded-2xl mx-auto w-2/4 md:w-full
' />
        </div>
    </div>
</div> */}

export default Home


{/* <img  src={heroImage} alt=""  />
        <MdKeyboardArrowRight /> */}