import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { navLinks } from "../../data/Navigation";
import { IoMoonOutline, IoSearch, IoSunny } from "react-icons/io5";
import Button from "../button/Button";
import { logo } from "../../assets/images";

function Navbar() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/authentication/logout");
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="w-full fixed z-20">
      <div className="text-primaryWhiteColor font-poppins w-full md:w-[90%] md:mt-4 mx-auto bg-primaryBlueColor p-3 md:rounded-xl flex items-center justify-between">
        <img src={logo} alt="logo icon" className="w-16" />
        <nav className="items-center gap-4 hidden md:flex">
          {navLinks.map((link, i) => (
            <Link
              to={link.href}
              key={i}
              className="hover:opacity-70 font-semibold relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primaryWhiteColor after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6 text-xl cursor-pointer">
          <span onClick={() => darkModeHandler()}>
            {dark && <IoSunny />}
            {!dark && <IoMoonOutline />}
          </span>
          <IoSearch />
        </div>
        <div className="flex items-center gap-2">
          {!isLoggedIn && (
            <>
              <Link to="/login">
                <Button title="Login" marginTop="0" />
              </Link>
              <Link to="/sign-up">
                <Button
                  title="Sign Up"
                  backgroundColor="bg-primary"
                  border="border"
                  marginTop="0"
                />
              </Link>
            </>
          )}
          {isLoggedIn && (
            <Button
              title="Log Out"
              backgroundColor="bg-primary"
              border="border"
              marginTop="0"
              funcWord={handleLogout}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
