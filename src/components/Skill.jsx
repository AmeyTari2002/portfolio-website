import React from 'react'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import Tailwind from '../assets/Tailwind.png'
import Javascript from '../assets/Javascript.png'
import Reacts from '../assets/React.png'
import Nodejs from '../assets/Nodejs.png'
import Expressjs from '../assets/Expressjs.png'
import Mongodb from '../assets/Mongodb.png'
import C from '../assets/C.png'
import Cplus from '../assets/C++.png'
import GitHub from '../assets/Git.png'
import Java from '../assets/java1.png'
import Mysql from '../assets/Mysql.png'
import Firebase from '../assets/Firebase.png'




const Skill = () => {
    const skills = [
        {
            id: 1,
            src: C,
            title: 'C',
            style: 'shadow-blue-800'
        },
        {
            id: 2,
            src: Cplus,
            title: 'C++',
            style: 'shadow-blue-700'
        },
        {
            id: 3,
            src: Java,
            title: 'Java',
            style: 'shadow-red-500'
        },
        {
            id: 4,
            src: HTML,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 5,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-400'
        },
        {
            id: 6,
            src: Javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 7,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-cyan-500'
        },
        {
            id: 8,
            src: Reacts,
            title: 'Reacts',
            style: 'shadow-blue-500'
        },
        {
            id: 9,
            src: Nodejs,
            title: 'Nodejs',
            style: 'shadow-green-500'
        },
        {
            id: 10,
            src: Expressjs,
            title: 'Express',
            style: 'shadow-green-300'
        },
        {
            id: 11,
            src: Mongodb,
            title: 'Mongodb',
            style: 'shadow-green-400'
        },
        {
            id: 12,
            src: Mysql,
            title: 'MySQL',
            style: 'shadow-orange-400'
        },
        {
            id: 13,
            src: Reacts,
            title: 'React Native',
            style: 'shadow-blue-300'
        },
        {
            id: 14,
            src: GitHub,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 15,
            src: Firebase,
            title: 'Firebase',
            style: 'shadow-gray-400'
        },
    ]



    return (
        <div  className='bg-gradient-to-b
     from-gray-800 to-black w-full h-full pt-16 md:pt-72'>
        {/* max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full  */}
            <div className='max-w-screen-lg  p-4 mx-auto 
        flex flex-col justify-center  h-full text-white'>
            {/* className='pb-6 pt-10 md:p-0' */}
                <div name='Skill' className='pb-6 lg:pt-14 md:p-0  ' >
                {/* className='text-3xl font-bold inline border-b-4 border-gray-500' */}
                    <p className='text-3xl font-bold inline border-b-4 border-gray-500'>Skills</p>
                    <p className='py-6'>These are the technologies I've
                        worked on.</p>
                </div>

                {/* grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 sm:px-0 */}
                <div className=' grid grid-cols-2 
            sm:grid-cols-3 gap-6 px-6 text-center py-8 sm:px-0'>
                    {
                        skills.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md  hover:scale-110 duration-500 
                            py-2 rounded-lgg ${style}` }>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Skill