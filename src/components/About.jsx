import React from 'react'

const About = () => {
    return (
        <>
            <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-44 sm:pt-0">
                <div className=" max-w-screen-lg mx-auto  flex flex-col items-center justify-center   w-full h-full p-4">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                    </div>
                    <p className="mt-20 text-xl">
                        I am a motivated and versatile individual, always eager to take on new challenges.I am dedicate to learn and apply new technologies, with experience building personal projects that demonstrate problem-solving skills and attention to detail.
                    </p>
                    <br></br>
                    <p className="text-xl">
                        I am eager to begin my professional journey in web development, contributing to innovative teams and real-world projects. My goal is to grow as a developer while delivering high-quality solutions that make a meaningful impact.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About