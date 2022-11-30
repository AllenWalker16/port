import React from "react";
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className="font-ral">
            <div className=" bg-zinc-900 w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className=" text-[#00df9a] font-bold p-2">Hello there! Welcome to the my profile</p>
                <h1 className="text-4xl sm:text-6xl md:text-7xl text-white font-bold py-4">Bolarinwa Uthman</h1>
                <div>
                    <p className="text-xl md:text-4xl font-semibold sm:text-3xl text-white">Frontend Developer with interests in </p>
                    <Typed className="text-xl font-bold md:text-4xl sm:text-3xl text-gray-500" strings={['programming','gaming','blockchain', 'designing']} typeSpeed={150} backSpeed={160} loop />
                </div>
                <div className="flex justify-center w-full mt-8">
                    <button className="py-2 px-8 mt-2 mb-4 mr-20 bg-transparent text-[#00df9a] hover:bg-[#00df9a] hover:text-black">Download CV</button>
                    <button className="py-2 px-8 mt-2 mb-4 ">Explore</button>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;