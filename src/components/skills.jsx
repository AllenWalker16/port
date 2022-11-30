import React from "react";
import Canva from "../assets/canva.svg"
import JS from "../assets/js.svg"
import html from "../assets/html.svg"
import Figma from "../assets/figma.svg"
import css from "../assets/css.svg"
import react from "../assets/react.svg"
const Skills = () => {
    return ( 
        <div className="font-ral">
            <div className=" bg-zinc-800 w-full h-screen mx-auto flex-col justify-center p-4">
                <h1 className="text-[#00df9a] font-bold md:text-4xl sm:text-3xl text-2xl mb-8">Tech Stack</h1>
                <div className="grid grid-cols-3 h-4/5">
                    <figure>
                        <img className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-cover object-top mx-auto my-4 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="typescript-logo" />
                        <figcaption className="flex justify-center text-[#00df9a] text-xs">TypeScript</figcaption>
                    </figure>
                    <figure>
                        <img className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-cover object-top mx-auto my-4 rounded-full" src={Canva} alt="" />
                        <figcaption className="flex justify-center text-[#00df9a] text-xs">Canva</figcaption>
                    </figure>
                    <figure>
                        <img className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-cover object-top mx-auto my-4 rounded-full" src={JS} alt="" />
                        <figcaption className="flex justify-center text-[#00df9a] text-xs">JavaScript</figcaption>
                    </figure>
                    <figure>
                        <img className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-cover object-top mx-auto my-4 rounded-full" src={html} alt="" />
                        <figcaption className="flex justify-center text-[#00df9a] text-xs">HTML</figcaption>
                    </figure>
                    <figure>
                        <img className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-cover object-top mx-auto my-4 rounded-full" src={Figma} alt="" />
                        <figcaption className="flex justify-center text-[#00df9a] text-xs">Figma</figcaption>
                    </figure>
                    <figure>
                        <img className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-cover object-top mx-auto my-4 rounded-full" src={css} alt="" />
                        <figcaption className="flex justify-center text-[#00df9a] text-xs">CSS</figcaption>
                    </figure>
                    <figure>
                        <img className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-cover object-top mx-auto my-4 rounded-full" src={react} alt="" />
                        <figcaption className="flex justify-center text-[#00df9a] text-xs">React</figcaption>
                    </figure>
                    <figure>
                        <img className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-cover object-top mx-auto my-4 rounded-full" src="https://cdn.cdnlogo.com/logos/g/31/gsap-greensock.svg" alt=""/>
                        <figcaption className="flex justify-center text-[#00df9a] text-xs">GSAP</figcaption>
                    </figure> 
                </div>
            </div>
        </div>
     );
}
export default Skills;