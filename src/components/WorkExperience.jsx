import React from 'react'
const WorkExperience = () => {
    return (
        <div name='WorkExperience' className=' w-full h-screen   bg-gradient-to-b from-black to-gray-800 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full '>
                <div className='pb-6 pt-6 '>
                    <p className=' cursor-pointer text-4xl font-bold inline border-b-4 border-gray-500 '>Experience</p>
                </div>
                <p className='md:text-xl md:pt-9 lg:text-xl lg:pt-7'>
                    <div className='text-sm md:text-xl font-semibold   border-gray-500 inline-block py-2 flex  sm:justify-between'>
                        <span className='md:text-lg border-b-4 hover:scale-105'>
                            Fourth Signal - Analyst (SAP ABAP Developer)
                        </span>
                        <span className='text-sm px-1 md:text-lg'>
                            July 2024 – Present
                        </span>
                    </div>
                    <div className='text-sm md:text-lg  ' >
                        <ul className="list-disc pl-6 text-sm md:text-lg space-y-2">
                            <li>Developed and enhanced ABAP programs, ALV reports, custom Dynpro screens, and Smart Forms for business process automation.</li>
                            <li>Created and maintained CDS Views and OData Services.</li>
                            <li>Performed debugging and performance tuning to optimize existing code and improve system efficiency.</li>
                            <li>Worked on BAPI, BDC and Email Functionality.</li>
                            <li>Achieved 80% reduction in client processing time by streamlining SAP business processes and implementing optimized ABAP solutions.</li>
                        </ul>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default WorkExperience