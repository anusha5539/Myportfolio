import React from 'react'
import html from '../assests/html.png'
import css from '../assests/css.png'
import javascript from '../assests/javascript.png'
import Laravel from '../assests/Laravel.png'
import github from '../assests/github.png'
import tailwind from '../assests/tailwind.png'
import reactimg from '../assests/react.png'
import chakra from '../assests/chakra.png'
import firebase from '../assests/firebase.png'


const Experience = () => {
    const experience = [
        {
            id: 1,
            src: html,
            text: "HTML",
            color: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            text: "CSS",
            color: "shadow-purple-500"
        },
        {
            id: 3,
            src: javascript,
            text: "Javascript",
            color: "shadow-red-500"
        },
        {
            id: 4,
            src: Laravel,
            text: "Laravel",
            color: "shadow-blue-500"
        },
        {
            id: 5,
            src: github,
            text: "Github",
            color: "shadow-pink-500"
        },
        {
            id: 6,
            src: tailwind,
            text: "Tailwind",
            color: "shadow-sky-500"
        },
        {
            id: 7,
            src: reactimg,
            text: "React",
            color: "shadow-yellow-500"
        },
        {
            id: 8,
            src: chakra,
            text: "Chakra",
            color: "shadow-orange-500"
        },
        {
            id: 9,
            src: firebase,
            text: "Firebase",
            color: "shadow-gray-500"
        }
    ]
    return (
        <>
            <div name="experience" className="md:h-5/6 w-full bg-gradient-to-b from-gray-800 to bg-black text-white pt-72">
                <div className="max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-full p-4">
                    <div className="pb-8">
                        <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Experiences</p>
                        <p className="text-xl py-6">These are the technologies I have worked with.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-12 sm:px-0">
                    {experience.map(({ id, src, text, color }) => (
                    <div key={id} className={`shadow-md  hover:scale-500 duration-500 py-2 rounded-lg  ${color}`} >
                        <img src={src} alt="error loading" className="w-20 mx-auto" />
                        <p className="mt-4 text-center">{text}</p>
                    </div>
                ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Experience;



