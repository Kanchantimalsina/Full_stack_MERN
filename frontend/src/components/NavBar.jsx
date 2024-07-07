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
    <nav className="m-[2vh] lg:mr-[30vh]">
      <div className="flex justify-between">
        <Link to="/home">
          <img
            src={logo}
            alt="Logo"
            className="p-0 h-16 w-auto sm:h-20 md:h-24 lg:h-28"
          />
        </Link>
        <button onClick={handleClick} className="relative">
          <HamburgerIcon
            boxSize={{ base: 6, sm: 8, md: 9, lg: 9 }}
            className={`transition-opacity duration-300 ${
              clicked ? "opacity-0" : "opacity-100"
            }`}
          />
        </button>
      </div>

      {clicked && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center z-50">
          <button
            onClick={handleClick}
            className="absolute top-0 right-0 m-[5vh] lg:mr-[30vh] "
          >
            <CloseIcon
              boxSize={{ base: 6, sm: 8, md: 9, lg: 9 }}
              color="white"
            />
          </button>
          <div className="flex items-center justify-center">
            <ul>
              <li>
                <h1 className="text text-blue-50 "> Home</h1>
              </li>
              <li>
                <h1 className="text text-blue-50 "> Home</h1>
              </li>
              <li>
                <h1 className="text text-blue-50 "> Home</h1>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
