import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const toggleLogin = () => {
        setIsLoggedIn (!isLoggedIn);
    }
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return(
        <>
        <nav className="flex z-0 px-5 h-16 justify-between items-center mx-auto bg-secondary">
            <div className="text-xl font-gugi text-lite md:text-3xl text-left">
                Advoc<span className="text-gray-400">AI</span>te
            </div>
            <div id="navbar">
                <ul className={`${isMenuOpen ? "w-[12%]" : "w-0"} hidden transition-all duration-500 fixed overflow-hidden z-1 h-screen top-[6%] right-0 rounded-ee bg-secondary flex-col text-center uppercase font-extrabold items-center text-lite text-xl md:flex`}> 
                    <li className="flex w-full justify-center mt-5 py-5 hover:bg-[#06292b]  transition-all">
                    <a href="#" class="" aria-current="page">Chat</a>
                    </li>
                    <li className="flex w-full justify-center mt-5 py-5 hover:bg-[#06292b] transition-all">
                    <a href="#" class="">Law Logs</a>
                    </li>
                    <li className="flex w-full  justify-center mt-5 py-5 hover:bg-[#06292b] transition-all">
                    <a href="#" class="">Lawyer Finder</a>
                    </li>
                    <li className="flex w-full  justify-center mt-5 py-5 hover:bg-[#06292b] transition-all">
                    <a href="#" class="">Virtual Court</a>
                    </li>
                    <li className="flex w-full  justify-center mt-[36rem] py-5 hover:bg-[#06292b]  transition-all">
                    <a href="#" class="">Sign Up</a>
                    </li>
                </ul>
            </div>
            {/* <button onClick={toggleLogin} aria-expanded={isLoggedIn} type="button" className="hidden transition-all px-4 py-2 bg-white rounded-full items-center text-sm text-secondary font-bold hover:bg-gray-400 md:inline-flex">
                SignUp
                </button> */}
            <button onClick={toggleMenu} aria-expanded={isMenuOpen} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-lite">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </nav>
        <div className={`${isMenuOpen? "max-h-screen opacity-100" : "max-h-0 opacity-0" } transition-opacity duration-500 fixed`} id="navbar-hamburger">
            <ul className="absolute rounded-ee w-screen bg-secondary flex flex-col text-center uppercase font-extrabold md:hidden">
                <li>
                <a href="#" class="block py-2 px-3 text-white bg-primary rounded dark:bg-primary" aria-current="page">Chat</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Law Logs</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Lawyer Finder</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Virtual Court</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded bg-[#257180] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">SignUp</a>
                </li>
            </ul>
        </div>
        </>
    )
}