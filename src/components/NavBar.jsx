import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 md:px-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-9 "></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-6 text-2xl ">
        <a
          href="https://www.linkedin.com/in/umesh-s-75132b1ab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/007Umesh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/_umesh_s_gowda_/profilecard/?igsh=NWxtYWxwOTBqbGIz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
