import React from "react";
import { useState } from "react";
import {MenuIcon, XIcon} from '@heroicons/react/outline'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleHamburger = () =>setNav(!nav)
    return ( 
        <div className=" font-ral w-screen h-[80px] z-10 bg-zinc-900 fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center w-full">
                    <div className="w-1/5">
                        <h1 className="w-full text-xl text-[#00df9a] font-bold sm:text-2xl ml-2"><a href="b.com">Dark.seid</a></h1>
                    </div>
                    <ul className="hidden text-xs font-semibold md:flex w-3/5 justify-between text-white">
                        <li><a href="a.com">About</a></li>
                        <li><a href="a.com">Contact</a></li>
                        <li><a href="a.com">Skills</a></li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="px-4 py-2">Explore</button>
                </div>
                <div className="md:hidden" onClick={handleHamburger}>
                    {!nav ? <MenuIcon className="w-5 text-white" /> : <XIcon className="w-5 text-white" /> }
                </div>
            </div>
            <ul className={!nav ? "hidden": "absolute bg-zinc-900 text-white w-full px-8 ease-in-out duration-500"}>
                <li className=" border-b border-zinc-800 w-full">About</li>
                <li className=" border-b border-zinc-800 w-full">Roster</li>
                <li className=" border-b border-zinc-800 w-full">Games</li>
                <li className=" border-b border-zinc-800 w-full">Tournaments</li>
                <div className="flex flex-col">
                    <button className="px-4 py-2 mt-2 mb-4">Explore</button>
                </div>
            </ul>
        </div>
     );
}
 
export default Navbar;