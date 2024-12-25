import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.6 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap justify-center gap-5 md:gap-32"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.6 }}
              className="w-full md:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="md:mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.6 }}
              className=" max-w-xl w-full md:w-3/4 border-b border-neutral-900 "
            >
              <h6
                className="mb-2 font-semibold bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text  tracking-tight text-transparent capitalize "
              >
                {project.title}
              </h6>
              <p className="pb-3">{project.description}</p>
              {project.technologies.map((tech, Index) => (
                <span
                  key={Index}
                  className="mr-2 rounded bg-neutral-300 px-2 py-l text-sm font-medium text-violet-900 tracking-tight"
                >
                  {index === PROJECTS.length - 1 && tech === "GitHub" ? (
                    <a
                      href="https://github.com/007Umesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-blue-600 hover:text-blue-800"
                    >
                      {tech}
                    </a>
                  ) : (
                    tech
                  )}
                </span>
              ))}
              {
                project.liveDemo && (
                  <div className="mt-4">
                    <a
                    href={project.liveDemo}
                    target="-blank"
                    rel="noopener noreferrer"
                    className="mr-2 rounded bg-neutral-300 px-2 py-l text-sm font-medium text-violet-900 tracking-tight">Live demo</a>
                  </div>
                )
              }
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
