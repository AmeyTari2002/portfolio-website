import React from 'react'
import university from '../assets/university.png'
const About = () => {
    return (
        <div name='About' className=' w-full h-screen   bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full '>
                <div className='pb-6 pt-6 '>
                    <p className=' cursor-pointer text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
                </div>
                <p className='md:text-xl md:pt-9 lg:text-xl lg:pt-7'>
                    <div className='text-sm md:text-xl font-semibold border-b-4 hover:scale-105 border-gray-500 inline-block'>
                        Bachelor of Engineering in IT
                    </div>
                    <div className='text-sm py-2 flex  sm:justify-between'>

                        <span className='md:text-lg '>
                            Atharva College Of Engineering,
                        </span>
                        <span className='text-sm px-1 md:text-lg'>
                            CGPA: 9.44
                        </span>
                    </div>
                    <div className='text-sm md:text-lg  ' >
                        Relevant Coursework:  Frontend Frameworks, Version Control, Backend Frameworks, <br /> Database, Authentication and Authorization, Routing,
                        Development and Data Structures
                    </div>
                </p>
                <p className='pt-2 md:text-xl md:pt-9 lg:text-xl lg:pt-7'>
                    <div className='text-sm md:text-xl font-semibold border-b-4 hover:scale-105 border-gray-500 inline-block'>
                        Honours Degree in Data Science
                    </div>
                    <div className='text-sm py-2   sm:justify-between'>

                        <p className='md:text-lg '>
                            Atharva College Of Engineering, Expected in 2024
                        </p>
                        <div className='text-sm md:text-lg ' >
                            Relevant Coursework: Machine Learning and Artificial Intelligence  
                        </div>
                    </div>

                </p>
                <p className='pt-2 md:text-xl md:pt-9 lg:text-xl lg:pt-7'>
                    <div className='text-sm md:text-xl font-semibold border-b-4 hover:scale-105 border-gray-500 inline-block'>
                        Higher Secondary School
                    </div>
                    <div className='text-sm py-2 sm:flex  sm:justify-between'>

                        <p className='md:text-lg '>
                            Sathye College, Completed in 2020
                        </p>
                        <span className='text-sm  md:text-lg'>
                            Percentage: 75.54%
                        </span>
                    </div>

                </p>
                <p className='pt-2 md:text-xl md:pt-9 lg:text-xl lg:pt-7'>
                    <div className='text-sm md:text-xl font-semibold border-b-4 hover:scale-105 border-gray-500 inline-block'>
                        Secondary School Certificate
                    </div>
                    <div className='text-sm py-2 sm:flex  sm:justify-between'>

                        <p className='md:text-lg '>
                            Sathye College, Completed in 2018
                        </p>
                        <span className=' text-sm  md:text-lg'>
                            Percentage: 91.20%
                        </span>
                    </div>

                </p>
            </div>
        </div>
    )
}

export default About