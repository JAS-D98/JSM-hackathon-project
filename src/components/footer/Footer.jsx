import React from "react";
import { footerLinks, socialMedia } from "../../data/Footer.js";
import { logo } from "../../assets/images/index.js";
import Button from "../button/Button.jsx";

export default function Footer() {
  return (
    <footer className="py-8 px-16 bg-footer text-white mt-16 bg-secondaryBlueColor">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={logo}
              alt="logo"
              width={150}
              height={46}
              className="m-0 dark:hidden"
            />
            <img
              src={logo}
              alt="logo"
              width={150}
              height={46}
              className="m-0 hidden dark:flex"
            />
          </a>
          <p className="mt-2 text-md text-primaryWhiteColor sm:max-w-sm leading-6">
            Schools Mine is the leading organization providing high quality
            information that supports parents pursuing a great education for
            their child/children, schools striving for excellence and
            communities working to diminish inequities in education.
          </p>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section, i) => (
            <div key={i} className="text-center">
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, i) => (
                  <li
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-secondaryBlackColor cursor-pointer"
                    key={i}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center flex-col md:flex-row justify-between mt-2">
        <div>
          <h3 className="font-medium mb-1 text-xl text-center md:text-start">
            Subscribe to our newsletter
          </h3>
          <form action="" className="flex items-center gap-2 text-secondaryBlackColor">
            <input
              type="text"
              className="outline-none rounded p-2"
              placeholder="Enter your email address here"
            />
            <Button title="Subscribe" border="border" />
          </form>
        </div>
        <div className="w-1/3 mt-8 md:mt-0">
          <h3 className="font-medium text-center text-xl">Follow Us On</h3>
          <div className="flex justify-between items-center gap-5 mt-5 flex-col md:flex-row ">
            {socialMedia.map((icon, i) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-gradient-to-r from-green to-blue-600 rounded-full transition duration-150 ease-out hover:ease-in hover:scale-110 cursor-pointer"
                key={i}
              >
                <div className="flex flex-col items-center">
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                  <p>{icon.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-white-400 mt-5 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <p className="flex items-center gap-2">
              <span className="text-2xl">&copy;</span> Copyright || All rights
              reserved.
            </p>
          </div>
        </div>
      </div>

      <a href="https://jasperwambuguport.netlify.app">
        <p className="mt-1 items-center flex w-full justify-center">
          <span className="text-secondaryBlackColor italic font-semibold">
            Designer: Jasper Wambugu
          </span>
        </p>
      </a>
      <div className="w-52 h-1 bg-primaryWhiteColor mx-auto rounded" />
    </footer>
  );
}
