import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/Navigation";
import { IoMoonOutline, IoSearch } from "react-icons/io5";
import Button from "../button/Button";
import { logo } from "../../assets/images";

function Navbar() {
  return (
    <div className="text-primaryWhiteColor font-poppins w-full md:w-[90%] md:mt-4 mx-auto bg-primaryBlueColor p-3 md:rounded-xl flex items-center justify-between">
      <img src={logo} alt="logo icon" className="w-16" />
      <nav className="items-center gap-4 hidden md:flex">
        {navLinks.map((link, i) => (
          <Link
            to={link.href}
            key={i}
            className="hover:opacity-70 font-semibold"
          >
            {link.text}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-6 text-xl cursor-pointer">
        <IoMoonOutline />
        <IoSearch />
      </div>
      <div className="flex items-center gap-2">
        <Button title="Login" />
        <Button title="Sign Up" backgroundColor="bg-primary" border="border" />
      </div>
    </div>
  );
}

export default Navbar;
