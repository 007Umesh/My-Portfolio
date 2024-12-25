import React from "react";
import abtPic from "../assets/abt.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900  pb-4  w-full ">
      <h1 className=" md:my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap gap-20">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block w-1/3 "
        >
          <div className="flex items-center justify-center">
            <img src={abtPic} className="rounded-3xl h-[400px]"></img>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mt-7 md:mt-0"
        >
          <div className="flex justify-center md:justify-start">
            <p className="my-2 tracking-tight text-justify">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
