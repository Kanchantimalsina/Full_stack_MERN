import React from "react";
import logo from "../assets/logo.png";
function NavBar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black-800 text-white p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">
              <img src={logo} alt="" className="h-20" />
            </div>
            <ul className="flex space-x-10 text-2xl">
              <li className="hover:text-gray-300">Home</li>
              <li className="hover:text-gray-300">About</li>
              <li className="hover:text-gray-300">Services</li>
              <li className="hover:text-gray-300">Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
