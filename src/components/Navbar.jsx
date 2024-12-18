import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import { FaBars } from "react-icons/fa6";
import { Link } from "react-scroll"

const Navbar = () => {
    const [nav, setNavicon] = useState(false);

    const links = [
        {
            id: 1,
            page: "home"
        },
        {
            id: 2,
            page: "about"
        },
        {
            id: 3,
            page: "portfolio"
        },
        {
            id: 4,
            page: "experience"
        },
        {
            id: 5,
            page: "contact"
        }
    ]
    return (
        <>
            {/* navbar for large screen */}
            <div className="flex justify-between items-center w-full h-20 text-white bg-black sm:px-20 px-10 fixed z-50">
                <h1 className="font-signature text-5xl">Anusha</h1>
                <ul className="hidden md:flex">
                    {links.map(({ id, page }) => (
                        <li key={id} className="text-white-500 px-4 capitalize cursor-pointer font-medium hover:text-orange-600 hover:scale-105 duration-100 ">
                            <Link to={page} smooth={true} duration={500}>
                                {page}
                            </Link>
                        </li>
                    ))}

                </ul>

                {/* navbar with hamburger icon and state change for responsiveness */}
                <div onClick={() => setNavicon(!nav)} className="cursor-pointer pr-4 z-10 md:hidden sm:flex ">
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
                {nav &&
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white">
                        {links.map(({ id, page }) => (
                            <li key={id} className="text-white-500 px-4 capitalize cursor-pointer text-4xl hover:text-orange-600 hover:scale-105 duration-100 py-6 "><Link onClick={()=>setNavicon(!nav)} to={page} smooth={true} duration={500}>
                                {page}
                            </Link></li>
                        ))}
                    </ul>}
            </div>
        </>
    )
}

export default Navbar