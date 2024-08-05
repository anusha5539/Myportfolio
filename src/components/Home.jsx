import React from 'react'
import Lottie from "lottie-react";
import Aiimages from "../assests/Aiimage.json";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import {Link} from "react-scroll"

const Home = () => {
    return (
        <>
            <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
                <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row" >
                    <div className='flex flex-col justify-center h-full'>
                        <h2 className="text-4xl md:text-7xl  text-white font-bold">I am a web developer.</h2>
                        <p className="text-gray-500 py-4 max-w-md"> I am passionate about creating dynamic and user-friendly websites. I love transforming creative ideas into functional web solutions using HTML, CSS, JavaScript, and modern frameworks.</p>
                        <div>
                            <Link to="portfolio" smooth={true} duration={500} className="group text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 px-5  rounded py-1 hover:scale-105  duration-100 font-medium flex items-center my-3 text-xl w-fit">Portfolio
                                <span className="group-hover:rotate-90 "><MdOutlineKeyboardDoubleArrowRight size={25}/></span>
                            </Link>
                        </div>
                    </div>

                    <div className="mx-auto w-2/3 sm:w-1/3 md:w-full">
                        <Lottie animationData={Aiimages} loop={true} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home