import React from 'react'

const Contact = () => {
  return (
    <>
        <div name="contact" className="md:h-5/6 w-full bg-gradient-to-b from-black to bg-gray-800 text-white pt-56">
            <div className="max-w-screen-lg mx-auto  flex flex-col justify-center   w-full h-full p-4 ">
                <div className="pb-8">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Contact</p>
                    <p className="py-6 text-xl">Submit the form below to get in touch with me.</p>
                </div>
                <div className="flex flex-col justify-center items-center" >
                    <form action="https://getform.io/f/aolgkgzb" method="POST" className="flex flex-col justify-center md:w-1/2" >
                        <input type="text" placeholder="Enter your name" name="name"  className="mb-4 py-2 px-4 rounded-md bg-transparent border-2 text-white focus:outline-none"/>
                        <input type="email" placeholder="Enter your email" name="email"  className=" my-4 py-2 px-4 rounded-md bg-transparent border-2 text-white focus:outline-none"/>
                        <textarea name="message" rows="10" placeholder="Enter your message" className="py-2 px-4 rounded-md bg-transparent border-2 text-white focus:outline-none"></textarea>
                        <button className=" text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 px-6  rounded py-3 hover:scale-105  duration-300 font-medium flex items-center my-8 mx-auto text-xl ">Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact