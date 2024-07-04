import React from "react";
import { aboutimage1 } from "../../assets/images";
import { IoLogoLinkedin, IoLogoFacebook } from "react-icons/io5";

export default function Schoolssectionidpage() {
  return (
    <div className="flex flex-col md:flex-row px-10 md:px-20 items-center w-full min-h-[100vh]">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div>
          <img src={aboutimage1} alt="" />
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4 text-center md:text-start mt-6 md:mt-0">
        <h1 className="uppercase text-primaryBlueColor font-semibold text-xl md:text-2xl">
          About Us Green Valley School
        </h1>
        <p className="text-secondaryBlackColor">
          We are a place where learning meets excellence. At Green Valley, we
          are committed to nurturing the minds of young learners, fostering
          their intellectual, social, and emotional growth. Our mission is to
          provide a supportive and stimulating environment where students can
          thrive academically and personally.
        </p>
        <h2 className="capitalize text-primaryBlueColor font-semibold text-xl md:text-2xl mt-4">
          Our Vision
        </h2>
        <p className="text-secondaryBlackColor">
          To be a leading institution in holistic education, empowering students
          to become responsible, innovative, and compassionate global citizens.
        </p>
        <div className="flex items-center flex-wrap gap-3 md:gap-0 justify-center md:justify-between mt-8 text-center md:text-start">
          <div>
            <h2 className="text-primaryBlueColor font-semibold uppercase text-md md:text-md">
              Location
            </h2>
            <p className="text-secondaryBlackColor italic">Kiharu, Muranga</p>
          </div>
          <div>
            <h2 className="text-primaryBlueColor font-semibold uppercase text-md md:text-md">
              Phone Number
            </h2>
            <p className="text-secondaryBlackColor italic">+254706235398</p>
          </div>
          <div>
            <h2 className="text-primaryBlueColor font-semibold uppercase text-md md:text-md">
              Email Address
            </h2>
            <p className="text-secondaryBlackColor italic">
              jasperwambugu@gmail.com
            </p>
          </div>
        </div>
        <hr className="mt-4 h-1 rounded bg-secondaryBlackColor" />
        <div className="w-full text-center mt-2">
          <h2 className="text-primaryBlueColor font-semibold uppercase text-md md:text-md">
            Follow Us on social media
          </h2>
          <div className="flex gap-2 md:gap-4 justify-center items-center text-4xl text-primaryBlueColor mt-8">
            <a href="">
              <IoLogoLinkedin />
            </a>
            <a href="">
              <IoLogoFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
