import React, { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { motion } from "motion/react";

function useMenuAnimation(isMenuOpen) {
  const [scope, animate] = useAnimate(!isMenuOpen);

  useEffect(() => {
    const menuAnimations = isMenuOpen
      ? [
          [
            "ul",
            { transform: "translateY(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" }
          ]
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" }
          ],
          ["ul", { transform: "translateX(110%)" }, { at: "-0.1" }]
        ];

    animate(menuAnimations);
  }, [isMenuOpen]);

  return scope;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scope = useMenuAnimation(isMenuOpen);

  return (
    <>
      <nav className="flex z-0 px-5 h-16 justify-between items-center mx-auto">
        <div className="text-xl font-gugi text-primary md:text-3xl text-left">
          Advoc<span className="text-gray-400">AI</span>te
        </div>
        <motion.div id="navbar" ref={scope}>
          <motion.ul
            className="hidden transition-all duration-500 fixed overflow-hidden w-[12%] -z-50 h-screen top-0 right-0 bg-secondary flex-col text-center uppercase font-extrabold items-center text-lite text-xl md:flex"
          >
            <motion.li
              whileTap={{ scale: 0.5 }}
              className="mt-16 py-3 w-[90%] rounded-lg hover:bg-[#1a1f22] transition-all"
            >
              <a href="#">Chat</a>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.5 }}
              className="mt-5 py-3 w-[90%] rounded-lg hover:bg-[#1a1f22] transition-all"
            >
              <a href="#">Law Logs</a>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.5 }}
              className="mt-5 py-3 w-[90%] rounded-lg hover:bg-[#1a1f22] transition-all"
            >
              <a href="#">Lawyer Finder</a>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.5 }}
              className="mt-5 py-3 w-[90%] rounded-lg hover:bg-[#1a1f22] transition-all"
            >
              <a href="#">Virtual Court</a>
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.5 }}
              className="flex w-[90%] justify-center py-3 rounded-lg mt-[41rem] bg-[#363d40] hover:bg-[#1a1f22]  transition-all"
            >
              <a href="#">Sign In</a>
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-lite hover:bg-[#1a1f22] rounded-lg"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </motion.button>
      </nav>
      <div className={`${isMenuOpen? "max-h-screen opacity-100" : "max-h-0 opacity-0" } transition-opacity duration-500 fixed`} id="navbar-hamburger">
            <ul className="absolute rounded-ee w-screen bg-secondary flex flex-col text-center uppercase font-extrabold md:hidden">
                <li>
                <a href="#" className="block py-2 px-3 text-white bg-primary rounded dark:bg-primary" aria-current="page">Chat</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Law Logs</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Lawyer Finder</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Virtual Court</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded bg-[#257180] hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">SignUp</a>
                </li>
            </ul>
        </div>
    </>
  );
}
