import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/hero.jpg";
import { motion } from "framer-motion";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 pl-3 flex flex-col md:flex-row justify-between w-full mb-5 md:mb-0 ">
      <div className="flex flex-col items-center lg:items-start ">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-16  text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
        >
          Umesh S
        </motion.h1>
        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent capitalize "
        >
          enthusiastic and driven software developer
        </motion.span>
        <motion.p
          variants={container(0.9)}
          initial="hidden"
          animate="visible"
          className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>
      <div className="flex  p-12">
        <div className="flex  justify-center items-center ">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            animate={{ x: 0, opacity: 1 }}
            src={profilePic}
            alt="dp"
            className=" rounded-3xl"
          ></motion.img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
