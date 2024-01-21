import React from 'react'

const Contact = () => {
    return (
        <div name='Contact' className='w-full h-screen 
        bg-gradient-to-b from-black to-gray-800 p-4
        text-white'>

            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='lg:text-3xl text-3xl font-bold inline border-b-4
                     border-gray-500'>
                        Contact
                    </p>
                    <p className='py-6'>Submit the form below to get in 
                    touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action='https://getform.io/f/1b4fd297-ff03-4c4b-9bf9-4868f446171e' method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name="name" required
                            placeholder='Enter your name'
                            className='p-2 bg-transparent  
                        border-2 rounded-md text-white 
                        focus:outline-none'
                        />
                        <input type="email" name="email" required
                            placeholder='Enter your Email'
                            className='my-4 p-2 bg-transparent  
                        border-2 rounded-md text-white 
                        focus:outline-none required'
                        />
                        <textarea name="message" required
                            placeholder='Enter yur Message'
                            rows="10"
                            className='p-2 bg-transparent border-2 rounded-md 
                         text-white focus:outline-none '>
                        </textarea>
                        <button className='text-white bg-gradient-to-b
                     from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex
                     items-center rounded-md hover:scale-110 duration-300 '>
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>


        </div>

    )
}

export default Contact