import React from "react";
import { motion } from "motion/react";
import { BarLoader } from "react-spinners";

export default function Loadingbar(){
    return(
        <div>
            <div className="m-0 flex place-items-center justify-center min-h-screen flex-col">
            <motion.h1 drag whileHover={{ scale: 1.1 }}  whileTap={{ scale: 0.95 }} whileDrag={{scale:1.2}} className='font- text-10xl subpixel-antialiased font-black text-primary font-gugi'>A</motion.h1>
            <BarLoader
                color="white"
                cssOverride={{}}
                loading
                speedMultiplier={1}
                width={200}
                />
            </div>
        </div>
    )
}