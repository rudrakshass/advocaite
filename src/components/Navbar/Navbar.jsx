import React, { useState } from "react";
import { motion } from "motion/react";
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
    const list = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
      
      const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }
    return(
        <>
        <nav className="flex z-0 px-5 h-16 justify-between items-center mx-auto bg-secondary">
            <div className="text-xl font-gugi text-lite md:text-3xl text-left">
                Advoc<span className="text-gray-400">AI</span>te
            </div>
            <div id="navbar">
                <motion.ul 
                initial="hidden" whileInView="visible" variants={list}
                className={`${isMenuOpen ? "w-[12%]" : "w-0"} hidden transition-all duration-500 fixed overflow-hidden z-1 h-screen top-[6%] right-0 rounded-ee bg-secondary flex-col text-center uppercase font-extrabold items-center text-lite text-xl md:flex`}
                > 
                    <motion.li variants={item} whileTap={{scale: 0.1}} className="flex w-[90%] justify-center mt-5 py-3 rounded-lg hover:bg-[#06292b]  transition-all">
                    <a href="#" class="" aria-current="page">Chat</a>
                    </motion.li>
                    <motion.li variants={item} whileTap={{scale: 0.1}} className="flex w-[90%] justify-center mt-5 py-3 rounded-lg hover:bg-[#06292b] transition-all">
                    <a href="#" class="">Law Logs</a>
                    </motion.li>
                    <motion.li variants={item} whileTap={{scale: 0.1}} className="flex w-[90%] justify-center mt-5 py-3 rounded-lg hover:bg-[#06292b] transition-all">
                    <a href="#" class="">Lawyer Finder</a>
                    </motion.li>
                    <motion.li variants={item} whileTap={{scale: 0.1}} className="flex w-[90%] justify-center mt-5 py-3 rounded-lg hover:bg-[#06292b] transition-all">
                    <a href="#" class="">Virtual Court</a>
                    </motion.li>
                    <motion.li variants={item} whileTap={{scale: 0.1}} className="flex w-[90%] justify-center py-3 rounded-lg mt-[40rem] hover:bg-[#06292b]  transition-all">
                    <a href="#" class="">Sign Up</a>
                    </motion.li>
                </motion.ul>
            </div>
            {/* <button onClick={toggleLogin} aria-expanded={isLoggedIn} type="button" className="hidden transition-all px-4 py-2 bg-white rounded-full items-center text-sm text-secondary font-bold hover:bg-gray-400 md:inline-flex">
                SignUp
                </button> */}
            <motion.button whileHover={{scale: 1.1}} whileTap={{scale:0.9}} onClick={toggleMenu} aria-expanded={isMenuOpen} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-lite hover:bg-[#06292b] rounded-lg">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </motion.button>
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