import React from 'react';
import bookingapp from '../assets/Booking-app.png'
import chattingapp from '../assets/chatting-app.png'
import Codebook from '../assets/Codebook.png'
import grocery from '../assets/grocery-app.jpg'
import todoapp from '../assets/to-do_app.png'
import weatherapp from '../assets/weather-app.png'

const Project = () => {

    const projects = [
        {
            id: 1,
            src: bookingapp,
            demo: true,
            href_demo: 'https://ameytari-booking-app.vercel.app/',
            href_code: 'https://github.com/AmeyTari2002/Airbnb'
        },
        {
            id: 2,
            src: todoapp,
            demo: true,
            href_demo: 'https://ameytari-todolist.netlify.app/',
            href_code: 'https://github.com/AmeyTari2002/Weather-App'
        },
        {
            id: 3,
            src: weatherapp,
            demo: true,
            href_demo: 'https://ameytari-weatherapp.netlify.app/',
            href_code: 'https://github.com/AmeyTari2002/To-do-litst'

        },
        {
            id: 4,
            src: chattingapp,
            demo: false,
            href_code: 'https://github.com/AmeyTari2002/V-Chat'
        },
        {
            id: 5,
            src: grocery,
            demo: false,
            href_code: 'https://github.com/AmeyTari2002/Go-Grocery'
        },
        {
            id: 6,
            src: Codebook,
            demo: false,
            href_code:'https://github.com/AmeyTari2002/React-Project-code-book'
        },
    ]



    return (
        <div name='Project' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen  '>


            <div className=' max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full '>
                <div className='py-6 lg:pt-0 md:p-0'>
                    <p className='text-3xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>Check out some of my projects right here.</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-8 sm:px-0'>
                    {
                        projects.map(({ id, src, demo,href_code,href_demo }) => (


                            <div key={id} className='shadow-md shadow-gray-600 rounded-b-lg hover:scale-110'>
                                <img src={src} alt="" className='rounded-lg duration-200' />
                                <div className='flex items-center justify-center'>
                                    {
                                        demo &&
                                        
                                            <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>
                                                <a href={href_demo}>Demo</a>
                                            </button>
                                        
                                    }

                                <button className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>
                                    <a href={href_code}>Code</a>
                                </button>
                            </div>
                            </div>

                ))
                }
            </div>
        </div>




        </div >
    )
}

export default Project