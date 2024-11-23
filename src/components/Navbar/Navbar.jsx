import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <>
        <nav className="flex z-0 px-5 justify-between items-center mx-auto bg-secondary">
            <div className="text-xl font-gugi text-lite md:text-3xl text-left">
                AdvocAIte
            </div>
            <button onClick={toggleMenu} aria-expanded={isMenuOpen} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-lite">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </nav>
        <div className={`${isMenuOpen? "max-h-screen opacity-100" : "max-h-0 opacity-0" } transition-opacity duration-500 fixed`} id="navbar-hamburger">
            <ul className="absolute rounded-ee w-screen bg-secondary flex flex-col font-medium">
                <li>
                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                </li>
                <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                </li>
            </ul>
        </div>
        </>
    )
}