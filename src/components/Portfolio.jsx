import React from 'react'
import movie from '../assests/movie.png'
import contact from '../assests/contact.png'
import dessertshop from '../assests/dessertshop.png'
import insta from '../assests/insta.png'

const Work = () => {
    const images = [
        {
            id: 1,
            img:insta ,
            heading: "Instagram WebApp",
            link1:"https://myappclone.vercel.app/auth",
            link2:"https://github.com/anusha5539/Instagram-Clone"
        },
        {
            id:2,
            img: movie,
            heading: "Movie Recommendation system",
            link1:"https://github.com/anusha5539/movie",
            link2:"https://github.com/anusha5539/movie"
        },
        {
            id: 3,
            img: contact,
            heading: "Contact App",
            link1:"https://github.com/anusha5539/contact-app",
            link2:"https://github.com/anusha5539/contact-app"
        },
        {
            id: 4,
            img: dessertshop,
            heading: "Dessert Shop",
            link1:"https://github.com/anusha5539/dessertecommerce",
            link2:"https://github.com/anusha5539/dessertecommerce"
        }
    ]
    return (
        <>
            <div name="portfolio" className="md:h-screen w-full bg-gradient-to-b from-black to bg-gray-800 text-white pt-56">
                <div className="max-w-screen-lg mx-auto  flex flex-col justify-center   w-full h-full p-4">
                    <div className="pb-8">
                        <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Portfolio</p>
                        <p className="text-xl py-6">Check out some of my work here.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-12 sm:px-0">
                        {
                            images.map(({ id, img,heading,link1,link2 }) => (
                                <div key={id} className="shadow-md shadow-gray-500 rounded-lg my-5">
                                    <img src={img} alt="error" className="rounded-md duration-200 hover:scale-105 h-48  " />
                                    <div className="flex flex-row items-center justify-center">
                                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => link1 && window.open(link1, "_blank")}>Demo</button>
                                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"  onClick={() => link2 && window.open(link2, "_blank")}>Code</button>
                                    </div>
                                    <p className="text-xl text-center font-semibold pb-2">{heading }</p>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Work;