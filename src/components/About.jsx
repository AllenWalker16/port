import React from "react";
import Allen from "../assets/allenlen.jpeg"
const About = () => {
    return ( 
        <div className="w-full font-ral h-screen flex items-center">
            <div className="max-w-[1080px] mx-auto grid md:grid-cols-2">
                <img className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] object-cover object-top mx-auto my-4 rounded-full" src={Allen} alt="" />
                <div className="flex flex-col justify-center m-4">
                    <h1 className="text-[#00df9a] font-bold md:text-4xl sm:text-3xl text-2xl py-2 anime">About Me</h1>
                    <p className="font-semibold">Hello again, my name is <span className="text-[#00df9a] font-bold text-lg">Bolarinwa Uthman</span> and i am a passionate Frontend Developer, interested in making juicy and clean user interfaces. my other interests include playing video games, watching animes, sports, reading fan manga, manhwa and comics, check out this cool CV</p>
                    <button className="py-3 w-[200px] px-10 mt-2 mb-4 mx-auto bg-black text-[#00df9a] hover:bg-[#00df9a] hover:text-black md:mx-0 border-none rounded-md">Download CV</button>
                </div>
            </div>
        </div>
     );
}
 
export default About;