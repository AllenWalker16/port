import React from "react";
import LinkedIn from "../assets/linkedin-icon.svg"
import Github from "../assets/github-icon.svg"
import Twitter from "../assets/twitter-icon.svg"
import Email from "../assets/email-icon.svg"

const Contacts = () => {
    return ( 
        <div className="font-ral bg-zinc-900 pb-8">
            <div className=" w-full flex mx-auto justify-center">
                <div className=" flex flex-row h-full space-x-6">
                    <a href="https://www.linkedin.com/in/bolarinwa-uthman-4bb42819a/"><img className="w-[25px] h-[25px] md:w-[25px] md:h-[25px] object-cover object-top mx-auto my-4 rounded-full" src={LinkedIn} alt="" /></a>
                    <a href="https://github.com/AllenWalker16"><img className="w-[25px] h-[25px] md:w-[25px] md:h-[25px] object-cover object-top mx-auto my-4 rounded-full" src={Github} alt="" /></a>
                    <a href="https://twitter.com/AllenWalker_16"><img className="w-[25px] h-[25px] md:w-[25px] md:h-[25px] object-cover object-top mx-auto my-4 rounded-full" src={Twitter} alt="" /></a>
                    <a href="mailto:uthmanbolarinwa16@gmail.com"><img className="w-[25px] h-[25px] md:w-[25px] md:h-[25px] object-cover object-top mx-auto my-4 rounded-full" src={Email} alt="" /></a>
                </div>
            </div>
            <div className="flex justify-center">
                <p className=" font-bold text-[#00df9a]">Allen Walker &copy;</p>
            </div>
        </div>
     );
}
 
export default Contacts;