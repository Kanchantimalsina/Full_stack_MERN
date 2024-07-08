import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className=" lg:mr-[30vh]">
      <div className="flex justify-between">
        <Link to="/home">
          <img
            src={logo}
            alt="Logo"
            className="mt-5 p-0 h-16 w-auto sm:h-20 md:h-24 lg:h-28"
          />
        </Link>
        <button onClick={handleClick} className="relative">
          <HamburgerIcon
            boxSize={{ base: 6, sm: 8, md: 9, lg: 9 }}
            className={`transition-opacity duration-300 ${
              clicked ? "opacity-0" : "opacity-100"
            }`}
            color={"white"}
          />
        </button>
      </div>

      {clicked && (
        <div className="fixed inset-0 bg-black flex flex-col justify-end z-50">
          <button
            onClick={handleClick}
            className="absolute top-0 right-0 m-[5vh] lg:mr-[30vh]"
          >
            <CloseIcon
              boxSize={{ base: 6, sm: 8, md: 9, lg: 9 }}
              color="white"
            />
          </button>
          <div className="flex flex-row-reverse">
            <div className="flex flex-col items-center space-y-[9vh] pb-[20vh] pr-[50vh]">
              <Link to="/home" className="text-xl text-white">
                Home
              </Link>
              <Link to="/about" className="text-3xl text-white">
                About
              </Link>
              <Link to="/services" className="text-3xl text-white">
                Services
              </Link>
              <Link to="/contact" className="text-3xl text-white">
                Contact
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-[9vh] pb-[20vh] pr-[50vh]">
              <Link to="/home" className="text-4xl text-white">
                Home
              </Link>
              <Link to="/about" className="text-4xl text-white">
                About
              </Link>
              <Link to="/services" className="text-4xl text-white">
                Services
              </Link>
              <Link to="/contact" className="text-4xl text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
