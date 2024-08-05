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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </p>
                    <br></br>
                    <p className="text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About